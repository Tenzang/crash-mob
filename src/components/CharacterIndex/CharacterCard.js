import {Link } from "react-router-dom";


function CharacterCard(props) {
    return (
        <div>
            { props.characters.map(character => {
                return (
                    <div>
                        <nav>
                            <Link to={`/charactersheet/${character.id}`}>{ character.name }</Link>
                        </nav>
                        { character.level }
                        { character.race }
                        { character.role }
                    </div>
                );
            }) }
        </div>
    );
}

export default CharacterCard;