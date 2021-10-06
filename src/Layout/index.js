import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import NewDeck from "./NewDeck";
import EditDeck from "./EditDeck";
import View from "./View";
import Study from "./Study";
import NewCard from "./NewCard";
import EditCard from "./EditCard";

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Link to="/decks/new">
              <button type="button" className="btn btn-secondary  ">
                <i className="bi bi-plus-square"></i> Create Deck
              </button>
            </Link>
            <Home />
          </Route>

          <Route exact path="/decks/new">
            <NewDeck />
          </Route>

          <Route exact path="/decks/:deckId">
            <View />
          </Route>

          <Route exact path="/decks/:deckId/study">
            <Study />
          </Route>
          
          <Route exact path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          
          <Route exact path="/decks/:deckId/cards/new">
            <NewCard />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
export default Layout;
