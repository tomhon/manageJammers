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





// ===========================================================
class JammerNavigation extends React.Component {

  renderTrackList(i) {
    return 
        jammer[i].tracklist.forEach(function(item){
          <div>item.track,
          item.artist </div>
        })
        // {jammer[i].tracklist[0].artist},
        // {jammer[i].tracklist[0].title},
  }
  
  
  render() {
    
    return (
      <div>
        <h1>Jammers</h1>
        <div className="jammer-row">
          {jammer[0].image}
          {jammer[0].name}
          {jammer[0].badge}
          <div className="track-list">
              {this.renderTrackList(0)}
            </div>
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
       </div>
    );
  }
}



module.exports= (JammerNavigation);