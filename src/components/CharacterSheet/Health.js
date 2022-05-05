import { Card } from "@material-ui/core";
const cardStyle={marginTop: '2%', marginBottom: '2%', border: '2px solid' }

function Health (props) {
    const { abilities, hitpoints, level, hitDice } = props;
    const { modifier } = abilities.constitution;
    const maxHealth = hitDice + modifier + ((hitDice / 2 + 1) + modifier * (level - 1));
    const cardStyle={border: '2px solid', marginTop:'2%' }
    return (
        <div>
            <Card style={cardStyle} align='center'>
                <h5>Hitpoints</h5>
                <h3>{ hitpoints } / { maxHealth }</h3>
            </Card>
        </div>
    );
}

export default Health;
