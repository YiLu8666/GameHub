import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import { ColorModeButton } from './ui/color-mode';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchddText: string) => void;
}

const NavBar = () => {
  return (
    <HStack padding='15px'>
      <Image src={logo} boxSize='60px' />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar