function Race(props) {
    const headerStyle ={display: "inline"}
    return (
        <div>
           <h3 style={headerStyle}>Race: { props.race }</h3>
        </div>
    );
}

export default Race;