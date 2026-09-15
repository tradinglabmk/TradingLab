"use client";

import { FaTelegramPlane } from "react-icons/fa";
import paymentMethods from "../../../../public/assets/payment_methods.png";
import Image from "next/image";

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => (
  <div className="border border-purple-500 rounded-lg p-6 bg-gray-900 shadow-lg">
    {children}
  </div>
);

const CardContent = ({ children }: CardProps) => (
  <div className="mt-4">{children}</div>
);

const steps = [
  {
    title: "Чекор 1",
    description: "Симнете ја апликацијата телеграм на вашиот уред.",
    icon: <FaTelegramPlane size={30} className="text-blue-500" />,
  },
  {
    title: "Чекор 2",
    description:
      "Контактирајте го нашиот тим доколку не знаете како да извршите наплата.",
    icon: (
      <div className="flex space-x-2">
        <Image src={paymentMethods} alt="visa" height={80} />
      </div>
    ),
  },
  {
    title: "Чекор 3",
    description:
      "Креирајте акаунт на нашиот партнер брокер добијте бонус на прв депозит.",
    icon: <FaTelegramPlane size={30} className="text-blue-500" />,
  },
];

export default function TradingLabSteps() {
  return (
    <div className="flex flex-col py-20 items-center text-center bg-black text-white px-5 md:px-20">
      <h2 className="text-3xl font-bold">Како да започнеш?</h2>
      <p className="text-lg mt-2">
        <span className="text-purple-400 font-semibold">TradingLab MK</span> ќе
        те помогне да оствариш резултати. Следи го нашиот план, и живеј го
        животот што го{" "}
        <span className="text-purple-400 font-semibold">заслужуваш!</span>
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <Card key={index}>
            <div className="flex justify-center">{step.icon}</div>
            <CardContent>
              <h3 className="text-lg font-semibold text-purple-400">
                {step.title}
              </h3>
              <p className="text-sm mt-2">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
