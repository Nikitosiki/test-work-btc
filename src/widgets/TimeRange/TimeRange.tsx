import { Tab, Tabs } from '@heroui/react'
import { FC } from 'react'

interface TimeRangeProps {}

const TimeRange: FC<TimeRangeProps> = ({}) => {
  return (
    <div className="flex items-center gap-2 w-full text-custom-gray">
      <p className="font-semibold pb-1 text-nowrap">Time Range:</p>
      <Tabs
        aria-label="Time Range"
        variant="light"
        classNames={{
          base: "overflow-x-auto",
          tabList: 'gap-4',
          tab: 'border border-custom-gray data-[selected=true]:border-white rounded-full h-7 w-[4.5rem] pb-[0.37rem]',
          tabContent:
            'text-custom-gray group-data-[selected=true]:font-semibold text-center leading-none',
          cursor: 'hidden',
        }}>
        <Tab key="24h" title="24h" />
        <Tab key="7d" title="7 days" />
        <Tab key="30d" title="30 days" />
        <Tab key="all" title="All time" />
      </Tabs>
    </div>
  )
}

export default TimeRange
