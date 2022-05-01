function Health (props) {
    const { abilities, hitpoints, level, hitDice } = props;
    const { modifier } = abilities.constitution;
    const maxHealth = hitDice + modifier + ((hitDice / 2 + 1) + modifier * (level - 1));
    return (
        <div>
            Hitpoints: { hitpoints } / { maxHealth }
        </div>
    );
}

export default Health;
