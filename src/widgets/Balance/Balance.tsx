import { FC } from 'react'

interface BalanceProps {}

const Balance: FC<BalanceProps> = ({}) => {
  return (
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-custom-gray">
        TRADING CAPITAL
      </span>
      <div className="flex justify-between gap-1">
        <span className="sm:text-4xl text-3xl tracking-tight">1.00865 BTC</span>

        <div>
          <div className="flex items-center gap-2 font-semibold sm:leading-snug leading-none">
            <span className="text-sm text-custom-gray">BALANCE:</span>
            <span className="ml-auto text-white text-nowrap">10 850</span>
            <img src="/images/H.png" alt="H" className="size-[1.2rem]" />
          </div>

          <div className="flex items-center gap-2 font-semibold leading-snug">
            <span className="text-sm text-custom-gray">ON HOLD:</span>
            <span className="ml-auto text-white text-nowrap">24 000</span>
            <img src="/images/H.png" alt="H" className="size-[1.2rem]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Balance
