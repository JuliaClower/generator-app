import React, { Component } from 'react'
import GetStarted from './GetStarted.js'
import Dinner from './Dinner.js'
import Drinks from './Drinks.js'
import Event from './Event.js'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Wizard extends Component {
	state = {
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
	render() {
		let drinksList = []
		let dinnerList = []
		let eventList = []
		if (this.state.noDrinksSelected) {
			drinksList = this.state.drinksList.map((drink) => {
				return (
					<button
						onClick={() => { this.drinksSelectClick(drink) }}
					>
						{drink.name}
					</button>
				)
			})
		}
		if (this.state.noDinnerSelected) {
			dinnerList = this.state.dinnerList.map((dinner) => {
				return (
					<button
						onClick={() => { this.dinnerSelectClick(dinner) }}
					>
						{dinner.name}
					</button>
				)
			})
		}
		if (this.state.noEventSelected) {
			eventList = this.state.eventList.map((event) => {
				return (
					<button
						onClick={() => { this.eventSelectClick(event) }}
					>
						{event.name}
					</button>
				)
			})
		} else {
			console.log('this.state.noDrinksSelected', this.state.noDrinksSelected)
			return (
				<div>
					<p>{this.state.selectedDrink.name}</p>
					<p>{this.state.selectedDinner.name}</p>
					<p>{this.state.selectedEvent.name}</p>
				</div>

			)
		}
		return (
			<div>
				{drinksList}
				{dinnerList}
				{eventList}
			</div>
		)
	}
}
