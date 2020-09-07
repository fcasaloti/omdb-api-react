//importing modules
import React from 'react';

export default class Results extends React.Component{

    moviesList(){

        const movie = this.props.movies.map((eachMovie, i) => {
            return (
                <li key={i}>
                    {eachMovie.title} ({eachMovie.year}) |
                    <button 
                        onClick={() => {this.props.onClick(i)}}
                        disabled={eachMovie.nominate}
                    >
                        Nominee
                </button>                  
                </li>
            )
        });

        return movie;
    }
    

    render(){

        return(
            this.moviesList()
        )
    }

}