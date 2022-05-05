import * as React from 'react';
import { Card } from "@material-ui/core";
import _ from "lodash";

function Scores(props) {
    const {abilities} = props; // destucturing scores from props
    console.log(abilities)




    const headerStyle ={display: "inline", marginTop: "2%"}
    const cardStyle={ marginBottom: '10%', paddingBottom: '6%',  border: '2px solid' }

    return (
        <div>
            { Object.keys(abilities).map(abilityName => { return (
                <Card align='center' style={cardStyle} borderColor="grey.500">
                    <h5>{ _.capitalize(abilityName) }</h5>
                    <h2 style={headerStyle}>{ abilities[abilityName].score }</h2>
                    <h4 style={headerStyle}>{ abilities[abilityName].modifier >= 0 ? ' + ' : ' '}</h4>
                    <h4 style={headerStyle}>{ abilities[abilityName].modifier }</h4>
                </Card>
                )
            })}

        </div>
    );
}



export default Scores;