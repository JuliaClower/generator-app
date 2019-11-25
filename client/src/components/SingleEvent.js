import React, { Component } from 'react'
import axios from 'axios'

export default class SingleDinner extends Component {
    state = {
        home: '',
        name: '',
        time: '',
        location: ''
    }
    componentDidMount() {
        const dinnerId = this.props.match.params.dinnerId
        axios.get(`/api/v1/dinner/${dinnerId}`)
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
