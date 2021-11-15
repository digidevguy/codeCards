import mongoose from 'mongoose';

const DeckSchema = mongoose.Schema({
	name: { type: String, required: true },
	cards: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Flashcard' }],
	isPublished: { type: Boolean },
});

export default mongoose.models.Deck || mongoose.model('Deck', DeckSchema);
