// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe(){

    function log() {console.log("Good!") }
    function log1() {console.log('Hey! Eyes on me!') }
 return (<button onFocus={log} onBlur={log1}>Eyes on me</button>)
    
}

export default EyesOnMe