import { Card, Divider } from "@material-ui/core";

import _ from "lodash";

function SavingThrows(props) {
    const { abilities, saveProfs, proficiency } = props;
    const headerStyle ={display: "inline"}
    const cardStyle={ marginBottom: '2%', paddingBottom: '4%',  border: '2px solid' }
    const paraStyle={fontSize:'10px'}
    const divStyle={padding:'2%'}

    return(
        <div>
            <Card align='center' style={cardStyle} borderColor="grey.500">
                <h3>Saving Throws</h3>
                <Divider/>
                { Object.keys(abilities).map( abilityName => { return (
                    <div style={divStyle} key={abilityName}>
                        <h3 style={headerStyle}>{ _.capitalize(abilityName)+" " }</h3>
                        <h5 style={headerStyle}>{ abilities[abilityName].modifier + ( saveProfs[abilityName] * proficiency ) >= 0 ? '+' : ''}</h5>
                        { abilities[abilityName].modifier + ( saveProfs[abilityName] * proficiency )}
                        <p style={paraStyle}>proficient: { saveProfs[abilityName] ? "yes" : "no" }</p>
                        <Divider/>
                    </div>
                )}) }
            </Card>
        </div>
    );
}

export default SavingThrows;