import * as React from 'react';
import { Card } from "@material-ui/core";

function Speed(props) {
    const cardStyle={ border: '2px solid' , borderRadius:'3em', width: "80%", margin:"2%"}
    return (
        <div>
            <Card style={cardStyle} align='center'>
                <h3>Speed</h3>
                <h3>{props.speed}</h3>
            </Card>
        </div>
    );
}

export default Speed;