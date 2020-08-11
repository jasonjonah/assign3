import React from 'react';
import Bigt from './Bigt';
//import logo from './logo.svg';
import './App.css';
import './css/global.css';
import './css/layout.css'
import './css/components.css'
import './css/sample-wallpaper.css'
import Wallpaper from './wallpaper'
import hulk from './img/hulk-1.jpg'
import venom from './img/venom-1.jpg'
import venom2 from './img/venom-2.jpg'
import Navbar from './Navb'


function App() {
  return (
    <div className="App">
      <Navbar />
      <br/>
      <br/>
      <br/>
      <header className='header'>
        <div className='container'>
          
          <Bigt />

          <div className='sample-wallpaper'>

            <Wallpaper pic={hulk} />
            <Wallpaper pic={venom} />
            <Wallpaper pic={venom2} />

          </div>

        </div>

      </header>



    </div>
  );
}

export default App;
