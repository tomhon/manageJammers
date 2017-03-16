var React = require('react');

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



function listTracks () {
  var trackInfo = "";
  jammer[0].tracklist.forEach(function(item) {
      trackInfo += item.artist;
      trackInfo += item.title;
      trackInfo += '<br>'
  });
  console.log('this is trackInfo' + trackInfo)
  return trackInfo;
  
};



// ===========================================================
class ListTracks extends React.Component {
  render() { 

    return (
      <div>
        <div className="ListOfTracks">
          <ul>
            {this.props.TrackToList.artist}{this.props.TrackToList.title}
          </ul>
        </div>
       </div>
    );
  }
}

// ===========================================================
class ListJammer extends React.Component {
  render() { 
    return (
      <div>
        <div className="ListJammer">
          <ul>
            {this.props.JammerToList.name}
            {this.props.JammerToList.tracklist.map(item => (
              <ListTracks TrackToList={item}/>
            ))}
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
              <ListJammer JammerToList={item}/>
            ))}
          </ul>
       </div>
    );
  }
}



module.exports= (JammerNavigation);