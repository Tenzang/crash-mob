function Scores(props) {
    const {abilities} = props; // destucturing scores from props

    return (

        <div>
            { Object.keys(abilities).map(abilityName => { return (
                <div>
                    { abilityName }
                    { abilities[abilityName].score }

                    { abilities[abilityName].modifier >= 0 ? '+' : ''}
                    { abilities[abilityName].modifier }
                </div>)
            })}
        </div>

    );
}

export default Scores;