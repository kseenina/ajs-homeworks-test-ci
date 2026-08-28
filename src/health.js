function getHealthStatus(character) {
    const healthPoints = character.health;
    if (healthPoints > 50) {
        return 'healthy'
    }

    if (healthPoints >= 15) {
        return 'wounded'
    }

    return 'critical'
}

export default getHealthStatus;