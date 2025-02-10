import { FC } from 'react'

import BotItem from './components/BotItem'

interface BotsProps {}

const Bots: FC<BotsProps> = ({}) => {
  return (
    <div className="grid grid-cols-3 gap-[0.1rem]">
      <BotItem name="ATTACK" percentage="-8.2%" isPositive={false} number={6} />
      <BotItem
        name="PLACE BOT HERE"
        percentage="0"
        number={5}
        isPlace
      />
      <BotItem
        name="BALANCE"
        percentage="-3.7%"
        isPositive={false}
        number={4}
      />
      <BotItem name="DEFENCE" percentage="2.5%" number={1} />
      <BotItem name="MEGABOT" percentage="3.6%" number={2} />
      <BotItem name="ATTACK" percentage="13.7%" number={3} isSelect />
    </div>
  )
}

export default Bots
