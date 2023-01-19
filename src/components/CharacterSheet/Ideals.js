import { Card } from "@material-ui/core";
import "./CharacterSheet.css";

function Ideals(props) {
  const cardStyle = {
    border: "2px solid",
    paddingTop: "2%",
    paddingLeft: "5%",
    paddingBottom: "50%",
    paddingRight: "5%",
  };
  const idealstyle = { fontStyle: "italic" };
  return (
    <div>
      <Card style={cardStyle} align="center">
        <h3 className="h3Char">Ideals</h3>
        <p className="pChar" style={idealstyle}>
          {props.ideals}
        </p>
      </Card>
    </div>
  );
}

export default Ideals;
