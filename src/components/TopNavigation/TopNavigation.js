import React, {Component, Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import '../../asset/css/custom.css'
import '../../asset/css/responsive.css'
import '../../asset/css/bootstrap.min.css'
import brandLogo from '../../asset/images/brandlogo.png'
import brandLogoW from '../../asset/images/ecodehutlogowhite.png'
import {NavLink} from "react-router-dom";

class TopNavigation extends Component {
    constructor(props) {
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarBack:"navBackground",
            navVariant:"dark",
            navItem:"navBarItemTitle",
            tabTitle: props.title,
            navLogo:brandLogoW

        }
    }
    onScroll=()=>{
        if (window.scrollY>100){
            this.setState({navBarTitle:'navTitleScroll',navBarBack:'navBackgroundScroll',navItem:'navBarItemTitleScroll',navVariant:'light',navLogo:brandLogo})
        }
        else if (window.scrollY<100){
            this.setState({navBarTitle:'navTitle',navBarBack:'navBackground',navItem:'navBarItemTitle',navVariant:'dark',navLogo:brandLogoW})
        }
    }
    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <title>{this.state.tabTitle}</title>
                <Navbar variant={this.state.navVariant} className={this.state.navBarBack}  fixed="top" collapseOnSelect expand="lg" >
                    <Navbar.Brand><NavLink className={this.state.navBarTitle} to="/"><img src={this.state.navLogo} height={40} alt=""/> Basic IT</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/courses">COURSES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/portfolio">OUR PROJECTS</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/skill">TECHNOLOGY</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/about">ABOUT</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;