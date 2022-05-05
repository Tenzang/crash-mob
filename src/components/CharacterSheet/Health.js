import { Card } from "@material-ui/core";
import './CharacterSheet.css'

function Health (props) {
    const { abilities, hitpoints, level, hitDice } = props;
    const { modifier } = abilities.constitution;
    const maxHealth = hitDice + modifier + ((hitDice / 2 + 1) + modifier * (level - 1));
    const cardStyle={ border: '2px solid' , borderRadius:'3em', width: "80%", margin:"2%"}
    return (
        <div>
            <Card style={cardStyle} align='center'>
                <h3 className="h3Char">Hitpoints</h3>
                <h3 className="h3Char">{ hitpoints } / { maxHealth }</h3>
            </Card>
        </div>
    );
}

export default Health;
