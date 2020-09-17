import React from 'react';

const Input = (props) =>(
    <div className="results">
        <h4 className="results__header">Input</h4>
        <textarea 
        placeholder="Type Your Input Here" 
        value={props.input}
        onChange={(e)=>props.updateInput(e.target.value)} 
        className="results__area"></textarea>
    </div>
)

export default Input;