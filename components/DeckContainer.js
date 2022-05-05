import { useEffect, useState } from 'react';
import { Button, ButtonGroup, Flex } from '@chakra-ui/react';
import FlashCard from './FlashCard';

const DeckContainer = ({ deck }) => {
	const [currentCard, setCurrentCard] = useState(0);
	const [definitionOpen, setDefinitionOpen] = useState(false);
	const deckCount = deck.length;

	// useEffect(() => {
	// 	if (deck) {
	// 		deckCount = deck.length - 1;
	// 	}
	// }, [deck]);

	const toggleDefinition = () => setDefinitionOpen(!definitionOpen);

	const prevCard = () => {
		if (definitionOpen) {
			setDefinitionOpen(false);
			setTimeout(
				() => setCurrentCard((c) => (c === 0 ? deckCount - 1 : c - 1)),
				750
			);
		} else setCurrentCard((c) => (c === 0 ? deckCount - 1 : c - 1));
	};

	const nextCard = () => {
		if (definitionOpen) {
			setDefinitionOpen(false);
			setTimeout(
				() => setCurrentCard((c) => (c === deckCount - 1 ? 0 : c + 1)),
				750
			);
		} else setCurrentCard((c) => (c === deckCount - 1 ? 0 : c + 1));
	};

	const setCard = (slide) => {
		setCurrentCard(slide);
	};

	const cardStyles = {
		transition: 'all .5s',
		ml: `-${currentCard * 100}%`,
	};

	return (
		<>
			<Flex
				maxW='full'
				alignItems='center'
				justifyContent='center'
				p={30}
				flexDirection='column'
			>
				{/* TODO Adjust for shadow */}
				<Flex w='full' maxW='xl' overflow='hidden' rounded='md'>
					<Flex w='full' {...cardStyles}>
						{deck &&
							deck.map((card, cid) => (
								<FlashCard
									key={`card-${cid}`}
									term={card.term}
									definition={card.definition}
									code={card.code}
									tags={card.tags}
									definitionOpen={definitionOpen}
									toggleDefinition={toggleDefinition}
								/>
							))}
					</Flex>
				</Flex>
				{/* <Flex w='full' maxW='xl' p='relative' overflow='hidden'>
					<Flex w='full'>{!isLoading && <DeckContainer deck={deck} />}</Flex>
				</Flex> */}
				<ButtonGroup my={3} spacing={5} color='black'>
					<Button bg='teal.300' onClick={prevCard}>
						Previous card
					</Button>
					<Button bg='teal.300' onClick={nextCard}>
						Next card
					</Button>
				</ButtonGroup>
			</Flex>
		</>
	);
};

export default DeckContainer;
