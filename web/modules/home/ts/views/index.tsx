import * as React from 'react';
import { Header } from 'web-converter/header';
import { MainContent } from 'web-converter/main';
import { Footer } from 'web-converter/footer';

export /*bundle*/
function View(): JSX.Element {
	return (
		<div className='page__container'>	
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
}
