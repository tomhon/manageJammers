var React = require('react');

//Connect to SQL Server
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES; 
var Connection = require('tedious').Connection;

console.log('requires completed');

//initialize mapping data array

//arrayIsvTE is sourced from SQL Server
var arrayIsvTE = new Array();

function isv() {
    this.id = 0;
    this.title = "";
    this.TE = "";
    this.BE = "";
}


//error logging array
var arrayErr = new Array();

// set up SQL server connection using Application Environment Variables

    var config = {
            userName: process.env.SQLuserName || 'Teslovetohack@k9',
            password: process.env.SQLpassword || 'Building9',
            server: process.env.SQLserver || 'k9.database.windows.net',
            // If you are on Microsoft Azure, you need this:
            options: {encrypt: true, database: process.env.SQLdatabase || 'TEDGISV'}
        };

// var config = {
//     userName: process.env.SQLuserName,
//     password: process.env.SQLpassword,
//     server: process.env.SQLserver,
//     // If you are on Microsoft Azure, you need this:
//     options: {encrypt: true, database: process.env.SQLdatabase}
// };

//initiate connection to SQL Server
var connection = new Connection(config);
connection.on('connect', function(err) {
    // If no error, then good to proceed.
    
        if (err) {
        //    console.log(err);
            arrayErr.push(err);
        } else {
          console.log("Connected to " + this.config.server + " " + this.config.options.database);
          arrayErr.push("Connected to " + this.config.server);
          loadMappingArray();  

        };
        
        
    });
 
 //function to execute SQL query    
    
 function loadMappingArray() {
      
        request = new Request("SELECT VsoId, Title, AssignedTE, AssignedBE FROM dbo.PartnerIsvs", function(err) {
         if (err) {
            console.log(err);
            arrayErr.push(err);
          }
        else {
            console.log('SQL request succeeded');
            arrayErr.push("SQL request succeeded");
          }
        });

    //unpack data from SQL query
        request.on('row', function(columns) {
            var oIsv = new isv();
            columns.forEach(function(column) {
              if (column.value === null) {
                arrayIsvTE.push('');
              } else {
                    switch(column.metadata.colName) {
                        case "AssignedTE": 
                            oIsv.TE = column.value;
                            break;
                        case "AssignedBE":
                            oIsv.BE = column.value;
                            break;
                        case "Title":
                            oIsv.title = column.value;
                            break;
                        case "VsoId":
                            oIsv.id = column.value;
                            break;  
                        }  

                    }

            });
            arrayIsvTE.push(oIsv);
            console.log(oIsv);
        }); 

        connection.execSql(request);
    };




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
      console.log(arrayErr[0]);
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
              <tr>
                <td colspan="2">{this.props.JammerToList.name}</td>
                <td>{this.props.JammerToList.image}</td>
                <td>{this.props.JammerToList.badge}</td>
              </tr>
              </table>
            <table>
                {this.props.JammerToList.tracklist.map(item => (
                  <ListTracks 
                      TrackToList={item}
                      DisplayTracks={this.state.tracksVisible}
                      />
                ))}
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
       </div>
    );
  }
}



module.exports= (JammerNavigation);