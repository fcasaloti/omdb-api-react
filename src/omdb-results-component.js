//importing modules
import React from 'react';

export default class Results extends React.Component{

    moviesList(){

        const movie = this.props.movies.map((eachMovie, i) => {
            return (
                <li key={i}>
                    {eachMovie.Title} ({eachMovie.Year})
                    <button onClick={() => {this.props.onClick(i)}}>Nominee</button>                  
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