import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Route } from 'react-router-dom'
import EventForm from '../../features/event/EventForm/EventForm';
import HomePage from '../../features/home/HomePage'
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage'
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard'
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage'
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Container className="main">
          <Route path='' exact='true' component={HomePage}/>
          <Route path='/events' component={EventDashboard}/>
          <Route path='/events/:id' component={EventDetailedPage}/>
          <Route path='/people' component={PeopleDashboard}/>
          <Route path='/profile/:id' component={UserDetailedPage}/>
          <Route path='/settings' component={SettingsDashboard}/>
          <Route path='/crateEvent' component={EventForm}/>
        </Container>
      </div>
    );
  }
}

export default App;
