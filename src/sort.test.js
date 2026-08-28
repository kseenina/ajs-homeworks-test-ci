import sortingHeroes from "./sort";

test ('сортирует героев по health от большего к меньшему', () => {
    const heroes = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80}
    ];

    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10}
    ];

    const result = sortingHeroes(heroes);
    expect(result).toEqual(expected);
});