import { Card } from "@material-ui/core";

function Flaws(props) {
    const cardStyle = { border: '2px solid', marginTop: "2%", paddingBottom: "50%"  }
    const flawstyle = {fontStyle:"italic"}
    return (
        <div>
            <Card style={cardStyle} align='center'>
                <h3>Flaws</h3>
                <p style={flawstyle}>{props.flaws}</p>
            </Card>
        </div>
    );
}

export default Flaws;