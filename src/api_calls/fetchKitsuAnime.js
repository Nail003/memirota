import { urlify } from "../utils";

const alreadyFetched = {};

export function fetchKitsuAnime(animeName, signal) {
    const kitsuUrl = "https://kitsu.io/api/edge/anime?filter[text]=";
    const url = `${kitsuUrl}${urlify(animeName)}`;

    if (animeName in alreadyFetched) {
        return alreadyFetched[animeName];
    }

    return fetch(url, { mode: "cors", signal }).then((response) => {
        if (!response.ok) throw Error("Server Error");
        response = response.json();
        alreadyFetched[animeName] = response;
        return response;
    });
}
