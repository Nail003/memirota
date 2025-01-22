import React, { useState } from "react";
import { GameBoard } from "../";
import { MessageCard } from "../Cards";

const Main = (props) => {
    const [showMessage, setShowMessage] = useState(true);

    return (
        <main>
            <GameBoard {...props} />
            {showMessage && (
                <MessageCard showCard={setShowMessage}>
                    <p>In this game your Goal is simple.</p>
                    <p>
                        - Just click all the cards without clicking any card
                        twice per round.
                    </p>
                    <p>- On every click the cards will be randomized.</p>
                    <p>- Only a true weeb is able to see through the end.</p>
                    <p>Good Luck!!</p>
                </MessageCard>
            )}
        </main>
    );
};

export default Main;
