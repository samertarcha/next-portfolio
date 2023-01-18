import { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import MainLayoutContainer from '../src/components/UI/MainLayoutContainer/MainLayoutContainer';
import NavigationToggle from '../src/components/UI/NavigationToggle/NavigationToggle';
import Nav from '../src/components/Nav/Nav';
import Header from '../src/layout/Header/Header';
import About from '../src/layout/About/About';
import Skills from '../src/layout/Skills/Skills';
import Projects from '../src/layout/Projects/Projects';
import Contact from '../src/layout/Contact/Contact';
import Footer from '../src/layout/Footer/Footer';

const Home = () => {
	const [navStatus, setNavStatus] = useState(false);

	const navStatusHandler = () => {
		setNavStatus(current => !current);
	};

	let navStyleStatus = '';

	if (navStatus) {
		navStyleStatus = 'active';
	}

	return (
		<ParallaxProvider>
			<MainLayoutContainer>
				<NavigationToggle
					status={navStyleStatus}
					onClick={navStatusHandler}
				/>
				<Nav status={navStyleStatus} onClick={navStatusHandler} />
				<Header />
				<About />
				<Skills />
				<Projects />
				<Contact />
				<Footer />
			</MainLayoutContainer>
		</ParallaxProvider>
	);
};

export default Home;
