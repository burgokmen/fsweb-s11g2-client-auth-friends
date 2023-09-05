import React from "react";
import { Switch, Route } from "react-router-dom";
import AddFriendsPage from "../pages/AddFriendsPage";
import FriendsListPage from "../pages/FriendsListPage";
import LoginPage from "../pages/LoginPage";

function PageBody() {
  return (
    <Switch>
      <Route path="/" exact>
        <LoginPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/friends" exact>
        <FriendsListPage />
      </Route>
      <Route path="/friends/add">
        <AddFriendsPage />
      </Route>
      <Route path="*">
        <div className="not-found" style={{ color: "red" }}>
          <h1>404 - PAGE NOT FOUND!</h1>
        </div>
      </Route>
    </Switch>
  );
}

export default PageBody;
