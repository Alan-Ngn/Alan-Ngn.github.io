// import logo from './logo.svg';
import './App.css';
import React from "react";
import Navigation from './components/Navigation';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='Background'>

        <div style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/landscape.jpg'})`,
          // backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh'
          // height: 600
        // height:600,width:600
          // width:'250px'

        }}
        className='Test'>

        <Navigation></Navigation>
        </div>
    </div>
  );
}

export default App;
