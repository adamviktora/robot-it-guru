import { FC, PropsWithChildren } from 'react'

interface ProgressBarProps {
  percentage: number
}

const ProgressBar: FC<PropsWithChildren<ProgressBarProps>> = ({
  percentage,
  children,
}) => {
  return (
    <div className="w-80 py-3">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-white">
          {children}
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar
