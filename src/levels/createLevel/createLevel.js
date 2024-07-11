export function createLevel(animeList) {
    const level = [];
    for (const anime of animeList) {
        level.push(addAnime(anime));
    }
    return level;
}

function addAnime(animeName) {
    return {
        animeName,
        isSelected: false,
        image: "",
        rating: "nan",
        isLoading: true,
    };
}
