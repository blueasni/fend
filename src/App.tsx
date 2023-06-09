import React, { useState } from "react";
import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FormControl, FormHelperText, Input, InputLabel, TextField, ThemeProvider } from '@mui/material';


const App = (): JSX.Element => {
  const [clickedButton, setClickedButton] = useState('');

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    setClickedButton(button.name);
  };

  return (
    <div className="container">
      <h3>Kindacode.com</h3>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>

      <form>

        <button onClick={buttonHandler} className="button" name="button 1">
          Button 1
        </button>

        <button onClick={buttonHandler} className="button" name="button 2">
          Button 2
        </button>

        <button onClick={buttonHandler} className="button" name="button 3">
          Button 3
        </button>

        <button onClick={buttonHandler} className="button" name="button 4">
          Button 4
        </button>

      </form>
      <h1>
        {clickedButton !== ""
          ? `You have clicked "${clickedButton}"`
          : "No button clicked yet"}
      </h1>
    </div>

  );

};

export default App;