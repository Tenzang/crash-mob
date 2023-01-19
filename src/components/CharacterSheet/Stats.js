import { Card } from "@material-ui/core";
import "./CharacterSheet.css";

function Stats(props) {
  const cardStyle = {
    border: "2px solid",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  };
  return (
    <div>
      <Card style={cardStyle} align="center">
        <h3 className="h3Char">Race: {props.race}</h3>
        <h3 className="h3Char">Level: {props.level}</h3>

        <h3 className="h3Char">Class: {props.role}</h3>
        <h3 className="h3Char">EXP: {props.xp}</h3>
      </Card>
    </div>
  );
}

export default Stats;
