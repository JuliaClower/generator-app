import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Drinks extends Component {
    state = {
        drinksList: []
    }
    componentDidMount = () => {
        this.getAllDrinks();
    }

    getAllDinner = () => {
        axios.get('api/v1/drinks')
            .then((res) => {
                const drinksList = res.data;
                this.setState({ drinksList: drinksList })
            });
    };
    render() {
        return (
            <div>
                {this.state.drinksList.map((drinks) => {
                    return (<Link to={`drinks/${drinks.id}`}>
                        <div>{drinks.name}</div>
                    </Link>)
                })}
            </div>
        )
    }
}

