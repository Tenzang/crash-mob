import { Card, Divider } from "@material-ui/core";
import "./CharacterSheet.css";
import _ from "lodash";

function SavingThrows(props) {
  const { abilities, saveProfs, proficiency } = props;
  const headerStyle = { display: "inline" };
  const cardStyle = {
    marginBottom: "2%",
    paddingBottom: "4%",
    border: "2px solid",
  };
  const paraStyle = { fontSize: "1em" };
  const divStyle = { padding: "2%" };

  return (
    <div>
      <Card align="center" style={cardStyle} borderColor="grey.500">
        <h3 className="h3Char">Saving Throws</h3>
        {Object.keys(abilities).map((abilityName) => {
          return (
            <div style={divStyle} key={abilityName}>
              <h3 className="h3Char" style={headerStyle}>
                {_.capitalize(abilityName) + " "}
              </h3>
              <h5 className="h5Char" style={headerStyle}>
                {abilities[abilityName].modifier +
                  saveProfs[abilityName] * proficiency >=
                0
                  ? "+"
                  : ""}
              </h5>
              {abilities[abilityName].modifier +
                saveProfs[abilityName] * proficiency}
              <p className="pChar" style={paraStyle}>
                proficient: {saveProfs[abilityName] ? "yes" : "no"}
              </p>
              <Divider />
            </div>
          );
        })}
      </Card>
    </div>
  );
}

export default SavingThrows;
