import { HeroUIProvider } from '@heroui/react'
import { FC } from 'react'

import Dashboard from '@/pages/Dashboard'
import NavigationBar from '@/widgets/NavigationBar'
import TopAppBar from '@/widgets/TopAppBar'

const App: FC = () => {
  return (
    <HeroUIProvider>
      <div className="flex min-h-screen flex-col bg-custom-bg text-white dark">
        <TopAppBar />
        <Dashboard />
        <NavigationBar className="mt-auto" />
      </div>
    </HeroUIProvider>
  )
}

export default App
