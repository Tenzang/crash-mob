import axios from "axios";
import Button from '@material-ui/core/Button';

const sourceURL = 'http://localhost:3000/';

const back = event => {
    event.preventDefault();
    this.props.prevStep();
};

function CharacterSubmit(props) {
    return (
        <div>
            <Button
                color="secondary"
                variant="contained"
                onClick={(event) => {
                    back(event);
                }}
            >Back</Button>

            <Button
                color="primary"
                variant="contained"
                onClick={ axios.get(sourceURL + "characters", props) }
            >Create Character</Button>
            <Button onClick={event =>  window.location.href='/characters'}>Exit</Button>
        </div>
        
    );
}

export default CharacterSubmit;