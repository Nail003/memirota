import { urlify } from "../utils";
import { useFetch } from "./";

const kitsuUrl = "https://kitsu.io/api/edge/anime?filter[text]=";

const useKitsuAnimeFetch = (animeName) => {
    const { response, isLoading, error } = useFetch(
        `${kitsuUrl}${urlify(animeName)}`
    );
    let image = "";

    if (!isLoading && error !== "") {
        const data = response.data[0].attributes;
        image = data.posterImage.small;
        console.log(data.averageRating);
        console.log(data.titles.en);
    }

    return { image, isLoading, error };
};

export default useKitsuAnimeFetch;
