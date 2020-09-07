//importing modules
import React from 'react';
import Results from './omdb-results-component';
import Nominations from './omdb-nominations-component';
import axios from 'axios';


export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movie: '',
            movies: [],
            nominations:[{
                title: "",
                year: "",
            }]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getData = this.getData.bind(this);

    }

    handleChange(event) {
        this.setState({
            movie: event.target.value
        });
      }
    
      handleSubmit(event) {
        this.getData();
        event.preventDefault();
      }

    getData(){

        const url = 'http://www.omdbapi.com/?apikey=ae471440&s=';

        axios.get(url + this.state.movie)
            .then(response => {
                console.log(response.data);  //debug
                this.newState(response.data.Search);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    newState(movies){
        this.setState({
            movies: movies.slice()
        })
    }

    handleClick(i){
        const nominations = this.state.nominations.slice();

        this.setState({
            nominations: nominations.concat([{
                title: this.state.movies[i].Title,
                year: this.state.movies[i].Year,
            }])
        })

        //console.log(this.state.nominations)
    }

    handleDelete(index){
        const nominations = this.state.nominations;

        const delNominations = nominations.filter((nom, i) =>
            i !== index
        )

        this.setState({
           nominations: delNominations })

    }

    render(){

        const movies = this.state.movies.slice();

        return(
            <div className='mainBoard'>
                <div className='head'>The Shoppies</div>
                <div className='search'>
                    <div>Movie Title</div>
                        <form onSubmit={this.handleSubmit}>
                            <input className='searchBox' type="text" value={this.state.value} onChange={this.handleChange} />
                            <input type="submit" value="Submit" hidden/>
                        </form>
                </div>
                <div className='resultBody'>
                    <div className='results'>
                        <div>Results for</div>
                            <ul>
                                <Results 
                                    movies={movies}
                                    onClick={(i) => {this.handleClick(i)}}
                                />
                            </ul>
                    </div>
                    <div className='nominations'>
                        <div>
                        <ul>
                        <Nominations 
                            nominations={this.state.nominations}
                            onClick={(i) => {this.handleDelete(i)}}
                        />
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}