import {
	ButtonGroup,
	Divider,
	Flex,
	IconButton,
	Link,
	Text,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const socialInfo = [
	{
		label: 'Github',
		icon: <FaGithub />,
		href: 'https://github.com/Permafun',
	},
	{
		label: 'LinkedIn',
		icon: <FaLinkedinIn />,
		href: 'https://www.linkedin.com/in/matthew-littrell-886066111/',
	},
	{
		label: 'Twitter',
		icon: <FaTwitter />,
		href: 'https://twitter.com/PermaFun',
	},
];

const Footer = () => (
	<Flex flexDirection='column' align='center' p={4} gap='1.2rem'>
		<Divider maxW={['full', '65%']} />
		<Text>
			This site is under development by Matthew, and can be contact through his{' '}
			<Link href='https://www.mattlittrell.dev' color='teal'>
				personal website
			</Link>{' '}
			or at the following locations:
		</Text>
		<ButtonGroup>
			{socialInfo.map((link, i) => (
				<Link key={i} href={link.href} target='_blank'>
					<IconButton
						aria-label={link.label}
						icon={link.icon}
						bg='inherit'
						_hover={{ backgroundColor: 'gray.700' }}
					/>
				</Link>
			))}
		</ButtonGroup>
	</Flex>
);

export default Footer;
