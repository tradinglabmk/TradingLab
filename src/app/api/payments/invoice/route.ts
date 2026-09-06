import { NextRequest, NextResponse } from "next/server";
import path from "path";
import PDFDocument from "pdfkit";
import { getDb } from "@/utils/server/mongodb";
import { BUSINESS_INFO } from "@/app/data/businessInfo";

export const runtime = "nodejs";

// Single variable font covering both Latin and Cyrillic glyphs. It has no
// embedded bold instance, so boldText() fakes weight by double-drawing with
// a slight offset instead of switching fonts.
// Lives under public/ so it's always bundled with the deployment (unlike
// arbitrary src/ files, which need explicit output file tracing config).
const FONT_PATH = path.join(process.cwd(), "public/fonts/Roboto-Variable.ttf");

function generateInvoicePdf(payment: {
  invoiceNumber?: string;
  createdAt: string;
  customerName: string;
  customerEmail: string;
  planTitle: string | null;
  amount: number;
  currency: string;
}): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4", margin: 50 });
    doc.registerFont("Roboto", FONT_PATH);
    doc.font("Roboto");

    const boldText = (
      text: string,
      x?: number,
      y?: number,
      options?: PDFKit.Mixins.TextOptions,
    ) => {
      doc.text(text, x, y, options);
      doc.text(text, (x ?? doc.x) + 0.4, y, options);
    };

    const chunks: Buffer[] = [];
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    const issueDate = new Date(payment.createdAt).toLocaleDateString("mk-MK", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const amount = (payment.amount / 100).toFixed(2);

    doc.fontSize(22);
    boldText("ФАКТУРА", 50, doc.y, { align: "left" });
    doc.moveDown(0.5);
    doc.fontSize(10);
    boldText(`Број на фактура: ${payment.invoiceNumber ?? "—"}`, 50, doc.y);
    doc
      .fontSize(10)
      .text(`Датум на издавање: ${issueDate}`)
      .text(`Датум на достасување: ${issueDate}`);

    doc.moveDown(1.5);
    const colX = [50, 300];
    doc.fontSize(11);
    boldText("Продавач", colX[0], doc.y);
    const sellerY = doc.y;
    boldText("Купувач", colX[1], sellerY);

    doc.fontSize(10);
    doc.text(BUSINESS_INFO.name, colX[0]);
    BUSINESS_INFO.addressLines.forEach((line) => doc.text(line, colX[0]));
    doc.text(BUSINESS_INFO.supportEmail, colX[0]);

    doc.text(payment.customerName || "—", colX[1], sellerY + 15);
    doc.text(payment.customerEmail || "—", colX[1]);

    doc.moveDown(2);
    doc.fontSize(13);
    boldText(
      `${payment.currency} ${amount} доспева на ${issueDate}`,
      50,
      doc.y,
    );

    doc.moveDown(1);
    const tableTop = doc.y;
    doc.fontSize(10);
    doc.text("Опис", 50, tableTop);
    doc.text("Кол.", 320, tableTop);
    doc.text("Ед. цена", 380, tableTop);
    doc.text("Износ", 470, tableTop);
    doc
      .moveTo(50, tableTop + 15)
      .lineTo(545, tableTop + 15)
      .stroke();

    const rowY = tableTop + 25;
    doc.text(payment.planTitle || "Уплата", 50, rowY);
    doc.text("1", 320, rowY);
    doc.text(`${payment.currency} ${amount}`, 380, rowY);
    doc.text(`${payment.currency} ${amount}`, 470, rowY);

    doc
      .moveTo(300, rowY + 20)
      .lineTo(545, rowY + 20)
      .stroke();
    doc.text("Меѓузбир", 380, rowY + 30);
    doc.text(`${payment.currency} ${amount}`, 470, rowY + 30);
    boldText("Вкупно", 380, rowY + 45);
    boldText(`${payment.currency} ${amount}`, 470, rowY + 45);
    boldText("Платено", 380, rowY + 60);
    boldText(`${payment.currency} ${amount}`, 470, rowY + 60);

    doc.moveDown(4);
    doc
      .fontSize(9)
      .text("Ви благодариме што избравте TradingLab.mk!", 50, doc.y, {
        align: "center",
        width: 495,
      });

    doc.end();
  });
}

export async function GET(request: NextRequest) {
  try {
    const sessionId = request.nextUrl.searchParams.get("session_id");
    if (!sessionId) {
      return NextResponse.json(
        { error: "Missing session_id" },
        { status: 400 },
      );
    }

    const db = await getDb();
    const payment = await db
      .collection("payments")
      .findOne({ stripeSessionId: sessionId });
    if (!payment) {
      return NextResponse.json({ error: "Payment not found" }, { status: 404 });
    }

    const pdfBuffer = await generateInvoicePdf({
      invoiceNumber: payment.invoiceNumber,
      createdAt: payment.createdAt,
      customerName: payment.customerName,
      customerEmail: payment.customerEmail,
      planTitle: payment.planTitle,
      amount: payment.amount,
      currency: payment.currency,
    });

    return new NextResponse(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="Faktura-${payment.invoiceNumber ?? sessionId}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Error generating invoice PDF:", error);
    return NextResponse.json(
      { error: "Failed to generate invoice" },
      { status: 500 },
    );
  }
}
