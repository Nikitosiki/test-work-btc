import { Tab, Tabs } from '@heroui/react'
import { FC } from 'react'

import { useTradingStore } from '@/store'

interface TimeRangeProps {}

const TimeRange: FC<TimeRangeProps> = ({}) => {
  const { interval, setInterval } = useTradingStore()

  return (
    <div className="flex w-full items-center gap-2 text-custom-gray">
      <p className="text-nowrap pb-1 font-semibold">Time Range:</p>
      <Tabs
        aria-label="Time Range"
        variant="light"
        selectedKey={interval}
        onSelectionChange={(selected) =>
          setInterval(selected as '24h' | '7d' | '30d' | 'all_time')
        }
        classNames={{
          base: 'overflow-x-auto',
          tabList: 'gap-4',
          tab: 'border border-custom-gray data-[selected=true]:border-white rounded-full h-7 w-[4.5rem] pb-[0.37rem]',
          tabContent:
            'text-custom-gray group-data-[selected=true]:font-semibold text-center leading-none',
          cursor: 'hidden',
        }}>
        <Tab key="24h" title="24h" />
        <Tab key="7d" title="7 days" />
        <Tab key="30d" title="30 days" />
        <Tab key="all_time" title="All time" />
      </Tabs>
    </div>
  )
}

export default TimeRange
