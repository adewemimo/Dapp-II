import React from 'react';
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import { ToastContainer } from 'react-toastify';
import drizzleOptions from "./drizzleOptions";
import MyComponent from "./MyComponent";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const drizzle = new Drizzle(drizzleOptions);

const App = () => {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;

          if (!initialized) {
            return "Loading..."
          }

          return (
            <MyComponent drizzle={drizzle} drizzleState={drizzleState} />
          )
        }}
      </DrizzleContext.Consumer>
      <ToastContainer />
    </DrizzleContext.Provider>
  );
}

export default App;
