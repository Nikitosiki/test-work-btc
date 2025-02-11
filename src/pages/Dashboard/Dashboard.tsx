import { FC } from 'react'

import Balance from '@/widgets/Balance'
import Bots from '@/widgets/Bots/Bots'
import Chart from '@/widgets/Chart'
import TimeRange from '@/widgets/TimeRange'

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  return (
    <>
      <div className="mx-auto w-full max-w-[1024px] px-6">
        <Balance />
      </div>
      <div className="flex min-h-0 w-full flex-1">
        <Chart />
      </div>
      <div className="mx-auto w-full max-w-[1024px] space-y-4 px-6 py-4">
        <Bots />
        <TimeRange />
      </div>
    </>
  )
}

export default Dashboard
