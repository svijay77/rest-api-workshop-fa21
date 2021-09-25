import React, { useState } from "react";
import EventList from "./components/EventList";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import NewEventForm from "./components/NewEventForm";
import Notification from "./components/Notification";

const App = () => {
    const [events, setEvents] = useState(null);
    const [message, setMessage] = useState(null)
    const [timeoutId, setTimeoutId] = useState(null)

    const showMessage = (message, isError) => {
        if(timeoutId) clearTimeout(timeoutId)
        setMessage({text: message, error: isError})
        const id = setTimeout(() => setMessage(null), 5000)
        setTimeoutId(id)
    }

    return (
        <>
            <NavBar />
            <Container>
                <Notification message={message} />
                <NewEventForm showMessage={showMessage} />
                <EventList events={events} setEvents={setEvents} showMessage={showMessage} />
            </Container>
        </>
    )
}

export default App;