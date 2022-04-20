import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	async function fetchMovieHandler() {
		//promise is an object which will eventually yield some data insted of immediately doing that bcz ofcourse
		//sending a http request is an asyncronous task it dosn't finish immediately it can take a couple of seconds
		//and therefore
		const response = await fetch("https://swapi.dev/api/films/");
		const data = await response.json();
		const transformedMovies = data.results.map((movieData) => {
			return {
				id: movieData.episode_id,
				title: movieData.title,
				openingText: movieData.opening_crawl,
				releaseDate: movieData.release_date,
			};
		});
		setMovies(transformedMovies);
	}

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMovieHandler}>Fetch Movies</button>
			</section>
			<section>
				<MoviesList movies={movies} />
			</section>
		</React.Fragment>
	);
}

export default App;
