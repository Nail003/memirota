import React from "react";
import styles from "./ScoreBoard.module.css";

const ScoreBoard = ({ stats }) => {
    return (
        <div className={styles.scoreBoard}>
            <h2>
                Score: {stats.score}/{2 ** stats.currentLevel}
            </h2>
            <h2>Level: {stats.currentLevel}</h2>
        </div>
    );
};

export default ScoreBoard;
