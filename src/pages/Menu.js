import React from 'react';
import { Route, Link } from 'react-router-dom'


const Menu = ({ match }) => (
    <section>
        <h1>
            Menu
      </h1>
        <Link to="/menu/vegie">Vegie</Link>
        <Link to="/menu/starters">Starters</Link>
        <Route path="/menu/:type" render={({ match }) => {
            return (
                    <section className={`page ${match.params.type}`}>
                        <h3>{match.params.type}</h3>
                    </section>
            )
        }} />
    </section>
)

export default Menu;