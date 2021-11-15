import FlashCard from '../../../models/FlashCard';
import connectDB from '../../../middlewares/mongodb';

const handler = async (req, res) => {
	if (req.method === 'GET') {
		const cards = await FlashCard.find({}).select('-_id');

		if (!cards)
			res.status(500).json({
				message:
					'Unable to load flashcards at this time, please try again later.',
			});
		res.status(200).json({ cards });
	}

	if (req.method === 'POST') {
		const { term, definition, code } = req.body;
		const newCard = new FlashCard({
			term,
			definition,
			code,
			isPublished: false,
		});
		try {
			const result = await newCard.save();
			res
				.status(200)
				.json({ message: 'Flashcard saved successfully', card: newCard });
		} catch (err) {
			res.status(500).json({
				message: 'Unable to save card at this time, please try again later.',
			});
		}
	}
};

export default connectDB(handler);
