import { useState } from 'react';
import { useRouter } from 'next/router';
import {
	Button,
	ButtonGroup,
	Center,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Textarea,
	useColorModeValue,
	useToast,
	VStack,
} from '@chakra-ui/react';

const addCardPage = () => {
	const [term, setTerm] = useState('');
	const [definition, setDefinition] = useState('');
	const [code, setCode] = useState('');
	const router = useRouter();
	const toast = useToast();

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
				setTerm('');
				setDefinition('');
				setCode('');
				toast({
					title: 'Card has been saved!',
					status: 'success',
					isClosable: true,
				});
				router.push('/');
			} else {
				toast({
					message: 'Something went wrong!',
					status: 'error',
					isClosable: true,
				});
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
				bg={useColorModeValue('white', 'gray.600')}
				rounded='md'
				shadow='md'
				spacing={3}
			>
				<Heading>Add a card</Heading>
				<VStack as='form' spacing={3} w='full' onSubmit={handleSubmit}>
					<FormControl>
						<FormLabel>Enter Term</FormLabel>
						<Input
							bg={useColorModeValue('gray.200', 'gray.500')}
							value={term}
							onChange={handleTermChange}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Enter Definition</FormLabel>
						<Textarea
							bg={useColorModeValue('gray.200', 'gray.500')}
							value={definition}
							onChange={handleDefChange}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Code Snippet</FormLabel>
						<Textarea
							bg={useColorModeValue('gray.200', 'gray.500')}
							value={code}
							onChange={handleCodeChange}
						/>
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
