//importing modules
import React from 'react';

//It creates the Nominations List in Nominations table
function Nominations(props){

    const nominations = 
        props.nominations.map((movie, i) => {
            if (i > 0) {
                return(
                <tr key={i}>
                    <td>{movie.title} {movie.year}</td>
                    <td><button onClick={() => {props.onClick(i)}}>Remove</button></td>     
                </tr>
                )
            }
            return null;
        })
    return nominations;
}

export default Nominations;