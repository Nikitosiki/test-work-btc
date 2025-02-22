import type { SVGProps } from 'react'

export function TablerShoppingCart(props: SVGProps<SVGSVGElement>) {
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
        <path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></path>
        <path d="M17 17H6V3H4"></path>
        <path d="m6 5l14 1l-1 7H6"></path>
      </g>
    </svg>
  )
}
