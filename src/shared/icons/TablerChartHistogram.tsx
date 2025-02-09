import type { SVGProps } from 'react'

export function TablerChartHistogram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}>
        <path d="M3 3v18h18m-1-3v3m-4-5v5m-4-8v8m-4-5v5"></path>
        <path d="M3 11c6 0 5-5 9-5s3 5 9 5"></path>
      </g>
    </svg>
  )
}
