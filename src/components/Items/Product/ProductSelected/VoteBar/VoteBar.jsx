/** @format */

import { useState } from "react";
import styles from "./VoteBar.module.css";

const VoteBar = () => {
	const [selectedStar, setSelectedStar] = useState(0);
	const [showComment, setShowComment] = useState(false);
	const stars = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
	const selectHandler = (id) => {
		if (id === selectedStar) {
			return;
		}
		setShowComment(false);
		setSelectedStar(id);
	};
	return (
		<>
			<div className={styles.container}>
				<div className={styles.voteBar}>
					{stars.map((star) => {
						return <i key={star.id} onClick={() => selectHandler(star.id)} className={star.id <= selectedStar ? styles.active : ""}></i>;
					})}
				</div>
				<button onClick={() => setShowComment(true)}>Vote</button>
			</div>
			{showComment && <h1 className={styles.headline}>You voted. This product took {selectedStar}/5 parts of your heart!</h1>}
		</>
	);
};

export default VoteBar;
