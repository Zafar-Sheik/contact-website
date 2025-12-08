import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  iconColor: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  color,
  iconColor,
}: FeatureCardProps) => {
  return (
    <div
      className={`rounded-2xl border-2 p-6 h-full transition-all hover:shadow-lg ${color}`}>
      <div
        className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${iconColor}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
