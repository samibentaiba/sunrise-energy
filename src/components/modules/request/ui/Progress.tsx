import { cn } from "@/lib/utils";

type ProgressProps = {
  totalSteps: number;
  currentStep: number;
  className?: string;
};

export default function Progress({ totalSteps, currentStep, className }: ProgressProps) {
  const progress = totalSteps > 1 ? (currentStep / (totalSteps - 1)) * 100 : 0;

  return (
    <div className={cn("w-full bg-gray-200 h-1 rounded-full overflow-hidden", className)}>
      <div
        className="bg-blue-500 h-full transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}