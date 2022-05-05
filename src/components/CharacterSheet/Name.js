import { Card } from "@material-ui/core";

function Name(props) {
    const cardStyle={marginBottom: '5%', paddingBottom: '4%',  border: '2px solid' }
    return (
        <div align='center'>
            <Card style={cardStyle}>
                <h1>{ props.name }</h1>
            </Card>
        </div>
    );
}

export default Name;