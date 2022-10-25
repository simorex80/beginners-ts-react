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

import { functionHello } from 'course/react/tsx/hello';
import Hello from 'course/react/components/Hello';
import HelloEx from 'course/react/components/HelloEx';
import Header from 'course/react/components/Header';
import State from 'course/react/components/hooks/State';
import Effect from 'course/react/components/hooks/Effect';
import Ref from 'course/react/components/hooks/Ref';
import Context from 'course/react/components/hooks/Context';
import Event from 'course/react/components/events/Event';
import CustomHook from 'course/react/components/events/CustomHook';
import Controlled from 'course/react/components/input/Controlled';
import Uncontrolled from 'course/react/components/input/Uncontrolled';
import ForwardRef from 'course/react/components/ref/ForwardRef';

function App() {

  const enabledFunction: boolean = true;

  return (
    <div className="App">
      <Header>
        <img src={logo} className="App-logo" alt="logo" />
      </Header>
      <div>
        <h1>TSX functions</h1>
        {enabledFunction && functionHello("Simone")}
      </div>
      <div>
        <h1>REACT components</h1>
        <Hello user={"Simone"} />
        <HelloEx enabled />
      </div>
      <div>
        <h1>REACT hooks</h1>
        <h2>State</h2>
        <State />
        <h2>Effect</h2>
        <Effect />
        <h2>Ref</h2>
        <Ref />
        <h2>Context</h2>
        <Context />
      </div>
      <div>
        <h1>REACT Events</h1>
        <h2>Event</h2>
        <Event />
        <h2>Custom hook</h2>
        <CustomHook />
      </div>
      <div>
        <h1>Input</h1>
        <h2>Controlled</h2>
        <Controlled />
        <h2>Uncontrolled</h2>
        <Uncontrolled />
      </div>
      <div>
        <h1>Ref</h1>
        <h2>ForwardRef</h2>
        <ForwardRef />
      </div>
      <br />
    </div>
  );
}

export default App;
