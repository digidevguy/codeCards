import { IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const LightModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const iconColor = { light: 'black', dark: 'white' };

	return (
		<IconButton
			aria-label='Toggle dark mode'
			icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
			onClick={toggleColorMode}
			color={iconColor[colorMode]}
			borderRadius='full'
			variant='ghost'
		/>
	);
};

export default LightModeSwitch;
