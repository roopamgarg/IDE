import React from 'react';
import languages from '../languages'
import themes from '../theme' 
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
  DropdownItem } from 'reactstrap';

export default class Navigationbar extends React.Component {
  constructor(props) {
    super(props);

   // this.toggle = this.toggle.bind(this);
    this.state = {
      // isOpen: false,
    
    };
  }

  componentDidMount = async () =>{
   const languages = await fetch("https://api.judge0.com/languages").then((res)=>res.json())
    this.setState({languages})
  }
  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
         
          {/* <NavbarToggler onClick={this.toggle} /> */}
          {/* <Collapse isOpen={this.state.isOpen} navbar> */}
            <Nav className="nav_items " navbar>
              <NavItem>
              <Button color="danger" className="run_btn" onClick={this.props.executeCode}>RUN</Button>
              </NavItem>
              
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="nav_item" nav caret>
                  {this.props.selectedLanguage.name}
                </DropdownToggle>

                <DropdownMenu >
                {
                  languages.map((language)=>{
                    return(
                      <DropdownItem key={language.id} onClick={()=>this.props.setLanguage(language)} >
                        {language.name}
                      </DropdownItem>
                    )
                  })
                }
                  
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="nav_item" nav caret>
                  {this.props.theme}
                </DropdownToggle>

                <DropdownMenu >
                {
                  themes.map((theme,index)=>{
                    return(
                      <DropdownItem key={index} onClick={()=>this.props.setTheme(theme)} >
                        {theme}
                      </DropdownItem>
                    )
                  })
                }
                  
                </DropdownMenu>
              </UncontrolledDropdown>
             
            </Nav>
            <Nav className="ml-auto pr-4">
            <NavItem style={{color:"#fff"}}>
              Made With <i class="fas fa-heart"></i> By <img width={"50px"}  src={"https://iosd.tech/img/iosd/iosd-white.png"} alt="logo"/>
              </NavItem>
            </Nav>
          {/* </Collapse> */}
        </Navbar>
      </div>
    );
  }
}