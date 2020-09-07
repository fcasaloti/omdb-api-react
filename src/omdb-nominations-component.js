//importing modules
import React from 'react';

function Nominations(props){

    const nominations = 
        props.nominations.map((movie, i) => {
            if (i > 0) {
                return(
                <li key={i}>
                    {movie.title} {movie.year} |
                    <button onClick={() => {props.onClick(i)}}>Remove</button>     
                </li>
                )
            }
        })
    return nominations;
}

export default Nominations;