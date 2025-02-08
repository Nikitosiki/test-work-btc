import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@heroui/react'
import { FC } from 'react'

import { TablerMenu2, TablerRefresh } from '@/shared/icons'

interface TopAppBarProps {}

const TopAppBar: FC<TopAppBarProps> = ({}) => {
  return (
    <Navbar>
      <NavbarBrand>
        <NavbarItem>
          <TablerMenu2 />
        </NavbarItem>
      </NavbarBrand>
      <NavbarContent className="gap-4" justify="center">
        <NavbarItem>
          <p className='font-bold'>Dashboard</p>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <TablerRefresh />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default TopAppBar
