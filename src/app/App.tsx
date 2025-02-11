import { HeroUIProvider } from '@heroui/react'
import { FC, useEffect } from 'react'

import Dashboard from '@/pages/Dashboard'
import { useTradingStore } from '@/store'
import NavigationBar from '@/widgets/NavigationBar'
import TopAppBar from '@/widgets/TopAppBar'

const App: FC = () => {
  const loadData = useTradingStore((state) => state.loadData)

  useEffect(() => {
    loadData()
  }, [loadData])

  return (
    <HeroUIProvider>
      <div className="flex max-h-dvh min-h-dvh w-full flex-col bg-custom-bg text-white dark">
        <TopAppBar />
        <Dashboard />
        <NavigationBar className="mt-auto" />
      </div>
    </HeroUIProvider>
  )
}

export default App
