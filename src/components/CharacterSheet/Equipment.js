import { Card } from "@material-ui/core";
import './CharacterSheet.css'

function Equipment(props) {
    const cardStyle={border: '2px solid' }
    return (
        <div>
            <Card style={cardStyle} align='center'> 
                <h4 className="h4Char">Equipment</h4> 
                <p className="pChar">{ props.equipment }</p>
            </Card>
        </div>
    );
}

export default Equipment;