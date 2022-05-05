import { Card } from "@material-ui/core";

function Level(props) {
    const cardStyle={border: '2px solid' }
    return (
        <div>
            <Card style={cardStyle} align='center'> 
                <h4>Level</h4> 
                <h2>{ props.level }</h2>
            </Card>
        </div>
    );
}

export default Level;