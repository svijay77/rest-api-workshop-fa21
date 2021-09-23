import logo from './logo.svg';
import React, {useState} from 'react';
import {Badge, Col, Form, InputGroup, Row, Table} from "react-bootstrap";
import './App.css';

const App = () => {
    const events = [
        {name:"Open-Source@Illinois", location:"Siebel", date:"09/25/2021", time:"4:00 PM", category:"Workshop"}
    ]
    const [name_, setName] = useState("")
    const [location_, setLocation] = useState("")
    const [date_, setDate] = useState("")
    const [time_, setTime] = useState("")
    const [category_, setCategory] = useState("")
    let event = {name: name_, location: location_, date: date_, time: time_, category: category_};
    events.push(event);
    return (
        <div>
            <Row>
                <InputGroup as={Col}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="Name">Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control name = "event" placeholder="Name" value={name_} onChange={e=>{
                        e.preventDefault();
                        setName(e.target.value)
                    }}/>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="Location">Location</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control name = "event" placeholder="Location" value="location_"/>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="Date">Date</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control name = "event" placeholder="Date" value="date_"/>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="Time">Time</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control name = "event" placeholder="Time" value="time_"/>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="Category">Category</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control name = "event" placeholder="Category" value="category_"/>
                </InputGroup>
                {/* <button type="submit" class="btn btn-primary" onClick={setName(name_), setLocation(location_), setDate(date_), setTime(time_), setCategory(category_)}>Save</button> */}
                <button type="submit" class="btn btn-primary">Save</button>

            </Row>
            <br/>
            <Table striped hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Time</th>
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
                        <td>{event.time}</td>
                        <td>{event.category}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    )
}

export default App;