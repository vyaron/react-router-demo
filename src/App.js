import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import ItemDetails from './pages/ItemDetails'
import ItemEdit from './pages/ItemEdit'

const About = ({ match }) => {
  return <h1>
    About {match.params.who}
    {(match.params.andWho) ? ` and ${match.params.andWho}` : ''}
  </h1>
}
const Contact = ({ match }) => (
  <section className="contact">
    <h1>
      Contact {match.params.at}
    </h1>
    <img src={logo} alt="Logo" />


  </section>
)

const Menu = ({ match }) => (
  <section>
    <h1>
      Menu
    </h1>
    <Link to="/menu/vegie">Vegie</Link>
    <Link to="/menu/starters">Starters</Link>
    <Route path="/menu/:type" render={({match}) => {
      return <h3>{match.params.type}</h3>
    }} />
  </section>
)


const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink> |
    <NavLink activeClassName="active" to={{ pathname: '/about/you' }}>About You</NavLink> |
    <NavLink exact activeClassName="active" to={{ pathname: '/about/me' }}>About Me</NavLink> |
    <NavLink activeClassName="active" to={{ pathname: '/about/me-you' }}>About Us</NavLink> |
    <NavLink activeClassName="active" to="/contact/24-09-1976">Contact</NavLink>
    <NavLink activeClassName="active" to="/menu">Menu</NavLink>
  </nav>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Links />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/:who?-:andWho?" component={About} />
            <Route path="/contact/:at(\d{2}-\d{2}-\d{4})" component={Contact} />
            <Route path="/menu" component={Menu} />
            <Route path="/item/edit/:id?" render={({ match }) => (
              <ItemEdit itemId={match.params.id} />
            )} />
             <Route path="/item/:id" render={({ match }) => (
              <ItemDetails itemId={match.params.id} />
            )} />
            <Route render={() => <h1>Page Not Found</h1>} />
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;
