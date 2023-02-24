import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link rel='icon' href='/img/icon.png' />
					<title>
						Samer Tarcha | React Developer | Front-End Developer
					</title>
					<meta
						name='description'
						content='As a Front End developer, I specialize in building web applications with ReactJS, NextJS, TypeScript, SCSS, TailwindCSS, and GIT. With industry experience, I create high-quality and responsive web solutions.'
					/>
					<meta name="keywords" content="Samer Tarcha, Front-End, Developer, React, Software, Website" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
