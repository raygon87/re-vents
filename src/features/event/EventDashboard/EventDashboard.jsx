import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import cuid from 'cuid'

const eventsDashboard = []

class EventDashboard extends Component {
  state = {
    events: eventsDashboard,
    isOpen: false,
    selectedEvent: null
  }

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleUpdateEvent = (updatedEvent) => {
    this.setState({
      events: this.state.events.map(event => {
        if (event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent);
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null
    })
  }

  handleOpenEvent = (eventToUpdate) => () => {
    this.setState({
      selectedEvent: eventToUpdate,
      isOpen: true
    });
  };

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false
    })
  }

  handleDeleteEvent = (eventId) => () => {
    const updatedEvents = this.state.events.filter(e => e.id !== eventId);
    this.setState({
      events: updatedEvents
    })
  }

  render() {
    const {selectedEvent} = this.state;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventList deleteEvent={this.handleDeleteEvent} onEventOpen={this.handleOpenEvent} events={this.state.events} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Button positive content='Create Event' onClick={this.handleFormOpen}/>
            {this.state.isOpen &&
            <EventForm updateEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} handleCancel={this.handleCancel}/>}
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default EventDashboard;