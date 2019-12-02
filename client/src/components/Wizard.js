import React, { Component } from 'react'
import GetStarted from './GetStarted.js'
import Dinner from './Dinner.js'
import Drinks from './Drinks.js'
import Event from './Event.js'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Wizard extends Component {
	state = {
		dateName: '',
		event: {},
		dinner: {},
		selectedDrink: {},
		selectedDinner: {},
		selectedEvent: {},
		noDrinksSelected: true,
		noDinnerSelected: true,
		noEventSelected: true,
		drinksList: [],
		eventList: [],
		dinnerList: []
	}
	componentDidMount = () => {
		this.getAllDrinks()
	}
	getAllDrinks = () => {
		axios.get('api/v1/drinks')
			.then((res) => {
				const drinksList = res.data;
				this.setState({ drinksList: drinksList })
			})
	}
	getAllDinner = () => {
		axios.get('api/v1/dinner')
			.then((res) => {
				const dinnerList = res.data;
				this.setState({ dinnerList: dinnerList })
			});
	};
	getAllEvent = () => {
		axios.get('api/v1/event')
			.then((res) => {
				const eventList = res.data;
				this.setState({ eventList: eventList })
			});
	};
	drinksSelectClick = (drink) => {
		console.log('drinks clicked')
		console.log(drink)
		this.setState({ selectedDrink: drink })
		this.setState({ noDrinksSelected: false })
		this.getAllDinner()
	}
	dinnerSelectClick = (dinner) => {
		this.setState({ selectedDinner: dinner })
		this.setState({ noDinnerSelected: false })
		this.getAllEvent()
	}
	eventSelectClick = (event) => {
		this.setState({ selectedEvent: event })
		this.setState({ noEventSelected: false })
	}
	handleChange = event => {
		console.log(event.target.value)
		this.setState({ dateName: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		let dateSave = {
			name: this.state.dateName,
			drink: this.state.selectedDrink.name,
			dinner: this.state.selectedDinner.name,
			event: this.state.selectedEvent.name
		}
		console.log(dateSave)

		axios.post('api/v1/date/',  dateSave )
			.then((res) => {
				console.log(res);
			}, (error) => {
				console.log(error);
			});
	}

	render() {
		let drinksList = []
		let dinnerList = []
		let eventList = []
		if (this.state.noDrinksSelected) {
			drinksList = this.state.drinksList.map((drink) => {
				return (
					<div className="itemDisplayDiv">
						<h1>{drink.name}</h1>
						<p>Alcoholic Beverage: {drink.alcoholic}</p>
						<p>Drink Cost: $ {drink.price}</p>
						<p>Time: {drink.time} minutes</p>
						<p>Address: {drink.location}</p>
						<p>Drink Ingredients: {drink.ingredients}</p>
						<p>Instructions: {drink.instructions}</p>
						<button
							className="selectItemButton"
							onClick={() => { this.drinksSelectClick(drink) }}
						>
							Select {drink.name}
						</button>
					</div>
				)
			})
		}
		if (this.state.noDinnerSelected) {
			dinnerList = this.state.dinnerList.map((dinner) => {
				return (
					<div className="itemDisplayDiv">
						<h1>{dinner.name}</h1>
						<p>Home Meal or Restaurant: {dinner.home}</p>
						<p>Vegetarian: {dinner.vegetarian}</p>
						<p>Price: ${dinner.price}</p>
						<p>Time: {dinner.time} minutes</p>
						<p>Address: {dinner.location}</p>
						<p>Ingredients: {dinner.ingredients}</p>
						<p>Instructions: {dinner.instructions}</p>
						<button
							onClick={() => { this.dinnerSelectClick(dinner) }}
						>
							Select {dinner.name}
						</button>
					</div>
				)
			})
		}
		if (this.state.noEventSelected) {
			eventList = this.state.eventList.map((event) => {
				return (
					<div className="itemDisplayDiv">
						<h1>{event.name}</h1>
						<p>Home Event: {event.home}</p>
						<p>Time: {event.time} minutes</p>
						<p>Address: {event.location}</p>
						<button
							onClick={() => { this.eventSelectClick(event) }}
						>
							{event.name}
						</button>
					</div>
				)
			})
		} else {
			console.log('this.state.noDrinksSelected', this.state.noDrinksSelected)
			return (
				<div className="mainPage">
					<div className="finalPageDisplayScrollBox">
						<form onSubmit={this.handleSubmit}>
							<label>
								Date Name:
								<input type="text" name="name" onChange={this.handleChange} />
							</label>
							<button type='submit'>
								Post Final Date
							</button>
						</form>
						<p>Drinks: {this.state.selectedDrink.name}</p>
						<p>Dinner: {this.state.selectedDinner.name}</p>
						<p>Event: {this.state.selectedEvent.name}</p>
					</div>
				</div>

			)
		}
		return (
			<div className="mainPage">
				<div className="pageDisplayScrollBox">
					{drinksList}
					{dinnerList}
					{eventList}
				</div>
			</div>
		)
	}
}
