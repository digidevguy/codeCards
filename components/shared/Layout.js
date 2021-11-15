import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import LightModeSwitch from './LightModeSwitch';

const Layout = ({ children }) => {
	return (
		<>
			<Flex
				p={2}
				// position='sticky'
				// top={0}
				// zIndex={1}
				// bg='transparent'
				justifyContent='space-between'
			>
				<Heading size='lg'>Study Up</Heading>
				<LightModeSwitch />
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
