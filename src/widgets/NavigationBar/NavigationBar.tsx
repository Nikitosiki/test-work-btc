import { Badge, Tab, Tabs } from '@heroui/react'
import { FC } from 'react'

import {
  TablerCoin,
  TablerSettings,
  TablerShoppingCart,
  TablerChartHistogram,
  TablerList,
} from '@/shared/icons'

interface NavigationBarProps {
  className?: string
}

const NavigationBar: FC<NavigationBarProps> = ({ className }) => {
  return (
    <Tabs
      aria-label="Tabs variants"
      variant="light"
      classNames={{
        base: 'bg-custom-bg-light w-full block',
        tabList: 'justify-evenly w-full',
        tab: 'h-16 px-0',
        tabContent: 'text-custom-gray group-data-[selected=true]:text-white',
        cursor: 'hidden',
      }}
      className={className}>
      <Tab
        key="dashboard"
        title={
          <div className="flex flex-col items-center max-sm:text-xs">
            <TablerList className="sm:size-8" />
            Dashboard
          </div>
        }
      />
      <Tab
        key="megabot"
        title={
          <div className="flex flex-col items-center max-sm:text-xs">
            <TablerChartHistogram className="sm:size-8" />
            Megabot
          </div>
        }
      />
      <Tab
        key="bot-market"
        title={
          <div className="flex flex-col items-center max-sm:text-xs">
            <TablerShoppingCart className="sm:size-8" />
            Bot market
          </div>
        }
      />
      <Tab
        key="coin-price"
        title={
          <div className="flex flex-col items-center max-sm:text-xs">
            <TablerCoin className="sm:size-8" />
            Coin prices
          </div>
        }
      />
      <Tab
        key="profile"
        title={
          <div className="flex flex-col items-center max-sm:text-xs">
            <Badge
              content="3"
              size="md"
              className="bg-custom-budge z-20 border-none font-semibold text-white">
              <TablerSettings className="sm:size-8" />
            </Badge>
            Profile
          </div>
        }
      />
    </Tabs>
  )
}

export default NavigationBar
