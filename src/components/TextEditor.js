import React,{Component} from 'react';
import CodeMirror from 'react-codemirror';
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');
require('codemirror/mode/clike/clike');
require('codemirror/mode/python/python');
require('codemirror/theme/3024-day.css');
require('codemirror/theme/3024-night.css');
require('codemirror/theme/abcdef.css');
require('codemirror/theme/ambiance-mobile.css');
require('codemirror/theme/ambiance.css');
require('codemirror/theme/base16-dark.css');
require('codemirror/theme/base16-light.css');
require('codemirror/theme/bespin.css');
require('codemirror/theme/blackboard.css');
require('codemirror/theme/cobalt.css');
require('codemirror/theme/colorforth.css');
require('codemirror/theme/darcula.css');
require('codemirror/theme/dracula.css');
require('codemirror/theme/duotone-dark.css');
require('codemirror/theme/duotone-light.css');









/*
MODES :-
JAVASCRIPT --> javascript
C --> text/x-csrc
C++ --> text/x-c++src
JAVA --> text/x-java
PYTHON --> text/x-python

*/
export default class TextEditor extends Component{
    
    state = {
        code: "// Code",
    }

    
    render = () => {
        var options = {
            lineNumbers: true,
            mode: this.props.selectedLanguage.mimeType,
            theme: this.props.theme

        };
        return <CodeMirror 
                    className="text-editor"
                    autoSave={true} 
                    value={this.props.code} 
                    onChange={this.props.updateCode} 
                    options={options} 
                />
    }
}