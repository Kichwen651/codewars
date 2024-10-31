let React = require('react');

// Let us know who your three favorite codewarriors are!
var myHeader = <h1>My three favorite codewarriors are noLan, jhoffner, and OverZealous</h1>;

var CodewarsLink = React.createClass({
  render: function() {
    // Return a link to the user's profile
    return (
      <a href={`http://www.codewars.com/users/${this.props.user}`}>
        {this.props.user}
      </a>
    );
  }
});

var Leaderboard = React.createClass({
  render: function() {
    // Map over the leaderboard array to create links
    const leaderLinks = this.props.leaders.map((user, index) => 
      <CodewarsLink key={index} user={user} />
    );

    // Return an abridged version of the leaderboard
    return (
      <div>
        {leaderLinks}
      </div>
    );
  }
});

// Example usage
var leaders = ['Sch3lp', 'nplus', 'jhoffner', 'noLan', 'OverZealous']; // Add more users as needed
var leaderboardElement = <Leaderboard leaders={leaders} />;
