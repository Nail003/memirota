import React from "react";
import { GameBoard } from "../";

const Main = (props) => {
    return (
        <main>
            <GameBoard {...props} />
        </main>
    );
};

export default Main;
