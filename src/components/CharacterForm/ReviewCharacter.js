import { render } from "@testing-library/react";
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

function ReviewCharacter(props){
   const back = event => {
        event.preventDefault();
        props.prevStep();
    };
    return(
        <Dialog
            open
            fullWidth
            maxWidth='sm'
        >
            <h2>Character Complete</h2>
            <Button color="primary" variant="contained" onClick={()=> props.createNewCharacter()}>Create!</Button>  

            <Button
                color="secondary"
                variant="contained"
                onClick={back}
            >Back</Button>

            <Button onClick={event =>  window.location.href='/characters'}>Exit</Button>
        </Dialog>
    )
}
export default ReviewCharacter;