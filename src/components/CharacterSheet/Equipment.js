import { Card } from "@material-ui/core";

function Equipment(props) {
    const cardStyle={border: '2px solid' }
    return (
        <div>
            <Card style={cardStyle} align='center'> 
                <h4>Equipment</h4> 
                <h5>{ props.equipment }</h5>
            </Card>
        </div>
    );
}

export default Equipment;