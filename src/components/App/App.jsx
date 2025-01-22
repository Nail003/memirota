import React, { useState } from "react";
import { Header, Main } from "../";

const initialStats = { score: 0, currentLevel: 1, maxLevels: 4 };

const App = () => {
    const [stats, setStats] = useState(initialStats);

    return (
        <>
            <Header {...{ stats }} />
            <Main {...{ setStats, stats }} />
        </>
    );
};

export default App;
