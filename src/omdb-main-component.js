//importing modules
import React from 'react';
import Results from './omdb-results-component';
import Nominations from './omdb-nominations-component';
import axios from 'axios';

//default Main Class
export default class Main extends React.Component {
    constructor(props) {
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

    //mount localstorage data for Nominations
    componentDidMount() {
        this.loadLocalData();
    }

    //get nominations stored in local storage
    loadLocalData() {
        const temp = localStorage.getItem('nominations');
        const nominations = JSON.parse(temp)

        if (nominations !== null) {
            this.setState({
                nominations: nominations,
            })
        }
    }

    //setState from data of textbox
    handleChange(event) {
        this.setState({
            movie: event.target.value
        });
    }

    //call function to get data from the API using state data
    handleSubmit(event) {
        this.getData();
        event.preventDefault();
    }

    //get data from API
    getData() {

        const url = 'https://www.omdbapi.com/?apikey=ae471440&s=';

        axios.get(url + this.state.movie)
            .then(response => {
                //console.log(response.data);  //debug
                this.newState(response.data.Search);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //set new state using data from the api
    newState(movies) {

        const movieList = movies.map(movie => {
            return (
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

    //handling Nominee Button events and adding movies to Nominations
    handleAdd(i) {
        let nominations = this.state.nominations.slice();
        let movies = this.state.movies.slice();

        if (nominations.length <= 5) {
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

            localStorage.setItem('nominations', JSON.stringify(nominations));
        }
        else
            alert('Maximum nominations is 5')
    }

    //handling Remove Button events to delete Nominated Movies
    handleDelete(index) {

        const nominations = this.state.nominations;
        const delNomination = nominations.filter((nom, i) =>
            i !== index
        )

        const movies = this.state.movies.slice();

        for (let i = 0; i < movies.length; i++) {
            if (nominations[index].imdbID === movies[i].imdbID)
                movies[i].nominate = false
        }

        localStorage.setItem('nominations', JSON.stringify(delNomination));

        this.setState({
            movies: movies,
            nominations: delNomination
        })
    }


    //Rendering
    render() {

        const movies = this.state.movies.slice();

        const results = this.state.movie ? `"${this.state.movie}"` : null;

        return (
            <div className='container'>
                <h3 className='mt-5'>The Shoppies</h3>
                <div className='d-flex bg-white p-4'>
                    <div className="col-12">
                        <h6>Movie Title</h6>
                        <form onSubmit={this.handleSubmit}>
                            <input className='col-11' type="text" value={this.state.movie} onChange={this.handleChange} />
                        </form>
                    </div>
                </div>
                <div className='d-flex bg-white mt-2'>
                    <div className='col-6'>
                        <div>
                            <h6>
                                Results for {results}
                            </h6>
                        </div>
                        <table className="table table-hover">
                            <tbody>
                                <Results
                                    movies={movies}
                                    onClick={(i) => { this.handleAdd(i) }}
                                />
                            </tbody>
                        </table>
                    </div>
                    <div className='col-6'>
                        <div>
                            <h6>
                                Nominations
                            </h6>
                            <table className="table table-hover">
                                <tbody>
                                    <Nominations
                                        nominations={this.state.nominations}
                                        onClick={(i) => { this.handleDelete(i) }}
                                    />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}