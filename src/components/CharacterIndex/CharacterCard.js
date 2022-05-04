import {useNavigate} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { IconButton, Typography, Button, Grid } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons';


function CharacterCard(props) {
    const navigate = useNavigate();
    return (
        <div>
            <Grid>
            { props.characters.map(character => {
                const cardStyle ={ bordeRadius: '1em',padding: 20 ,margin: ' 5% auto', height: '600px', width:'500px'}
                const btnStyle ={marginLeft: '5%', marginBottom: '5%'}
                const imgStyle = { borderRadius: '1em',margin: '0 auto', height:"20em"}

                return (
                    <div>
                        <Card style={cardStyle} elevation={3}>
                            <Grid align='center'>
                            <CardHeader
                                action={
                                    <IconButton onClick={() => props.handleDelete(character.id)}>
                                        <DeleteOutlined/>
                                    </IconButton>
                                }
                                title={character.name}
                            />
                            <img style={imgStyle} src={character.image}/>
                            <CardContent>
                                <Typography variant='body2' color='textSecondary'>
                                    <h4>Character Level: { character.level }</h4>
                                    <h4>Character Race: { character.race }</h4>
                                    <h4>Character Role: { character.role }</h4>
                                </Typography>
                            </CardContent>
                        <Button variant="contained" color="primary" onClick={()=>navigate(`/charactersheet/${character.id}`)} style={btnStyle}> { character.name }</Button>
                        </Grid>
                        </Card>
                    </div>
                );
            }) }
            </Grid>
        </div>
    );
}

export default CharacterCard;