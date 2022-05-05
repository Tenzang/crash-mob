import { Card } from "@material-ui/core";

function Languages(props) {
    const cardStyle = { border: '2px solid', marginTop: "2%" }
    return (
        <div>
            <Card style={cardStyle} align='center'>
                <h4>Languages</h4>
                <h5>{props.languages}</h5>
            </Card>
        </div>
    );
}

export default Languages;