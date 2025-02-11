import { HeroUIProvider } from '@heroui/react'
import { FC, useEffect, useState } from 'react'

import Dashboard from '@/pages/Dashboard'
import NavigationBar from '@/widgets/NavigationBar'
import TopAppBar from '@/widgets/TopAppBar'

const App: FC = () => {
  // const [interval, setinterval] = useState('one')
  // const [first, setfirst] = useState(localStorage.getItem('interval') || '')


  // useEffect(() => {
  //   setfirst(data.load(setfirst))
  // }, [interval])
  

  // useEffect(() => {
  //   localStorage.setItem('first', first)
  
  // }, [first])
  


  return (
    <HeroUIProvider>
      <div className="flex max-h-dvh min-h-dvh flex-col bg-custom-bg text-white dark">
        <TopAppBar />
        <div className="overflow-y-auto">
          <Dashboard />
        </div>
        <NavigationBar className="mt-auto" />
      </div>
    </HeroUIProvider>
  )
}

export default App
