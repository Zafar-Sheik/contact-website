import { CheckCircle } from "lucide-react";

interface PricingCardProps {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  popular: boolean;
  color: string;
  isAnnual: boolean;
  onSelect: () => void;
}

const PricingCard = ({
  name,
  description,
  monthlyPrice,
  annualPrice,
  features,
  popular,
  color,
  isAnnual,
  onSelect,
}: PricingCardProps) => {
  const price = isAnnual ? annualPrice : monthlyPrice;
  const period = isAnnual ? "year" : "month";

  return (
    <div
      className={`relative rounded-2xl border-2 p-8 h-full ${color} ${
        popular ? "shadow-xl scale-105" : "shadow-md"
      }`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </div>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>

      <div className="text-center mb-6">
        <div className="flex items-center justify-center">
          <span className="text-5xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-600 ml-2">/ {period}</span>
        </div>
        {isAnnual && (
          <p className="text-emerald-600 text-sm mt-2">
            Save ${monthlyPrice * 12 - annualPrice * 12} annually
          </p>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? "bg-emerald-600 text-white hover:bg-emerald-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}>
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;
