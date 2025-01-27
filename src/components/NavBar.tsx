import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp';

interface Props {
  onSearch: (searchddText: string) => void;
}

const NavBar = () => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='60px' />
      <Text>Navbar</Text>
    </HStack>
  )
}

export default NavBar