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

var otracklist = new tracklist('Tubthumping', 'Chumbawamba');
jammer[0].tracklist.push(otracklist);
var otracklist = new tracklist('Bitter Sweet Symphony', 'The Verve');
jammer[0].tracklist.push(otracklist);

console.log(jammer[0].tracklist[0]);

jammer[1] = {
  "image": "Image of Luis",
  "name": "Luis",
  "badge": ":-)"
}

jammer[2] = {
  "image": "Image of Simon",
  "name": "Simon",
  "badge": ":-)"
}

jammer[3] = {
  "image": "Image of Natalia",
  "name": "Natalia",
  "badge": ":-)"
}

  function Artist(props) {
    console.log(props.artist);
    return 
      <div>Tubthumping </div>
    }

  function Title(props) {
    console.log(props.title);
    return 
      <div>Chumbawumba </div>
    }

// ===========================================================
class TrackListItem extends React.Component {

  
  render() {

    return (
        <div>
        <h1>TrackListItem</h1>

        </div>
    );
  }
}


// ===========================================================
class TrackList extends React.Component {

  
  render() {
    const CurrentTrackList = jammer[this.props.CurrentJammer].tracklist;
    return (
      <div>
        <h1>TrackList for {CurrentTrackList.name}</h1>
          <TrackListItem 


          />
          <TrackListItem 


          />
        </div>
    );
  }
}


// ===========================================================
class JammerListItem extends React.Component {
  render() {   
    return (
      <div>
        <h1>JammerListItem {this.props.ListItem}</h1>
          {jammer[this.props.ListItem].image};
          {jammer[this.props.ListItem].name};
          {jammer[this.props.ListItem].badge};
          <TrackList 
            CurrentJammer={this.props.ListItem}
            />
        </div>
    );
  }
}



// ===========================================================
class JammerList extends React.Component {
  render() {
    return (
      <div>
        <h1>JammerList {this.props.jammer}</h1>
          <JammerListItem 
            ListItem={this.props.jammer}
          />
        </div>
    );
  }
}



// ===========================================================
class JammerNavigation extends React.Component {
  render() { 
    return (
      <div className='jammers'>
        <h1>Jammers</h1>
        <div className="jammer-list">
            <JammerList jammer={0} /> 
            <JammerList jammer={1} />         
          </div>
       </div>
    );
  }
}



module.exports= (JammerNavigation);