import classes from './Counter.module.css';
import {Component} from 'react';
// import {useSelector, useDispatch} from "react-redux";
import {connect} from "react-redux";

// const Counter = () => {
// 	const dispatch = useDispatch()
// 	const counter = useSelector(state => state.counter);
//
// 	const handleIncrement = () => {
// 		dispatch({type: 'increment'});
// 	}
//
// 	const handleDecrement = () => {
// 		dispatch({type: 'decrement'});
// 	}
//
// 	const toggleCounterHandler = () => {};
//
// 	return (
// 		<main className={classes.counter}>
// 			<h1>Redux Counter</h1>
// 			<div className={classes.value}>{counter}</div>
// 			<div>
// 				<button onClick={handleIncrement}>Increment</button>
// 				<button onClick={handleDecrement}>Decrement</button>
// 			</div>
// 			<button onClick={toggleCounterHandler}>Toggle Counter</button>
// 		</main>
// 	);
// };
//
// export default Counter;

class Counter extends Component {
	handleIncrement () {
		this.props.increment();
	}
	handleDecrement () {
		this.props.decrement();
	}
	handleToggleCounter () {}

	render() {
		return (
			<main className={classes.counter}>
				<h1>Redux Counter</h1>
				<div className={classes.value}>{this.props.counter}</div>
				<div>
					<button onClick={this.handleIncrement.bind(this)}>Increment</button>
					<button onClick={this.handleDecrement.bind(this)}>Decrement</button>
				</div>
				<button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
			</main>
		)
	}
}

const mapStateToProps = state => {
	return {
		counter: state.counter,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		increment: () => dispatch({type: 'increment'}),
		decrement: () => dispatch({type: 'decrement'}),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
