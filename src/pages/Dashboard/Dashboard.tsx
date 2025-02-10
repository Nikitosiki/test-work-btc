import { FC } from 'react'

import Balance from '@/widgets/Balance'
import Chart from '@/widgets/Chart'
import TimeRange from '@/widgets/TimeRange'

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  return (
    <>
      <div className="mx-auto w-full max-w-[1024px] px-6">
        <Balance />
      </div>
      <Chart />
      <div className="mx-auto w-full max-w-[1024px] px-6">
        bottom
        <TimeRange />
      </div>
    </>
  )
}

export default Dashboard
