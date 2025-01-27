import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import { ColorModeButton } from './ui/color-mode';
import ColorModeSwitch from './ColorModeSwitch';

interface Props {
  onSearch: (searchddText: string) => void;
}

const NavBar = () => {
  return (
    <HStack padding='15px' justifyContent="space-between">
      <Image src={logo} boxSize='60px' />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar