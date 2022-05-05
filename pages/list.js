import { useState, useEffect } from 'react';
import { Box, Flex, Spinner, useToast } from '@chakra-ui/react';

import CardInfo from '../components/CardInfo';

export default function CardList() {
	const [deck, setDeck] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const toast = useToast();

	useEffect(() => {
		const fetchCards = async () => {
			try {
				const res = await fetch('api/cards');
				const { cards } = await res.json();

				if (res.ok) {
					toast({ title: 'Deck Loaded!', status: 'success', isClosable: true });
					console.log(cards);
					setDeck(cards);
					setIsLoading(false);
				} else {
					toast({
						title: 'Something went wrong',
						status: 'error',
						isClosable: true,
					});
				}
			} catch (err) {}
		};
		fetchCards();
		// !deck ? fetchCards() : null;
	}, []);

	return (
		<Box maxW='1200px' mx='auto'>
			<Flex
				flexDir={['column', 'row']}
				mx='auto'
				// minChildWidth='544px'
				maxW='xl'
				spacing={3}
				p={4}
				justifyContent='center'
				gap='1.2rem'
				flexWrap='wrap'
			>
				{isLoading && (
					<Spinner
						size='xl'
						color='teal.500'
						thickness='0.25rem'
						speed='0.65s'
						emptyColor='gray.700'
					/>
				)}
				{!isLoading &&
					deck.map((card, index) => <CardInfo key={card.id} card={card} />)}
			</Flex>
		</Box>
	);
}
