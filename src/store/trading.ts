import { create } from 'zustand'

interface Bot {
  name: string
  cost: number
  '24h': number
  '7d': number
  '30d': number
  '60d': number
  '90d': number
  all_time: number
}

interface TradingData {
  trading_capital: number
  trading_capital_currency: string
  balance: number
  on_hold: number
  bots: Bot[]
}

export interface TradingStoreState {
  data: TradingData | null
  interval: '24h' | '7d' | '30d' | 'all_time'
  loadData: () => Promise<void>
  setInterval: (interval: TradingStoreState['interval']) => void
}

export const useTradingStore = create<TradingStoreState>((set) => ({
  data: JSON.parse(localStorage.getItem('trading_data') || 'null'),
  interval:
    (localStorage.getItem(
      'trading_interval',
    ) as TradingStoreState['interval']) || '24h',

  loadData: async () => {
    try {
      const cachedData = localStorage.getItem('trading_data')
      if (cachedData) {
        set({ data: JSON.parse(cachedData) })
        return
      }

      const response = await fetch('/data.min.json')
      if (!response.ok) throw new Error('Error loading data')

      const jsonData: TradingData = await response.json()
      localStorage.setItem('trading_data', JSON.stringify(jsonData))
      set({ data: jsonData })
    } catch (error) {
      console.error('Error:', error)
    }
  },

  setInterval: (interval) => {
    localStorage.setItem('trading_interval', interval)
    set({ interval })
  },
}))
