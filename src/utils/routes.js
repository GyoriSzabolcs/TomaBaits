var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Register = './../pages/Register';

var Routes = (
  <Router>
      <Route path="/Register" component={Register} />
  </Router>
)

module.exports = Routes;
