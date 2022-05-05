/** @format */

import styles from "./Footer.module.css";
import linkedin from "../../assets/icons/linkedin.png";
import instagram from "../../assets/icons/instagram.png";
import telegram from "../../assets/icons/telegram.png";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<div className={styles.container}>
			<div>
				<Link to='/about'>About</Link>
				<Link to='/contact-us'>Contact us</Link>
				<span>Socials: </span>
				<a className={styles.social} href='https://www.linkedin.com/in/oleg-kryvak-520118218/' target='_blank' rel='noopener noreferrer'>
					<img src={linkedin} alt='linkedin' />
				</a>
				<a className={styles.social} href='https://instagram.com/drago_blanco' target='_blank' rel='noopener noreferrer'>
					<img src={instagram} alt='instagram' />
				</a>
				<a className={styles.social} href='https://t.me/Aliezhka_12' target='_blank' rel='noopener noreferrer'>
					<img src={telegram} alt='telegram' />
				</a>
			</div>
			<h1>Copyright © 2022. All rights reserved.</h1>
		</div>
	);
};

export default Footer;
