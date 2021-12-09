import Link from 'next/link';
import {
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import LightModeSwitch from './LightModeSwitch';

const Layout = ({ children }) => {
	return (
		<>
			<Flex
				p={2}
				mx='auto'
				maxW='1000px'
				// position='sticky'
				// top={0}
				// zIndex={1}
				// bg='transparent'
				justifyContent='space-between'
			>
				<Heading size='lg'>Study Up</Heading>
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
					<LightModeSwitch />
				</HStack>
			</Flex>
			<Box
				bg={useColorModeValue('blue.600', 'gray.800')}
				justify='center'
				minH='100vh'
				rounded='inherit'
				mx='auto'
			>
				{children}
			</Box>
		</>
	);
};

export default Layout;
