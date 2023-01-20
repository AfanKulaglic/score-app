import React,{useState} from 'react';
import {Badge, Button, Container, Nav, Navbar, NavDropdown,Modal} from "react-bootstrap";
import { RxTable } from 'react-icons/rx';
import { BsNewspaper } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { RxHamburgerMenu } from 'react-icons/rx';
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'

function NavbarC() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const NavCtx = () => {
        return (
            <>
                <Nav.Item style={{width:'220px',marginLeft:'10px',overflow:'hidden'}}>
                    <Nav.Link href='/ENGLAND: Premier League'  style={{display:'flex',backgroundColor:'rgba(0,0,0,.1)'}}>
                        <div>
                            <img width='50px' height='25px' style={{marginTop:'25%'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png' />
                        </div>
                        <div>
                            <p style={{marginTop:'1.5vh',marginBottom:'2vh',marginRight:'1vh',marginLeft:'5px'}}>England</p>
                        </div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item style={{width:'5px',marginLeft:'10px',overflow:'hidden'}}>
                    <Nav.Link href={'/ITALY: Supercup'}  style={{display:'flex',backgroundColor:'rgba(0,0,0,.1)'}}>
                        <div>
                            <img width='50px' height='25px' style={{marginTop:'25%'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/120px-Flag_of_Italy.svg.png' />
                        </div>
                        <div>
                            <p style={{marginTop:'1.5vh',marginBottom:'2vh',marginRight:'1vh',marginLeft:'5px'}}>Italy</p>
                        </div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item style={{width:'100px',marginLeft:'10px',overflow:'hidden'}}>
                    <Nav.Link href='/SPAIN: La Liga'  style={{display:'flex',backgroundColor:'rgba(0,0,0,.1)'}}>
                        <div>
                            <img width='50px' height='25px' style={{marginTop:'25%'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/120px-Bandera_de_Espa%C3%B1a.svg.png' />
                        </div>
                        <div>
                            <p style={{marginTop:'1.5vh',marginBottom:'2vh',marginRight:'1vh',marginLeft:'5px'}}>Spain</p>
                        </div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item style={{width:'200px',marginLeft:'10px',overflow:'hidden'}}>
                    <Nav.Link href='/GERMANY: Bundesliga'  style={{display:'flex',backgroundColor:'rgba(0,0,0,.1)'}}>
                        <div>
                            <img width='50px' height='25px' style={{marginTop:'25%'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/120px-Flag_of_Germany.svg.png' />
                        </div>
                        <div>
                            <p style={{marginTop:'1.5vh',marginBottom:'2vh',marginRight:'1vh',marginLeft:'5px'}}>Germany</p>
                        </div>
                    </Nav.Link>
                </Nav.Item>
            </>
        )
    }

    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg" style={{marginTop:'-1vh',paddingLeft:'10%',paddingRight:'10%'}}>
                    <Navbar.Brand href="#home"><img src={logo} width='220px'   /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav justify variant="tabs" defaultActiveKey="/home" style={{marginBottom:'-0.8vh'}}>
                            <NavCtx />
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>

            <Modal show={show} onHide={handleClose} fullscreen>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NavCtx />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default NavbarC;