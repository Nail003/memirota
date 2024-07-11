import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [response, setResponse] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch(url, { mode: "cors", signal })
            .then((response) => {
                if (!response >= 400) throw Error("Server error");
                return response.json();
            })
            .then((response) => {
                setResponse(response);
                setIsLoading(false);
            })
            .catch((e) => setError(e));

        return () =>
            controller.abort("Request aborted because of component dismount");
    }, [url]);

    return { response, isLoading, error };
};

export default useFetch;
