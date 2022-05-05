import './CharacterSheet.css'

function Race(props) {
    const headerStyle ={display: "inline"}
    return (
        <div>
           <h3 className="h3Char" style={headerStyle}>Race: { props.race }</h3>
        </div>
    );
}

export default Race;