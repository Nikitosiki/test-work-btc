import { FC } from 'react'

interface BotItemProps {
  name: string
  percent: number
  number: number
  isSelect?: boolean
  isPlace?: boolean
}

const BotItem: FC<BotItemProps> = ({
  name,
  percent,
  number,
  isSelect = false,
  isPlace = false,
}) => {
  const isPositive = percent > 0
  return (
    <div
      className={`relative cursor-pointer select-none rounded-sm ${isSelect ? 'bg-[#1a3450]' : 'bg-custom-bg-light'}`}>
      <div className="bg-gradient-radial flex size-full flex-col items-center justify-end gap-1 rounded-lg from-custom-bg-light from-60% to-transparent p-2 pb-4 sm:p-4 sm:pb-8">
        <img
          src={`/images/bot-${number}.png`}
          alt="bot"
          className="max-sm:w-10"
        />
        <div
          className={`w-20 text-wrap text-center text-sm font-medium ${isPlace ? 'text-custom-gray' : ''}`}>
          {name}
        </div>
        {!isPlace && (
          <div
            className={`text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? '+' : ''}
            {percent}%
          </div>
        )}
      </div>
    </div>
  )
}

export default BotItem
