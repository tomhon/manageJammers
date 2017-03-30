var React = require('react');
var docdbUtils = require('../../Models/docdbUtils');
var itemManager = require('../../Models/itemManager');
var jamdb = require('../../docdbfunctions');



//Tracklist Object Prototype
function tracklist(title, artist) {
  this.title = title;
  this.artist = artist;
} 

var jammer = new Array();


jammer[0] = {
  "image": "Image of Tom",
  "name": "Tom",
  "badge": ":-)",
  "tracklist": Array ()
};

jammer[1] = {
  "image": "Image of Luis",
  "name": "Luis",
  "badge": ":-)",
  "tracklist": Array ()
}

jammer[2] = {
  "image": "Image of Simon",
  "name": "Simon",
  "badge": ":-)",
  "tracklist": Array ()
}

jammer[3] = {
  "image": "Image of Natalia",
  "name": "Natalia",
  "badge": ":-)",
  "tracklist": Array ()
}

var otracklist = new tracklist('Tubthumping', 'Chumbawamba');
jammer[0].tracklist.push(otracklist);
jammer[1].tracklist.push(otracklist);
jammer[2].tracklist.push(otracklist);
jammer[3].tracklist.push(otracklist);
var otracklist = new tracklist('Bitter Sweet Symphony', 'The Verve');
jammer[0].tracklist.push(otracklist);

console.log(jammer[0].tracklist[0]);



// function listTracks () {
//   var trackInfo = "";
//   jammer[0].tracklist.forEach(function(item) {
//       trackInfo += item.artist;
//       trackInfo += item.title;
//       trackInfo += '<br>'
//   });
//   console.log('this is trackInfo' + trackInfo)
//   return trackInfo;
  
// };


function reloadJamdb () {
        jamdb.getDatabase()
        .then(() => jamdb.getCollection())
        .then(() => jamdb.queryCollection())
        .then(() => { jamdb.exit(`Completed successfully`); })
        .catch((error) => { console.log(error);jamdb.exit(`Completed with error ${JSON.stringify(error)}`) });
};



// ===========================================================
class ListTracks extends React.Component {
  render() { 
    if (! this.props.DisplayTracks) {return (<div></div>)};

    return (
      <div>
        <div className="ListOfTracks">
          <ul>
            <table >
              <tr>
                <td>{this.props.TrackToList.artist}</td>
                <td>{this.props.TrackToList.title}</td>
              </tr>
            </table>
          </ul>
        </div>
       </div>
    );
  }
}

// ===========================================================
class ListJammer extends React.Component {

  constructor() {
    super();
    this.state = {
      tracksVisible: false
    };
  }

   handleClick() {
      console.log('handling click in JammerNavigation on ' + this.props.JammerToList.name);
      this.setState({
          tracksVisible: !this.state.tracksVisible
      })
      
      } 

  
  render() { 
    return (
      <div>
        <div className="ListJammer" onClick={() => this.handleClick()}>
          <ul>
            <table>
              <tbody>
              <tr>
                <td>{this.props.JammerToList.name}</td>
                <td>{this.props.JammerToList.image}</td>
                <td>{this.props.JammerToList.badge}</td>
              </tr>
              </tbody>
              </table>

                {this.props.JammerToList.tracklist.map(item => (
                  <ListTracks 
                      TrackToList={item}
                      DisplayTracks={this.state.tracksVisible}
                      />
                ))}

          </ul>
        </div>
       </div>
    );
  }
}

// ===========================================================
class ListDB extends React.Component {

  constructor() {
    super();
    this.state = {
      dbVisible: false
    };
  }

   handleClick() {
      console.log('handling click in ListDB  ' );
      reloadJamdb();
      this.setState({
          dbVisible: !this.state.dbVisible
      })
      
      } 

  
  render() { 
    return (
      <div>
        <div className="ListDB" onClick={() => this.handleClick()}>
          <ul>Database List
              <table>
                <tbody>
                <tr>
                  <td>Item1</td>
                  <td>Item2</td>
                  <td>Item3</td>
                </tr>
                </tbody>
                </table>
          </ul>
        </div>
       </div>
    );
  }
}




// ===========================================================
class JammerNavigation extends React.Component {
  

  
  render() {
   
    return (
      <div>
        <h1>Jammers</h1>
          <ul>
            {jammer.map(item => (
              <ListJammer 
                JammerToList={item}
                />
            ))}
          </ul>
          <ListDB/>
       </div>
    );
  }
}



module.exports= (JammerNavigation);