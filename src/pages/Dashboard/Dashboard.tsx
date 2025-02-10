import { FC } from 'react'

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  return (
    <>
      <div className="mx-auto w-full max-w-[1024px] px-6">header</div>
      <div>diagram</div>
      <div className="mx-auto w-full max-w-[1024px] px-6">bottom</div>
    </>
  )
}

export default Dashboard
