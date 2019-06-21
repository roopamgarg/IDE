import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigationbar from './components/Navbar';
import TextEditor from './components/TextEditor';
import Input from './components/Input';
import Output from './components/Output';


class App extends Component {
  state = {
    code:"//code",
    input:"",
    output:"",
    theme:"3024-night",
    selectedLanguage:{
        id: 4,
        name: "C (gcc 7.2.0)",
        mimeType:"text/x-csrc"
      }
    
  }

  executeCode = () =>{
    const {code, input, output, selectedLanguage} = this.state
    fetch("https://api.judge0.com/submissions/",{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body:JSON.stringify({
        "source_code": code,
        "language_id": selectedLanguage.id,
        "stdin": input
      })
    })
    .then((res)=>res.json())
    .then(async (res)=>{
      console.log(res)
      let flag = false
      while(!flag){
      const result = await fetch(`https://api.judge0.com/submissions/${res.token}?base64_encoded=false`)
                     .then((res)=>res.json())
     this.setState({
            output:result.status.description
      })
      if(result.stdout || result.stderr || result.compile_output){
        flag = true
        let output = null;
        if(result.compile_output){
          this.setState({
            output:result.compile_output
          })
        }
        else{
          result.stdout ? output = result.stdout : output = result.stderr
          this.setState({
            output
          })
        } 
      }
      console.log(result)
    }
    })
    console.log(code,input)
  }
  setTheme = (theme) =>{
    this.setState({
      theme
    })
  }
  setLanguage = (language) =>{
    this.setState({
      selectedLanguage:language
    })
  }
  updateCode = (newCode) => {
    this.setState({
        code: newCode,
    });
  }
  updateInput = (newInput) => {
    this.setState({
        input: newInput
    });
  }
  render(){
    const {code, input, output, selectedLanguage,theme} = this.state
  return (
    
    <div className="dark">
     
      <Navigationbar executeCode={this.executeCode} selectedLanguage={selectedLanguage} theme={theme} setTheme={this.setTheme} setLanguage={this.setLanguage}/>
      <TextEditor code={code} updateCode={this.updateCode} theme={theme} selectedLanguage={selectedLanguage}/>
      <div style={{display:"flex"}}> 
        <Input input={input} updateInput={this.updateInput}/>
        <Output output={output}/>
      </div>
    </div>
  )
  }
}

export default App;
