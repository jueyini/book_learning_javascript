function addPrefix(prefix, ...words) {
    // 나중에 더 좋은 방법을 배웁니다.
    const prefixedWords = [];
    for(let i=0; i<words.length; i++) {
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}

addPrefix("con", "verse", "vex"); // [converse","convex"]
