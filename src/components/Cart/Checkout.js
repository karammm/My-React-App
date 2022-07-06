import classes from './Checkout.module.css'
const Checkout = (props) => {
    const confirmHandler = (event) => {
        event.preventDefault();
    }
    return <form onSubmit={confirmHandler}>
        <div className={classes.control}>
            <input type="text" id="name" />
            <label htmlFor="name">
                Your Name
            </label>
        </div>
        <div className={classes.control}>
            <input type="text" id="street" />
            <label htmlFor="street">
                Street
            </label>
        </div>
        <div className={classes.control}>
            <input type="text" id="postal" />
            <label htmlFor="postal">
                Postal Code
            </label>
        </div>
        <div className={classes.control}>
            <input type="text" id="city" />
            <label htmlFor="city">
                City
            </label>
        </div>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button>Confirm</button>
    </form >
};
export default Checkout;