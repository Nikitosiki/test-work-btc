import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react'
import { FC } from 'react'

import { TablerMenu2, TablerRefresh } from '@/shared/icons'

interface TopAppBarProps {}

const TopAppBar: FC<TopAppBarProps> = ({}) => {
  return (
    <Navbar
      isBlurred={false}
      isBordered={false}
      className="relative bg-inherit">
      <NavbarBrand>
        <NavbarItem>
          <TablerMenu2 className="text-custom-gray" />
        </NavbarItem>
      </NavbarBrand>
      <NavbarContent className="gap-4" justify="center">
        <NavbarItem>
          <p className="font-semibold text-custom-gray">Dashboard</p>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <TablerRefresh className="text-custom-gray" />
        </NavbarItem>
      </NavbarContent>
      <div className="bg-gradient-radial absolute left-[calc(50%-10rem)] z-[-1] -top-40 size-80 rounded-full from-[#02315098] to-40% to-transparent" />
    </Navbar>
  )
}

export default TopAppBar
