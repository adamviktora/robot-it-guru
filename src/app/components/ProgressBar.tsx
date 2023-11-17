import { FC, PropsWithChildren } from "react";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: FC<PropsWithChildren<ProgressBarProps>> = ({
  percentage,
  children,
}) => {
  const color =
    percentage <= 25
      ? "red"
      : percentage <= 50
      ? "orange"
      : percentage <= 75
      ? "yellow"
      : "lime";

  return (
    <div className="w-80 md:w-[40rem] py-3">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{children}</span>
        <span className="font-medium">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-5">
        <div
          className={color}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
