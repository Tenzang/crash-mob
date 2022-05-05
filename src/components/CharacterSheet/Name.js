import { Card } from "@material-ui/core";

function Name(props) {
    const cardStyle={ border: '2px solid', padding: "6%", marginRight: '2%', marginLeft: '2%'}
    return (
        <div align='center'>
            <Card style={cardStyle}>
                <h1>{ props.name }</h1>
            </Card>
        </div>
    );
}

export default Name;