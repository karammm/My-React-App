import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
	const [meals,setMeals] = useState([]);
	const [isLoading,setISLoading]= useState(true);
	
	useEffect(() => {
		//it will now not return a promis
		const featchMeals = async () => {
			const response = await fetch('https://react-app-d7127-default-rtdb.firebaseio.com	/meals.json');
			//this is a json we need to transform in an array
			const responseData = await response.json();

			const loadedMeals = [];
			for ( const key in responseData){
				loadedMeals.push({
					id:key,
					name: responseData[key].name,
					description: responseData[key].description,
					price: responseData[key].price,
				})
			}
			setMeals(loadedMeals); 
			setISLoading(false);
		};
		featchMeals();
	}, []);

	if(isLoading){
		return <section className={classes.mealsLoading}>
			<p>Loading...</p>
		</section>
	}

	const mealsList = meals.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
