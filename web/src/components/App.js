import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import '../App.css';
import APIService from '../services/APIService';

const App = () => {
    const default_events = {
        "0": { name: "Open-Source@Illinois", location: "Siebel", date: "09/25/2021", time: "4:00 PM", category: "Workshop", quantity: 10 },
        "1": { name: "Open-Source", location: "Siebel", date: "09/25/2021", time: "4:00 PM", category: "Workshop1", quantity: 69 },
    }

    const [events, setEvents] = useState(default_events)


    useEffect(() => {
        APIService.getEvents()
            .then(eventList => {
                console.log(eventList)
                setEvents(eventList)
            })
    }, []);

    const ids = Object.keys(events);
    return (
        <div>
            <Table striped hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Date / Time</th>
                        <th>Category</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ids.map(id => events[id])
                            .map(event =>
                                <tr key={event.id}>
                                    <td>{event.name}</td>
                                    <td>{event.location}</td>
                                    <td>{event.date}</td>
                                    <td>{event.category}</td>
                                    <td>{event.quantity}</td>
                                </tr>
                            )
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default App;