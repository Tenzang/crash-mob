import * as React from 'react';
import { Card } from "@material-ui/core";
import './CharacterSheet.css'

function TempHp(props) {
    const cardStyle={ border: '2px solid' , borderRadius:'3em', width: "80%", margin:"2%"}
    return (
        <div>
            <Card style={cardStyle} align='center'>
                <h3 className="h3Char">Temp HP</h3>
                <h3 className="h3Char">{props.tempHP}</h3>
            </Card>
        </div>
    );
}

export default TempHp;