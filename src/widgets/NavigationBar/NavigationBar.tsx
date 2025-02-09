import { Badge, Tab, Tabs } from '@heroui/react'
import { FC } from 'react'

import {
  TablerCoin,
  TablerReload,
  TablerSettings,
  TablerShoppingCart,
  TablerChartHistogram,
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
        tab: 'h-16',
        tabContent: 'text-custom-gray group-data-[selected=true]:text-white',
        cursor: 'hidden',
      }}
      className={className}>
      <Tab
        key="dashboard"
        title={
          <div className="flex flex-col items-center gap-1">
            <TablerReload />
            Dashboard
          </div>
        }
      />
      <Tab
        key="megabot"
        title={
          <div className="flex flex-col items-center gap-1">
            <TablerChartHistogram />
            Megabot
          </div>
        }
      />
      <Tab
        key="bot-market"
        title={
          <div className="flex flex-col items-center gap-1">
            <TablerShoppingCart />
            Bot Market
          </div>
        }
      />
      <Tab
        key="coin-price"
        title={
          <div className="flex flex-col items-center gap-1">
            <TablerCoin />
            Coin Price
          </div>
        }
      />
      <Tab
        key="profile"
        title={
          <div className="flex flex-col items-center gap-1">
            <Badge
              content="3"
              size="md"
              className="bg-custom-budge border-none font-semibold text-white">
              <TablerSettings />
            </Badge>
            Profile
          </div>
        }
      />
    </Tabs>
  )
}

export default NavigationBar
