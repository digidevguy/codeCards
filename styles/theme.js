import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	components: {
		Heading: {
			baseStyle: {
				color: 'white',
			},
		},
	},
	styles: {
		global: {
			body: {
				bg: 'gray.900',
				color: 'gray.300',
			},
		},
	},
});

export default theme;
