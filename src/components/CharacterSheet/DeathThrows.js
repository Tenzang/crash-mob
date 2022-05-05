import * as React from 'react';
import { Card } from "@material-ui/core";

function DeathThrows(props) {
    const cardStyle={ border: '2px solid' , borderRadius:'3em', width: "80%", margin:"2%"}
    return (
        <div>
            <Card style={cardStyle} align='center'>
                <h4>Death Throws</h4>
                <h3>{props.dSaveSucc}/{props.dSaveFail}</h3>
            </Card>
        </div>
    );
}

export default DeathThrows;