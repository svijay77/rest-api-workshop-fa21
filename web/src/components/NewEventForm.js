import React, {useState} from 'react';
import {Col, Form, InputGroup, Row, Button} from "react-bootstrap";

const NewEventForm = () => {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [date, setDate] = useState("")
    const [category, setCategory] = useState("")

    // TODO: Make API POST call
    // TODO: Make Category a dropdown
    return (
        <>
            <h4 style={{color: "white", fontFamily: "arial"}}>
                Add a new Event
            </h4>
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
                        <InputGroup.Text id="Date">Time</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control name = "Date" value={date} onChange={e=>{
                        e.preventDefault();
                        setDate(e.target.value);
                    }}/>
                </InputGroup>
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
                <Button type="submit">Save</Button>
            </Row>
            <hr style={{color:"white", backgroundColor: "white"}}/>
        </>
    )
}

export default NewEventForm;