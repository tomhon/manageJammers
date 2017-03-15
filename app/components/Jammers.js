var React = require('react');

var jammer = new Array();

jammer[0] = {
  "image": null,
  "name": "Tom",
  "badge": ":-)"
}

jammer[1] = {
  "image": null,
  "name": "Luis",
  "badge": ":-)"
}

jammer[2] = {
  "image": null,
  "name": "Simon",
  "badge": ":-)"
}

jammer[3] = {
  "image": null,
  "name": "Natalia",
  "badge": ":-)"
}



// ===========================================================
class Board extends React.Component {

  render() {
    
    return (
      <div>
        <h1>Jammers</h1>
        <div className="jammer-row">
          {jammer[0].image}
          {jammer[0].name}
          {jammer[0].badge}
        </div>
        <div className="jammer-row">
          {jammer[1].image}
          {jammer[1].name}
          {jammer[1].badge}
        </div>
        <div className="jammer-row">
          {jammer[2].image}
          {jammer[2].name}
          {jammer[2].badge}
        </div>
        <div>
        <img src="https://i1.sndcdn.com/avatars-000294022506-21vz5w-t500x500.jpg"></img>
        </div>
       </div>
    );
  }
}


module.exports= (Board);