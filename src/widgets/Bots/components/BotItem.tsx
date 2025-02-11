import { FC } from 'react'

interface BotItemProps {
  name: string
  percentage: string
  number: number
  isPositive?: boolean
  isSelect?: boolean
  isPlace?: boolean
}

const BotItem: FC<BotItemProps> = ({
  name,
  percentage,
  number,
  isPositive = true,
  isSelect = false,
  isPlace = false,
}) => {
  return (
    <div
      className={`relative cursor-pointer select-none rounded-sm ${isSelect ? 'bg-[#1a3450]' : 'bg-custom-bg-light'}`}>
      <div className="bg-gradient-radial flex size-full flex-col items-center justify-end gap-1 rounded-lg from-custom-bg-light from-60% to-transparent p-4 pb-8">
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
            {percentage}
          </div>
        )}
      </div>
    </div>
  )
}

export default BotItem
