import { Card } from "@material-ui/core";
import './CharacterSheet.css'

function Bonds(props) {
    const cardStyle = { border: '2px solid', marginTop: "5%", paddingTop:'2%', paddingLeft: '5%', paddingBottom:'50%', paddingRight:'5%'}
    const bondStyle = {fontStyle:"italic"}
    return (
        <div>
            <Card style={cardStyle} align='center'>
                <h3 className="h3Char">Bonds</h3>
                <p className="pItalicsChar" style={bondStyle}>{props.bonds}</p>
            </Card>
        </div>
    );
}

export default Bonds;