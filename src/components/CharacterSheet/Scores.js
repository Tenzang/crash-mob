import * as React from 'react';
import { Card } from "@material-ui/core";
import _ from "lodash";
import './CharacterSheet.css'

function Scores(props) {
    const {abilities} = props; // destucturing scores from props
    console.log(abilities)




    const headerStyle ={display: "inline", marginTop: "2%"}
    const cardStyle={ marginBottom: '10%', paddingBottom: '6%',  border: '2px solid' , borderRadius:'3em'}

    return (
        <div>
            { Object.keys(abilities).map(abilityName => { return (
                <Card align='center' style={cardStyle} borderColor="grey.500">
                    <h3 className="h3Char">{ _.capitalize(abilityName) }</h3>
                    <h2 className='h2Char' style={headerStyle}>{ abilities[abilityName].score }</h2>
                    <h4 className="h4Char" style={headerStyle}>{ abilities[abilityName].modifier >= 0 ? ' + ' : ' '}</h4>
                    <h4 className="h4Char" style={headerStyle}>{ abilities[abilityName].modifier }</h4>
                </Card>
                )
            })}

        </div>
    );
}



export default Scores;