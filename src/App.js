import {useState, useEffect} from 'react'
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import './App.css';

function App() {
  const [movie, setMovie] = useState(null)
  
  //this keeps the movie list on the page
  useEffect(() => {
    getMovie('lord of the rings')
  },[])

  //function to fetch movie data
  const getMovie = async (searchTerm) => {
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=98e3fb1f&t=${searchTerm}`)
      //res in json
      const data = await res.json()
      //set the data into state
      setMovie(data);
      
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <h1>React Movies</h1>
      <Form movieSearch={getMovie} /> 
      {movie && <MovieDisplay movie={movie} /> }
    </div>
  );
}

export default App;
