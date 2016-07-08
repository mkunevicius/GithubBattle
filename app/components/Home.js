var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');

var Home = React.createClass({
  render: function() {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className='lead'>This is an application for comparing two Github users. Just enter two Github usernames and go to the battle!</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </MainContainer>
    )
  }
});

module.exports = Home;
