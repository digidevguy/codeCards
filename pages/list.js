import { useState, useEffect } from 'react';
import { Box, Flex, SimpleGrid, useToast, VStack } from '@chakra-ui/react';

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
	}, []);

	return (
		<Box maxW='1200px' mx='auto'>
			<SimpleGrid
				mx='auto'
				minChildWidth='544px'
				spacing={3}
				p={4}
				justifyContent='center'
			>
				{deck.map((card, index) => (
					<CardInfo key={card.id} card={card} />
				))}
			</SimpleGrid>
		</Box>
	);
}
