import React, {useState} from 'react';
import {Badge, Col, Form, InputGroup, Row, Table} from "react-bootstrap";
import './App.css';

const App = () => {
    const events = [
        {name:"Open-Source@Illinois", location:"Siebel", date:"09/25/2021", time:"4:00 PM", category:"Workshop"}
    ]
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [date, setDate] = useState("")
    // const [time, setTime] = useState("")
    const [category, setCategory] = useState("")
    // let event = {name: name, location: location, date: date, time: time, category: category};
    // events.push(event);
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
                {events.map(event =>
                    <tr key={event.id}>
                        <th>{event.id}</th>
                        <td>{event.name}</td>
                        <td>{event.location}</td>
                        <td>{event.date}</td>
                        <td>{event.category}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    )
}

export default App;