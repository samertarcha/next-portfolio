import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel='icon' href='/img/icon.png' />
					<title>
						Samer Tarcha | React Developer | Front-End Developer |
						Software Engineer
					</title>
					<meta
						name='description'
						content='Front End developer with industry experience building web applications. Specializing in ReactJS, NextJS, TypeScript, Redux Toolkit, ContextAPI, SCSS, TailwindCSS, and GIT.'
					/>
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
