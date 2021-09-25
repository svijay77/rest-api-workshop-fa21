import React, {useState} from 'react';
import {Table} from "react-bootstrap";
import '../App.css';

const App = () => {
    const events = {
        "0" : {name:"Open-Source@Illinois", location:"Siebel", date:"09/25/2021", time:"4:00 PM", category:"Workshop"},
        "1" : {name:"Open-Source@Illinois", location:"Siebel", date:"09/25/2021", time:"4:00 PM", category:"Workshop1"},
    }

    // TODO: Pull events from API

    const ids = Object.keys(events);
    return (
        <div>
            <Table striped hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                {
                    ids.map(id => events[id])
                       .map(event =>
                            <tr key={event.id}>
                                <th>{event.id}</th>
                                <td>{event.name}</td>
                                <td>{event.location}</td>
                                <td>{event.date}</td>
                                <td>{event.category}</td>
                            </tr>
                        )
                }
                </tbody>
            </Table>
        </div>
    )
}

export default App;