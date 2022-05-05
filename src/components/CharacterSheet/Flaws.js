import { Card } from "@material-ui/core";
import './CharacterSheet.css'

function Flaws(props) {
    const cardStyle = { border: '2px solid', marginTop: "5%", paddingTop:'2%', paddingLeft: '5%', paddingBottom:'50%', paddingRight:'5%'}
    const flawstyle = {fontStyle:"italic"}
    return (
        <div>
            <Card style={cardStyle} align='center'>
                <h3 className="h3Char">Flaws</h3>
                <p className="pItalicsChar"style={flawstyle}>{props.flaws}</p>
            </Card>
        </div>
    );
}

export default Flaws;