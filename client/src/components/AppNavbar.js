import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'

export default class AppNavbar extends React.Component{
    state = {
        isOpen:  false
    }

    toggle = () => {
        this.setState({isOpen:!this.state.isOpen});
    }

    render(){
        return(
            <div>
            <Navbar color="dark" dark expand="small" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Shopping List</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/bhimani07">
                                    Github
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        );
    }
}


