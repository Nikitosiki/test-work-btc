import { FC } from 'react'

import TimeRange from '@/widgets/TimeRange'

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  return (
    <>
      <div className="mx-auto w-full max-w-[1024px] px-6">header</div>
      <div>diagram</div>
      <div className="mx-auto w-full max-w-[1024px] px-6">
        bottom
        <TimeRange />
      </div>
    </>
  )
}

export default Dashboard
