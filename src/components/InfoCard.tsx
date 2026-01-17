import { Circle, LucideIcon } from "lucide-react";

interface InfoCardProps {
  title: string;
  description: string;
  price: string | number;
  icon?: LucideIcon;
  primaryAction?: { label: string; onClick: () => void };
  secondaryAction?: { label: string; onClick: () => void };
}

const InfoCard = ({
  icon: Icon = Circle,
  title,
  description,
  price,
  primaryAction,
  secondaryAction,
}: InfoCardProps) => {
  return (
    <div className="w-full max-w-lg rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      {/* Top section */}
      <div className="flex items-center justify-between gap-6">
        {/* Left: Icon + Info */}
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100">
            <Icon className="h-6 w-6 text-stone-700" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-stone-800">{title}</h2>
            <p className="mt-1 text-sm text-stone-600">{description}</p>
          </div>
        </div>

        {/* Right: Price */}
        <div className="flex items-center justify-center">
          <span className="text-3xl font-semibold text-stone-900">{price}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={primaryAction?.onClick}
          className="flex-1 rounded-xl bg-stone-800 px-4 py-2 text-white transition hover:bg-stone-700"
        >
          {primaryAction?.label}
        </button>

        <button
          onClick={secondaryAction?.onClick}
          className="flex-1 rounded-xl border border-stone-300 px-4 py-2 text-stone-700 transition hover:bg-stone-100"
        >
          {secondaryAction?.label}
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
