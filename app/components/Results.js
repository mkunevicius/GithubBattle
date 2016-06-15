var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');
var Link = require('react-router').Link;
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function StartOver() {
  return (
    <div className='col-sm-12' style={styles.space}>
      <Link to='/playerOne'>
        <button type='button' className='btn ntn-lg btn-danger'>Start Over</button>
      </Link>
    </div>
  )
}

function Tie(props) {
  return (
    <MainContainer>
      <h1>It is a tie!</h1>
      <StartOver />
    </MainContainer>
  )
}

function Results(props) {
  // While loading
  if (props.isLoading === true) {
    return <Loading text='Counting' speed={100}/>
  }
  // Check if it's a tie
  if (props.scores[0] === props.scores[1]) {
    return (
      <Tie scores={props.scores} playersInfo={props.playersInfo} />
    )
  }
  // Decide and announce the winner
  var winningIndex = props.scores[0] > props.scores[1] ? 0 :1;
  var losingIndex = winningIndex === 0 ? 1 : 0;
  return (
    <MainContainer>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Looser'>
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
