import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react'
import { FC } from 'react'

import { TablerMenu2, TablerRefresh } from '@/shared/icons'

interface TopAppBarProps {}

const TopAppBar: FC<TopAppBarProps> = ({}) => {
  return (
    <Navbar isBlurred={false} isBordered={false} className="bg-inherit">
      <NavbarBrand>
        <NavbarItem>
          <TablerMenu2 className="text-custom-gray" />
        </NavbarItem>
      </NavbarBrand>
      <NavbarContent className="gap-4" justify="center">
        <NavbarItem>
          <p className="text-custom-gray font-semibold">Dashboard</p>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <TablerRefresh className="text-custom-gray" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default TopAppBar
