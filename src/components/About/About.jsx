/** @format */

import styles from "./About.module.css";
import profileImage from "../../assets/images/profileimage.jpg";
import { useEffect } from "react";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className={styles.container}>
			<img src={profileImage} alt='profile avatar' />
			<div>
				<div>
					<b>Name: </b>
					<b>Surname: </b>
					<b>Occupation: </b>
					<b>Date of birth: </b>
					<b>Secondary education: </b>
					<b>University: </b>
					<b>Years of study: </b>
					<b>City of residence: </b>
					<b>Hobbies: </b>
					<b>Commercial experience: </b>
					<b>Main tools I use: </b>
				</div>
				<div>
					<span>Oleg</span>
					<span>Kryvak</span>
					<span>Front-end developer</span>
					<span>12.04.2002</span>
					<span>Gymnasium of Kozova</span>
					<span>National university "Lviv Polytechnic"</span>
					<span>2019-2023</span>
					<span>Lviv</span>
					<span>Guitar, football and others kind of sport, work out, traveling</span>
					<span>~6 months</span>
					<span>HTML, CSS, JS, React, Redux, Axios</span>
				</div>
			</div>
		</div>
	);
};

export default About;
