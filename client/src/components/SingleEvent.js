import React, { Component } from 'react'
import axios from 'axios'

export default class SingleEvent extends Component {
    state = {
        home: '',
        name: '',
        time: '',
        location: ''
    }
    componentDidMount() {
        const eventId = this.props.match.params.eventId
        axios.get(`/api/v1/event/${eventId}`)
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
