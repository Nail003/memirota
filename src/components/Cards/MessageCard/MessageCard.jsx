import React from "react";
import styles from "./MessageCard.module.css";

const MessageCard = ({ children, title = "Alert", showCard }) => {
    const handleClick = () => {
        showCard(false);
    };

    return (
        <div
            onClick={handleClick}
            className={`${styles["message-card-container"]}`}
        >
            <div
                className={`${styles["message-card"]}`}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <h2 className={`${styles["message-card__title"]}`}>{title}</h2>
                <div className={`${styles["message-card__message"]}`}>
                    {children}
                </div>
                <button
                    className={`${styles["message-card__button"]}`}
                    onClick={handleClick}
                >
                    Ok
                </button>
            </div>
        </div>
    );
};

export default MessageCard;
