import {Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { IconButton, Typography } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons';

function CharacterCard(props) {
    return (
        <div>
            { props.characters.map(character => {
                return (
                    <div>
                        <Card elevation={3}>
                        <CardHeader
                            action={
                                <IconButton onClick={() => console.log('delete', character.name)}>
                                    <DeleteOutlined/>
                                </IconButton>
                            }
                            title={character.name}
                        />
                        <CardContent>
                            <Typography variant='body2' color='textSecondary'>
                                { character.level }
                                { character.race }
                                { character.role }
                            </Typography>
                        </CardContent>
                        <Link to={`/charactersheet/${character.id}`}>{ character.name }</Link>


                        </Card>
                    </div>
                );
            }) }
        </div>
    );
}

export default CharacterCard;