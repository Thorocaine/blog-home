import React, { FC } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import SkipLink from '../atoms/SkipLink';

const GlobalStyle = createGlobalStyle`
  body {
		margin: 0;
		padding: 0;
		background: white;
    color: black;
  }
`;

const Layout: FC = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			<SkipLink href="#main">Skip to main content</SkipLink>
			<header>
				<Link to="/">Jonathan Peel</Link>
				<Nav />
			</header>
			<main id="main">{children}</main>
			<footer>&copy; 2020, Jonathan Peel</footer>
		</>
	);
};

export default Layout;
