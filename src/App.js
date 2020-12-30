import React from 'react';
import Haku from "./haku";
import Tulos from "./tulos";

const styles = {
  div1: {
    textAlign: 'center',
    border: '2px solid black',
    width: '1000px',
    padding: '10px',
    margin: 'auto' 
  }
}

function App() {
  return (
    <div style={styles.div1}>
      <h1>Chuck Norris -vitsit</h1>
      <Haku />
      <p></p>
      <Tulos />
    </div>
  );
}

export default App;
