export function urlify(string) {
    return string
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\s/g, "%20");
}
