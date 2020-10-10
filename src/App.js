import React from 'react';

import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="containera" >
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">Mukto Pathshala</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="Home">Home <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Courses">Courses</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="About us">About us</a>
                </li>
              
            </ul>
          </div>
  </nav>
      <img src="https://img-a.udemycdn.com/browse_components/billboard/ct-on-phone-big.jpg?lpgZ9uOQ4b_4qEJjYxau2Zl3JgBsB0_0J3y6Z7_4jYwc3skJApkiibMzKmTs1DRPTLV191HMYOhh13eHz_u7Wd8XIlW9G5bO1RYSDUdO4AcT-ImCn7W3McJxDM99svFL4lldPncgkHFIckXkDME" className="homeImage" alt=""/>
      <Home></Home>
      
    </div>
  );
}

export default App;
