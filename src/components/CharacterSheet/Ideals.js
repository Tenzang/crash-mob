import { Card } from "@material-ui/core";

function Ideals(props) {
    const cardStyle = { border: '2px solid', paddingBottom: "50%"  }
    const idealstyle = {fontStyle:"italic"}
    return (
        <div>
            <Card style={cardStyle} align='center'>
                <h3>Ideals</h3>
                <p style={idealstyle}>{props.ideals}</p>
            </Card>
        </div>
    );
}

export default Ideals;