import { Card } from "@material-ui/core";
import './CharacterSheet.css'

function Name(props) {
    const cardStyle={ border: '2px solid', padding: "5%", marginRight: '2%', marginLeft: '2%'}
    return (
        <div align='center'>
            <Card style={cardStyle}>
                <h1 className="h1Char">{ props.name }</h1>
            </Card>
        </div>
    );
}

export default Name;