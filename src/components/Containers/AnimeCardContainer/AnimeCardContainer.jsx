import React from "react";
import { AnimeCard } from "../../Cards";
import styles from "./AnimeCardContainer.module.css";

const AnimeCardContainer = ({ levelsData, ...props }) => {
    return (
        <div className={styles.container}>
            {levelsData.map((levelData, index) => (
                <AnimeCard key={index} levelData={levelData} {...props} />
            ))}
        </div>
    );
};

export default AnimeCardContainer;
