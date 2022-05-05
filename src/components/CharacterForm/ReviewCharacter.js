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
            <h2 class="headings">Character Complete</h2>
            <Button color="primary" variant="contained" onClick={()=> {
                props.createNewCharacter();
                window.location.href='/characters';
            }}>Create!</Button>
            <br/>
            <Button
                color="secondary"
                variant="contained"
                onClick={back}
            >Back</Button>
            <br/>
            <Button onClick={ () =>  window.location.href='/characters' }>Exit</Button>
        </Dialog>
    );
}
export default ReviewCharacter;