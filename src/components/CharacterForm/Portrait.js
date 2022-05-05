import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Portrait (props) {

    const next = event => {
        event.preventDefault();
        props.nextStep();
    };
    
    const back = event => {
        event.preventDefault();
        props.prevStep();
    };

    return (
        <Dialog
            open
            fullWidth
            maxWidth='sm'
        >
            <AppBar title="Character Portrait" />
                <h2 class="headings">Portrait:</h2>
                <TextField
                    placeholder="http://..."
                    label="Character Portrait"
                    onChange={props.handleChange('image')}
                    defaultValue={props.portrait}
                    margin="normal"
                    fullWidth
                />
                <br/>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={next}
                >Continue</Button>
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

export default Portrait;