import { Language } from "@material-ui/icons";

function Skills(props) {
    const { abilities, skills, proficiency } = props;
    return (
        <div>
            { Object.keys(skills).map( skillName => { return (
                <div key={skillName}>
                    { skillName }

                    { abilities[skills[skillName].ability].modifier + (skills[skillName].proficient * proficiency) >= 0 ? '+' : ''}
                    { abilities[skills[skillName].ability].modifier + (skills[skillName].proficient * proficiency) }
                </div>
            )})}
        </div>
    );
}

export default Skills;
