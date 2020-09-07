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
            nominations: [{
                title: "",
                year: "",
                imdbID: "",
            }]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getData = this.getData.bind(this);

    }

    componentDidMount(){
        this.loadLocalData();
    }

    loadLocalData(){
        const temp = localStorage.getItem('nominations');
        const nominations = JSON.parse(temp)

        this.setState({
            nominations: nominations,
        })
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
                //console.log(response.data);  //debug
                this.newState(response.data.Search);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    newState(movies){

        const movieList = movies.map(movie => {
            return(
            {
                title: movie.Title,
                year: movie.Year,
                imdbID: movie.imdbID,
                nominate: false,
            }
            )
        })

        this.setState({
            movies: movieList.slice(1),
        })
    }

    handleAdd(i){
        let nominations = this.state.nominations.slice();
        let movies = this.state.movies.slice();
        
        movies[i] = {
            title: this.state.movies[i].title,
            year: this.state.movies[i].year,
            imdbID: this.state.movies[i].imdbID,
            nominate: true,
        }

        nominations.push({
            title: this.state.movies[i].title,
            year: this.state.movies[i].year,
            imdbID: this.state.movies[i].imdbID,
        })

        this.setState({
            movies: movies,
            nominations: nominations
        })

        if(nominations.length === 6)
            alert('Maximum nominations is 5')

        localStorage.setItem('nominations',JSON.stringify(nominations));
    }

    handleDelete(index){

        const nominations = this.state.nominations;
        const delNomination = nominations.filter((nom, i) =>
            i !== index
        )

        const movies = this.state.movies.slice();

        for (let i = 0; i < movies.length; i++){
            if(nominations[index].imdbID === movies[i].imdbID)
                movies[i].nominate = false
        }
       

        this.setState({
           movies: movies,
           nominations: delNomination })
    }

    render(){

        const movies = this.state.movies.slice();

        const results = this.state.movie ? `"${this.state.movie}"` : null;

        return(
            <div className='mainBoard'>
                <div className='head'>The Shoppies</div>
                <div className='search'>
                    <div>Movie Title</div>
                        <form onSubmit={this.handleSubmit}>
                            <input className='searchBox' type="text" value={this.state.movie} onChange={this.handleChange} />
                        </form>
                </div>
                <div className='resultBody'>
                    <div className='results'>
                        <div>Results for {results}</div>
                            <ul>
                                <Results 
                                    movies={movies}
                                    onClick={(i) => {this.handleAdd(i)}}
                                />
                            </ul>
                    </div>
                    <div className='nominations'>
                        <div>Nominations
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