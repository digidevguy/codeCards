import mongoose from 'mongoose';

const FlashcardSchema = mongoose.Schema({
	term: { type: String, required: true },
	definition: { type: String, required: true },
	code: { type: String },
	isPublished: { type: Boolean },
});

export default mongoose.models.Flashcard ||
	mongoose.model('Flashcard', FlashcardSchema);
