var React = require('react');




// ===========================================================
class Board extends React.Component {

  render() {
    
    return (
      <div>
        <h1>Jammers</h1>
        <div className="board-row">
          {0}
          {1}
          {2}
        </div>
        <div className="board-row">
          {3}
          {4}
          {5}
        </div>
        <div className="board-row">
          {6}
          {7}
          {8}
        </div>
      </div>
    );
  }
}


module.exports= (Board);