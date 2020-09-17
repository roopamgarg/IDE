import React from 'react';

const Output = (props) =>(
    <div className="results">
        <h4 className="results__header">Output</h4>
        <textarea 
            disabled 
            value={props.output}
            placeholder="Here is your output" 
            className="results__area"
        >

        </textarea>
    </div>
)

export default Output;