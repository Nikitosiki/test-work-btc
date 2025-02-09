import { HeroUIProvider } from '@heroui/react'
import { FC } from 'react'

import Dashboard from '@/pages/Dashboard'
import TopAppBar from '@/widgets/TopAppBar'
import NavigationBar from '@/widgets/NavigationBar'

const App: FC = () => {
  return (
    <HeroUIProvider>
      <div className="bg-custom-bg flex min-h-screen flex-col">
        <TopAppBar />
        <Dashboard />
        <NavigationBar className="mt-auto" />
      </div>
    </HeroUIProvider>
  )
}

export default App
