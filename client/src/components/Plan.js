import React, { Component } from 'react'
import Dinner from './Dinner.js'
import Drinks from './Drinks.js'
import Event from './Event.js'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Plan extends Component {
    state = {
        event: '',
        dinner: '',
        drinks: ''
    }
    render() {
        return (
            <div>
                <h1> WATERMELON </h1>
                <Drinks/>
                <Dinner/>
                <Event/>
            </div>
        )
    }
}
