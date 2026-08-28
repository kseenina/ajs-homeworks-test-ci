import getHealthStatus from "./health";

test.each([
    [100, 'healthy'],
    [51, 'healthy'],
    [50, 'wounded'],
    [25, 'wounded'],
    [15, 'wounded'],
    [14, 'critical'],
    [0, 'critical']
])('При здоровье %d возвращает %s', (health, expected) => {
    const character = { name: 'character', health };
    const result = getHealthStatus(character);
    expect(result).toBe(expected);
});