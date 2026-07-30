import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/utils/server/mongodb";

export async function POST(request: NextRequest) {
  try {
    const {
      fullName,
      email,
      ageGroup,
      country,
      city,
      contactMethod,
      additionalContact,
      service,
      mentorshipData,
      groupCoachingData,
      tradingSignalsData,
    } = await request.json();

    if (
      !fullName?.trim() ||
      !email?.trim() ||
      !ageGroup?.trim() ||
      !country?.trim() ||
      !city?.trim() ||
      !contactMethod?.trim() ||
      !service?.trim()
    ) {
      return NextResponse.json(
        { error: "Ве молиме пополнете ги задолжителните полиња" },
        { status: 400 },
      );
    }

    const db = await getDb();

    const newApplication = {
      fullName: fullName.trim(),
      email: email.trim(),
      ageGroup: ageGroup.trim(),
      country: country.trim(),
      city: city.trim(),
      contactMethod: contactMethod.trim(),
      additionalContact: additionalContact?.trim() || "",
      service: service.trim(),
      ...(mentorshipData ? { mentorshipData } : {}),
      ...(groupCoachingData ? { groupCoachingData } : {}),
      ...(tradingSignalsData ? { tradingSignalsData } : {}),
      createdAt: new Date().toISOString(),
    };

    const result = await db
      .collection("applications")
      .insertOne(newApplication);

    return NextResponse.json(
      {
        success: true,
        message: "Апликацијата е успешно зачувана",
        applicationId: result.insertedId,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error saving application:", error);
    return NextResponse.json(
      { error: "Failed to save application" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const db = await getDb();
    const applications = await db
      .collection("applications")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ applications }, { status: 200 });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { error: "Failed to fetch applications" },
      { status: 500 },
    );
  }
}
