import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<title>codeCards - It's coding but on cards!</title>
					<meta
						description
						content='A coding flashcard generator under development.'
					/>
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<body>
					<ColorModeScript />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
