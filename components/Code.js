import { Box } from '@chakra-ui/react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { useEffect } from 'react';

const Code = ({ code }) => {
	useEffect(() => {
		// Prism.hooks.add('before-sanity-check', function (env) {
		// 	env.element.innerHTML = env.element.innerHTML.replace(/<br>/g, '\n');
		// 	env.code = env.element.textContent;
		// });
		Prism.highlightAll();
	}, []);
	return (
		<Box bg='#2d2d2d' p={2} className='Code' maxW={['100%', null, 'xl']}>
			<pre>
				<code className={`language-javascript`}>{code}</code>
			</pre>
		</Box>
	);
};

export default Code;
