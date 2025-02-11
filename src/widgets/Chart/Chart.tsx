import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js'
import { FC } from 'react'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
)

interface ChartProps {}

const Chart: FC<ChartProps> = ({}) => {
  const data = {
    labels: ['22.04', '23.04', '24.04', '25.04', '26.04'],
    datasets: [
      {
        fill: true,
        data: [2, 5, 7, 4, 8, 6, 9, 5, 7, 6, 10, 8, 5, 7, 6, 8, 9, 5, 6, 4, 7],
        borderColor: '#007cdd',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: '#64748b',
        },
      },
      y: {
        display: false,
      },
    },
  }

  return (
    <div className="relative w-full">
      <Line data={data} options={options} className={'size-full'} />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="text-2xl font-medium text-green-400">+32.6%</span>
      </div>
    </div>
  )
}

export default Chart
