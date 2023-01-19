import { useNavigate } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, Typography, Button, Grid } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import "./indexstyle.css";

function CharacterCard(props) {
  const navigate = useNavigate();
  return (
    <div>
      <Grid>
        {props.characters.map((character, index) => {
          const cardStyle = {
            bordeRadius: "1em",
            padding: 20,
            margin: "5% auto",
            height: "20%",
            width: "40%",
          };
          const btnStyle = { marginLeft: "0%", marginBottom: "0%" };
          const imgStyle = {
            borderRadius: "1em",
            margin: "0 auto",
            height: "20em",
          };

          return (
            <div key={index}>
              <Card style={cardStyle} elevation={3}>
                <Grid align="center">
                  <CardHeader
                    action={
                      <IconButton
                        onClick={() => props.handleDelete(character.id)}
                      >
                        <DeleteOutlined />
                      </IconButton>
                    }
                    title={character.name}
                  />
                  {character.image === "" ? (
                    <img
                      style={imgStyle}
                      src="https://trello-logos.s3.amazonaws.com/64a30c1b494db6b01d6b3bc4771da313/170.png"
                      alt="crash-mob logo"
                    />
                  ) : (
                    <img
                      style={imgStyle}
                      src={character.image}
                      alt={"portrait of " + character.name}
                    />
                  )}

                  <CardContent>
                    <Typography variant="body2" color="textSecondary">
                      <h4>Character Level: {character.level}</h4>
                      <h4>Character Race: {character.race}</h4>
                      <h4>Character Role: {character.role}</h4>
                    </Typography>
                  </CardContent>
                  <Button
                    className="character-btn"
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(`/charactersheet/${character.id}`)}
                    style={btnStyle}
                  >
                    {" "}
                    {character.name}
                  </Button>
                </Grid>
              </Card>
            </div>
          );
        })}
      </Grid>
    </div>
  );
}

export default CharacterCard;
