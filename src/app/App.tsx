import { HeroUIProvider } from '@heroui/react'
import { FC } from 'react'

import Dashboard from '@/pages/Dashboard'

const App: FC = () => {
  return (
    <HeroUIProvider>
      <Dashboard />
    </HeroUIProvider>
  )
}

export default App
