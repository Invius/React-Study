import React, { Component } from 'react';
import './App.css';


let selectedStyle = {
  color: '#fff',
};

let fakeServerData = {
  user: 
    {
      name:'Marco',
      playlists: [
        {
          name: 'My Favorites',
          songs: [{name: 'Death Montain', duration: 360},{name: 'Eat You Alive', duration: 360}, {name: 'Casparroni', duration: 360}]},
        {
          name: 'Dark',
          songs: [{name: 'Black', duration: 360},{name: 'Even Blacker', duration: 160}, {name: 'Darkish', duration: 360}]},
        {
          name: 'Light',
          songs: [{name: 'Moon', duration: 360},{name: 'Sun', duration: 260}, {name: 'Sunrise', duration: 360}]
        },
        {
          name: 'Random',
          songs: [{name: 'Monkey', duration: 360},{name: 'Got Bananas', duration: 60}, {name: 'On The Tree', duration: 360}]
        }
      ]
    }
};

class PlaylistCount extends Component
{
  render()
  {
    return(
      <div style={{...selectedStyle, with: "100%", display: 'inline-block'}}>
        <h2>
          {this.props.playlists.length} Playlists   
        </h2>
      </div>
    );
  }
}

class HoursCount extends Component
{
  render()
  {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist)=> 
                                                {
                                                  return songs.concat(eachPlaylist.songs)
                                                },[])

    let totalDuration  = allSongs.reduce((sum, eachSong)=>
                                                {
                                                  return  sum + eachSong.duration
                                                },0)

    return(
      <div style={{...selectedStyle, with: "100%", display: 'inline-block'}}>
      <h2>
        {Math.round(totalDuration/60)} hours  
      </h2>
    </div>
    );

  }
}

class Filter extends Component
{
  render()
  {
    return(
      <div style={{...selectedStyle}}>
        {/*<img/>*/}
          <input type="text"/>
      </div>
    );
  }
}


class Playlist extends Component
{
  render()
  {
    return(
    <div style={{...selectedStyle,display: 'inline-block', width: "25%"}}>
      {/*<img/>*/}
      <h3>
        Playlist Name
      </h3>
      <ul>
        <li>
          Song 1
        </li>
        <li>
          Song 2
        </li>
        <li>
          Song 3
        </li>
      </ul>
    </div>);
  }
}

class App extends Component 
{
  constructor()
  {
    super();
    this.state = {serverData:{}}
  }

  render() 
  { 
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1 style={{...selectedStyle, 'font-size': '54px'}}>
              { this.state.serverData.user.name} Playlist
            </h1>

            <PlaylistCount playlists = {this.state.serverData.user.playlists}/>
            <HoursCount playlists = {this.state.serverData.user.playlists}/>

            <Filter/>

            <Playlist/>
            <Playlist/>
            <Playlist/>
            <Playlist/>
          </div>: 
          <h1 style={selectedStyle}>
            Loading Assets...
          </h1>
        }
      </div>
    );
  }

  componentDidMount()
  {
    setTimeout(
    ()=>
    {
      this.setState({serverData: fakeServerData})
    },3000);
  }
}

export default App;

{/* ---Conditions---

let TestVariable = 'Initialize'

Test &&       // the && informs that the variable before it is being tested 
<h1>Test</h1> // If the variable is indeed true or initialized it will show the header executed in this line

-----------------------------------------------------------------
let TestVariable = 'Initialize'

Test ?      
<h1>Test</h1>:
<h1>Variable does not exists</h1>


---Funtional programing---

funtion(){}   // it will call the function but its not tied to the class it self
()=>{}        // it will the funtion that it is tied to the class that it is defined

---Sections---
<div> </div>
Exemple:
{variable A &&
  <div> 
     <h1> 
      A.B
     </h1>

     <h2> 
      A.C
     </h2>
  </div>
}               //<div> helps incapsulate like in this exemple, otherwise we could only run just one tag

---Tags---

 <ClassComponent/>      //The class component can recieve Variables input
 <ClassComponent IntA/> //They are stored within class props
 
  class ClassComponent extends Component
  {
    var A = This.Props.IntA
  }                     //They can be called like this within the class

*/}