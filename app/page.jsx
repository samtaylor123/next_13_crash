// home page
// when we go to localhost this is what displays



// "npm run dev" to start server



// // "rafce": React Arrow Function Component Export
// // creates the following starter code: \/ \/
// """
// import React from 'react'

// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page
// """



// for new pages of the website create a new directory
// the about page has its own directory inside of the app directory






'use client';
import {useState, useEffect} from 'react';
import React from 'react'
import Link from "next/link";	// case sensitive 
import LoadingPage from './loading';
import Courses from "./components/Courses"
import CourseSearch from './components/CourseSearch';

const HomePage = () => {

	// when their respective function runs the variable is set to the result
	const [homeCourses, setCourses] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCourses = async () => {
			const res = await fetch("api/courses");
			const data = await res.json();
			setCourses(data);
			setLoading(false);
		}

		fetchCourses();
	}, []);

	if (loading) {
		return <LoadingPage />;
	}



	return (
		<>
			<h1>Welcome To the App Directory!</h1>
			<CourseSearch getSearchResults={(results) => setCourses(results) } />
			<Courses courses={homeCourses} />
		</>
	);
};

export default HomePage