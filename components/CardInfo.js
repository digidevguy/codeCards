import {
	Button,
	ButtonGroup,
	Divider,
	SimpleGrid,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import Code from './Code';

const CardInfo = ({ card }) => {
	const { term, definition, code, tags, id } = card;
	const definitionColor = useColorModeValue('gray.100', 'gray.600');
	return (
		<VStack
			py={3}
			px={4}
			bg='gray.700'
			// maxW='xl'
			minW={[null, 'lg']}
			rounded={5}
			// overflow='auto'
		>
			{/* <Stack direction='row' alignItems='center' alignSelf='flex-start'>
				{tags &&
					tags.map((tag, index) => (
						<Text
							key={index}
							// bg={useColorModeValue('blue.200', 'blue.400')}
							// color={useColorModeValue('blue.800', 'blue.900')}
							// px={2}
							// py={1}
							// rounded='full'
							textTransform='uppercase'
							fontSize='xs'
						>
							{tag}
						</Text>
					))}
			</Stack> */}
			<SimpleGrid columns={2} spacing={3}>
				<Text textAlign='center' fontWeight='bold'>
					Term:
				</Text>
				<Text>{term}</Text>
				<Text textAlign='center' fontWeight='bold'>
					Definition:
				</Text>
				<Text>{definition}</Text>
			</SimpleGrid>
			{/* <Code code={code} /> */}
			<Divider maxW={[]} />
			<ButtonGroup>
				<Button colorScheme='teal'>Update</Button>
				<Button colorScheme='red' variant='outline'>
					Delete
				</Button>
			</ButtonGroup>
		</VStack>
	);
};

export default CardInfo;
