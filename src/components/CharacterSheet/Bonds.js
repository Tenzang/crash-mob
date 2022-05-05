import { Card } from "@material-ui/core";

function Bonds(props) {
    const cardStyle = { border: '2px solid', marginTop: "2%", paddingBottom: "50%"  }
    const bondStyle = {fontStyle:"italic"}
    return (
        <div>
            <Card style={cardStyle} align='center'>
                <h3>Bonds</h3>
                <p style={bondStyle}>{props.bonds}</p>
            </Card>
        </div>
    );
}

export default Bonds;