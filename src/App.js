import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMovieHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		try {
			//promise is an object which will eventually yield some data insted of immediately doing that bcz ofcourse
			//sending a http request is an asyncronous task it dosn't finish immediately it can take a couple of seconds
			//and therefore
			const response = await fetch("https://react-app-d7127-default-rtdb.firebaseio.com/movies.json");
			if (!response.ok) {
				throw new Error("Something Went Wrong!");
			}
			const data = await response.json();

			const loadMovies=[];
			for (const key in data){
				loadMovies.push({
					id:key,
					title: data[key].title,
					openingText: data[key].openingText,
					releaseDate: data[key].releaseDate,
				})
			}
			setMovies(loadMovies);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchMovieHandler();
	}, [fetchMovieHandler]);

	async function addMovieHandler(movie) {
		const response = await fetch("https://react-app-d7127-default-rtdb.firebaseio.com/movies.json",{
			method:'POST',
			body:JSON.stringify(movie),
			headers:{
				'Content-Type':'application/json'
			}
		});
		const data= await response.json();
	}

	let content = <p>Found no movies.</p>;

	if (movies.length > 0) {
		content = <MoviesList movies={movies} />;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	return (
		<React.Fragment>
			<section>
				<AddMovie onAddMovie={addMovieHandler} />
			</section>
			<section>
				<button onClick={fetchMovieHandler}>Fetch Movies</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}

export default App;
