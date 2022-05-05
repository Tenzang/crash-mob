import { Card, Divider } from "@material-ui/core";
import _ from "lodash";

function Skills(props) {
    const { abilities, skills, proficiency } = props;
    const headerStyle ={display: "inline"}
    const cardStyle={paddingBottom: '4%',  border: '2px solid' }
    const divStyle={padding:'2%'}
    return (
        <div>
            <Card align='center' style={cardStyle} borderColor="grey.500">
                <h2>Skills</h2>
                { Object.keys(skills).map( skillName => { return (
                    <div style={divStyle} key={skillName}>
                        <h3 style={headerStyle}>{ _.capitalize(skillName) + " "}</h3>
                        <h4 style={headerStyle}>{ abilities[skills[skillName].ability].modifier + (skills[skillName].proficient * proficiency) >= 0 ? '+' : ''}</h4>
                        <h4 style={headerStyle}>{ abilities[skills[skillName].ability].modifier + (skills[skillName].proficient * proficiency) }</h4>
                        <Divider/>
                    </div>
                )})}
            </Card>
        </div>
    );
}

export default Skills;
