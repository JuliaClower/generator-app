import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Event extends Component {
    state = {
        drinksList: []
    }
    componentDidMount = () => {
        this.getAllEvent();
    }

    getAllDinner = () => {
        axios.get('api/v1/event')
            .then((res) => {
                const eventList = res.data;
                this.setState({ eventList: eventList })
            });
    };
    render() {
        return (
            <div>
                {this.state.eventList.map((event) => {
                    return (<Link to={`event/${event.id}`}>
                        <div>{event.name}</div>
                    </Link>)
                })}
            </div>
        )
    }
}

