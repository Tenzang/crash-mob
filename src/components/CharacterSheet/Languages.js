import { Card } from "@material-ui/core";
import "./CharacterSheet.css";

function Languages(props) {
  const cardStyle = { border: "2px solid", marginTop: "2%" };
  return (
    <div>
      <Card style={cardStyle} align="center">
        <h4 className="h4Char">Languages</h4>
        <p className="pChar">{props.languages}</p>
      </Card>
    </div>
  );
}

export default Languages;
