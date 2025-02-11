import { Spinner } from '@heroui/react'
import { FC } from 'react'

import BotItem from '@/shared/ui/BotItem'
import { useTradingStore } from '@/store'

interface BotsProps {}

const Bots: FC<BotsProps> = ({}) => {
  const { data, interval } = useTradingStore()

  if (!data) return <Spinner className="mx-auto my-4 block w-10" />

  return (
    <div className="grid grid-cols-3 gap-[0.1rem]">
      <BotItem
        name="ATTACK"
        percent={data.bots[0][interval]}
        number={6}
      />
      <BotItem name="PLACE BOT HERE" percent={0} number={5} isPlace />
      <BotItem
        name="BALANCE"
        percent={data.bots[2][interval]}
        number={4}
      />
      <BotItem
        name="DEFENCE"
        percent={data.bots[3][interval]}
        number={1}
      />
      <BotItem
        name="MEGABOT"
        percent={data.bots[4][interval]}
        number={2}
      />
      <BotItem
        name="ATTACK"
        percent={data.bots[5][interval]}
        number={3}
        isSelect
      />
    </div>
  )
}

export default Bots
