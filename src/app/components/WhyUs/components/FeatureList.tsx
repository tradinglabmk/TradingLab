import { ReactNode } from "react";

interface FeatureListProps {
  title: ReactNode;
  items: string[];
  icon: ReactNode;
  iconColor: string;
  titleColor?: string;
}

export const FeatureList = ({ title, items, icon, iconColor, titleColor = "text-white" }: FeatureListProps) => {
  return (
    <div>
      <h3 className={`text-2xl md:text-3xl mb-8 ${titleColor}`}>
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((text, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="bg-transparent border border-white rounded-full p-1 flex items-center justify-center flex-shrink-0 mt-1">
              <div className={iconColor}>
                {icon}
              </div>
            </div>
            <span className="text-base mt-1 md:text-lg">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};