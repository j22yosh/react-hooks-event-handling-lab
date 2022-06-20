// Code Keypad Component Here
import React from 'react';

function Keypad(){

    function log() {console.log('Entering password...') }
     return (<input type='password' onChange={log}></input>)
    
}

export default Keypad