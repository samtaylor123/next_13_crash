import { Inter } from "next/font/google";
import { Poppins } from 'next/font/google';

// won't be able to use in html if it's not capitalized
import Header from './components/Header'
import "./globals.css";

const poppins = Poppins({
	weight: ['400', '700'],
	subsets: ['latin'],
});

export const metadata = {
    title: "MH app directory",
    description: "This is a directory of apps",

    // seo stuff goes here
    keywords: "apps, directory, MicroHealth"
};

// wraps everything 
// the component that has the html and body tags
// it is passed pages or routes and displays them here
// any headers will need to be passed here as well
// other layouts can be defined inside other directories like the about layout
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Header />
				<main className="container">{children}</main>
			</body>
		</html>
	);
}
