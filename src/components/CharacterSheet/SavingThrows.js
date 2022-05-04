function SavingThrows(props) {
    const { abilities, saveProfs, proficiency } = props;
    return(
        <div>
            { Object.keys(abilities).map( abilityName => { return (
                <div key={abilityName}>
                    { abilityName }
                    { abilities[abilityName].modifier + ( saveProfs[abilityName] * proficiency ) >= 0 ? '+' : ''}
                    { abilities[abilityName].modifier + ( saveProfs[abilityName] * proficiency )}
                    proficient: { saveProfs[abilityName] ? "yes" : "no" }
                </div>
            )}) }
        </div>
    );
}

export default SavingThrows;