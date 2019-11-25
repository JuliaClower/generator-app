import React, { Component } from 'react'
import axios from 'axios'

export default class SingleDrinks extends Component {
    state = {
        home: '',
        alcoholic: '',
        name: '',
        price: '',
        time: '',
        location: '',
        ingredients: '',
        instructions: '',
    }
    componentDidMount() {
        const drinksId = this.props.match.params.drinksId
        axios.get(`/api/v1/drinks/${drinksId}`)
            .then((res) => {
                console.log(res.data)
                this.setState(res.data)
            })
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
