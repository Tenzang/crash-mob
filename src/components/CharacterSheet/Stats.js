import { Card } from "@material-ui/core";

function Stats(props) {
    const cardStyle={border: '2px solid', display:'grid', gridTemplateColumns:'1fr 1fr' }
    return (
        <div>
            <Card style={cardStyle} align='center'>
                <h3>Race: { props.race }</h3>
                <h3>Level: { props.level }</h3>

                <h3>Class: { props.role }</h3>
                <h3>EXP: { props.xp }</h3>
            </Card>
        </div>
    );
}

export default Stats;