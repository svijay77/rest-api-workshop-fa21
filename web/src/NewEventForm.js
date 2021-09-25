import React, {useState} from 'react';
import {Badge, Col, Form, InputGroup, Row, Table} from "react-bootstrap";

const NewEventForm = () => {
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

    // TODO: Make API POST call
    return (
        <>
            <Row>
                <InputGroup as={Col}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="Name">Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control name = "Name"  value={name} onChange={e=>{
                        e.preventDefault();
                        setName(e.target.value);
                    }}/>
                </InputGroup>
                <InputGroup as={Col}>    
                    <InputGroup.Prepend>
                        <InputGroup.Text id="Location">Location</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control name = "location" value={location} onChange={e=>{
                        e.preventDefault();
                        setLocation(e.target.value);
                    }}/>
                </InputGroup>
                <InputGroup as={Col}>    
                    <InputGroup.Prepend>
                        <InputGroup.Text id="Date">Date</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control name = "Date" value={date} onChange={e=>{
                        e.preventDefault();
                        setDate(e.target.value);
                    }}/>
                </InputGroup>
                {/* <InputGroup as={Col}>    
                    <InputGroup.Prepend>
                        <InputGroup.Text id="Time">Time</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control name = "Time" value={time} onChange={e=>{
                        e.preventDefault();
                        setTime(e.target.value);
                    }}/>
                </InputGroup> */}
                <InputGroup as={Col}>    
                    <InputGroup.Prepend>
                        <InputGroup.Text id="Category">Category</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control name = "Category" value={category} onChange={e=>{
                        e.preventDefault();
                        setCategory(e.target.value);
                    }}/>
                </InputGroup>
                {/* <button type="submit" class="btn btn-primary" onClick={setName(name), setLocation(location), setDate(date), setTime(time), setCategory(category)}>Save</button> */}
                <button type="submit" class="btn btn-primary">Save</button>
            </Row>
            <br/>
        </>
    )
}

export default NewEventForm;