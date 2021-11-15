import { useState } from 'react';
import {
	Box,
	Button,
	ButtonGroup,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Text,
	Textarea,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';

const addCardPage = () => {
	const [term, setTerm] = useState('');
	const [definition, setDefinition] = useState('');
	const [code, setCode] = useState('');

	const handleTermChange = (e) => {
		setTerm(e.target.value);
	};

	const handleDefChange = (e) => {
		setDefinition(e.target.value);
	};

	const handleCodeChange = (e) => {
		setCode(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch('/api/cards', {
				method: 'POST',
				body: JSON.stringify({
					term,
					definition,
					code,
				}),
				headers: { 'Content-Type': 'application/json' },
			});
			const data = await response.json();

			if (response.ok) {
				console.log('Works!');
				console.log(data);
			}
		} catch (err) {}
	};

	return (
		<Center p={2}>
			<VStack
				w='90%'
				maxW='2xl'
				py={6}
				px={4}
				bg='gray.600'
				rounded='md'
				shadow='md'
				spacing={3}
			>
				<Heading>Add a card</Heading>
				<VStack as='form' spacing={3} w='full' onSubmit={handleSubmit}>
					<FormControl>
						<FormLabel>Enter Term</FormLabel>
						<Input value={term} onChange={handleTermChange} />
					</FormControl>
					<FormControl>
						<FormLabel>Enter Definition</FormLabel>
						<Textarea value={definition} onChange={handleDefChange} />
					</FormControl>
					<FormControl>
						<FormLabel>Code Snippet</FormLabel>
						<Textarea value={code} onChange={handleCodeChange} />
					</FormControl>
					<ButtonGroup>
						<Button colorScheme='teal' type='submit'>
							Create
						</Button>
						<Button colorScheme='red' variant='outline'>
							Cancel
						</Button>
					</ButtonGroup>
				</VStack>
			</VStack>
		</Center>
	);
};

export default addCardPage;
