import react,{Fragment} from "react";
import mealImg from "../../assets/meal.jpg"
import classes from './Header.module.css'
const Header=(props)=>{
    return(
        <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealImg} alt="meal"/>
        </div>
        </Fragment>
    );
}
export default Header;