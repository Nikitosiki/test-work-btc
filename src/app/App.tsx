import { HeroUIProvider } from '@heroui/react'
import { FC } from 'react'

import Dashboard from '@/pages/Dashboard'
import NavigationBar from '@/widgets/NavigationBar'
import TopAppBar from '@/widgets/TopAppBar'

const App: FC = () => {
  return (
    <HeroUIProvider>
      <div className="flex max-h-screen min-h-screen flex-col bg-custom-bg text-white dark">
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
