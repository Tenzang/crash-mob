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
                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={back}
                        >Back</Button>
                        <br/>
                         <Button onClick={()=> props.createNewCharacter()}>Create!</Button>
                    </Dialog>
               
        
    )
}
export default ReviewCharacter;