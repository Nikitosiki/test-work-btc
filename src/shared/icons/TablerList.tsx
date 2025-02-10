import type { SVGProps } from 'react'

export function TablerList(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01"></path>
    </svg>
  )
}
