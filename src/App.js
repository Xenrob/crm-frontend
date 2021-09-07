import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import {PrivateRoute} from './components/private-route/PrivateRoute.comp';
import { DefaultLayout } from "./layout/DefaultLayout";
 import { Dashboard } from "./pages/dashboard/dashboard.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketList } from "./pages/ticket-list/TicketList.page";
import { Ticket } from "./pages/ticket/Ticket.page";


import { Entry } from "./pages/entry/Entry.page";


function App() {
    return ( 
      <div className = "App" >
        <Router>
          <Switch>

            <Route exact path="/">
              <Entry />
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/add-ticket">
              <AddTicket />
            </PrivateRoute>
            <PrivateRoute path="/tickets">
              <TicketList />
            </PrivateRoute>
            <PrivateRoute path="/ticket/:tId">
              <Ticket />
            </PrivateRoute>
            
          </Switch>
        </Router>
      </div>
    );
}

export default App;