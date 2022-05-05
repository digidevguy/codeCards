import Link from 'next/link';
import {
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	Link as ChakraLink,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import LightModeSwitch from './LightModeSwitch';
import Footer from '../Footer';

const Layout = ({ children }) => (
	<>
		<Box>
			<Flex
				p={2}
				mx='auto'
				maxW='1000px'
				// position='sticky'
				// top={0}
				// zIndex={1}
				justifyContent='space-between'
				color='white'
			>
				<Link href='/' passHref>
					<Button variant='ghost' size='lg' fontSize='2xl'>
						codeCards
					</Button>
				</Link>
				<HStack>
					<Link href='/cards/add' passHref>
						<Button as='a' variant='ghost'>
							Add a Card
						</Button>
					</Link>
					<Link href='/list' passHref>
						<Button as='a' variant='ghost'>
							Card List
						</Button>
					</Link>
					{/*  TODO prod:Add code <LightModeSwitch /> */}
				</HStack>
			</Flex>
		</Box>
		<Box justify='center' minH='100vh' rounded='inherit' mx='auto'>
			{children}
		</Box>
		<Footer />
	</>
);

export default Layout;
