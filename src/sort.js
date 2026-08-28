function sortingHeroes(heroes) {
    const copy = [...heroes];
    copy.sort((a, b) => b.health - a.health);
    return copy;
}

export default sortingHeroes;