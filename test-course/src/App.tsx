import React from 'react';
import logo from 'logo.svg';
import 'App.css';

import 'course/typescript/objects/objects';
import 'course/typescript/primitives/primitives';
import 'course/typescript/functions/functions';
import 'course/typescript/intersection/intersection';
import 'course/typescript/literal/literal';
import 'course/typescript/enums/enums';
import 'course/typescript/assertions/assertions';
import 'course/typescript/index-signature/index-signature';
import 'course/typescript/generics/generics';
import 'course/typescript/utility-types/utility-types';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

import Header from 'course/react/components/structure/Header';

import Credits from 'course/pages/Credits';
import About from 'course/pages/About';
import Course from 'course/pages/Course';

// https://reactrouter.com/en/main

// https://www.w3schools.com/react/react_router.asp
// https://www.geeksforgeeks.org/reactjs-router/

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Course />} />
        <Route path="about" element={<About />} />
        <Route path="credits" element={<Credits />} />
      </Route>
    </Routes>
  </BrowserRouter>;
}

const Layout = () => {

  return <div className="App">
    <Header>
      <img src={logo} className="App-logo" alt="logo" />
    </Header>

    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/credits">Credits</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </div >;

};

export default App;
