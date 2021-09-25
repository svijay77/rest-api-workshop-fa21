import React, { useState } from 'react';
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap";
import APIService from '../services/APIService';

const NewEventForm = () => {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [date, setDate] = useState("")
    const [category, setCategory] = useState("")

    const onSaveClick = (event) => {
        event.preventDefault();
        if (name === '') return;
        if (location === '') return;

        const newEvent = { name, location, date, category };
        // TODO: PUT Request
        // const existingEvent = props.events.find(p => p.name === name);
        // if (existingEvent !== undefined) {
        //     if (window.confirm(`${name} already exists in the phone book, update their info?`)) {
        //         APIService.updateEvent(newPerson)
        //             .then(responsePerson => setPhonebook(
        //                 phonebook.filter(p => p.id !== existingPerson.id)
        //                     .concat(responsePerson)))
        //             .catch(error => setMessage(error.response.data.error, true));
        //         setShowForm(false);
        //     }
        //     return;
        // }

        APIService.createEvent(newEvent)
            .catch(error => console.log('Something went wrong!', error));
        setName('');
        setLocation('');
        setDate('');
        setCategory('');
    }

    // TODO: Make API POST call
    // TODO: Make Category a dropdown
    return (
        <>
            <h4 style={{ color: "white", fontFamily: "arial" }}>
                Add a new Event
            </h4>
            <Form onSubmit={onSaveClick}> 
                <Row>
                    <InputGroup as={Col}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="Name">Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control name="Name" value={name} onChange={e => {
                            e.preventDefault();
                            setName(e.target.value);
                        }} />
                    </InputGroup>
                    <InputGroup as={Col}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="Location">Location</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control name="location" value={location} onChange={e => {
                            e.preventDefault();
                            setLocation(e.target.value);
                        }} />
                    </InputGroup>
                    <InputGroup as={Col}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="Date">Time</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control name="Date" value={date} onChange={e => {
                            e.preventDefault();
                            setDate(e.target.value);
                        }} />
                    </InputGroup>
                    <InputGroup as={Col}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="Category">Category</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control name="Category" value={category} onChange={e => {
                            e.preventDefault();
                            setCategory(e.target.value);
                        }} />
                    </InputGroup>
                    {/* <button type="submit" class="btn btn-primary" onClick={setName(name), setLocation(location), setDate(date), setTime(time), setCategory(category)}>Save</button> */}
                    <Button type="submit">Save</Button>
                </Row>
            </Form>
            <hr style={{ color: "white", backgroundColor: "white" }} />
        </>
    )
}

export default NewEventForm;