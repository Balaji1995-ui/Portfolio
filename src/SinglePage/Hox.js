import React, { useState } from "react";
import logo from "../SinglePage/image.jpg";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {Container,Row,Col} from "reactstrap"
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LinearProgress from '@material-ui/core/LinearProgress';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import "../App.css";

import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  CssBaseline,
  Drawer,
  Typography
  
} from "@material-ui/core";
import {
  Apps,
  Menu,
  ContactMail,
  AssignmentInd,
  Home
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#37427c",
    height: "100%"
    //#511
  },
  link:{

textDecorationLine:"none",
color:'tan',
textDecoration:"none"

  },
  avatar: {
    margin: "0.5rem auto",
   
    width: theme.spacing(13),
    height: theme.spacing(13),
    borderRadius:"50px",
  },
  listItem: {
    color: "tan"
  },
  linear:{
    width:"200px",
    flexGrow: 1,
  animationDuration: '550ms',
    
   
 
  }
}));


export default function Hox() {
  const [open , setOpen]= useState();
  const classes = useStyles();
  const toggleSlider= ()=>{
    setOpen(!open);
  };


  return (
    <>
    <CssBaseline/>
    <Box component="nav">
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleSlider}>
            <Menu/>
          </IconButton>
          <Typography style={{fontWeight:"bold",fontSize:"25px",fontFamily: 'cursive'}}>Hire Me..!! 😎  </Typography>
          <Drawer open={open} anchor="right" onClose={toggleSlider}>
            <Box className={classes.menuSliderContainer} component="div">
              <Avatar className={classes.avatar} src={logo} alt="balaji">
                

              </Avatar>
              <Divider/>
              <List>
                <Link to="/"  className={classes.link}></Link>
                <ListItem button>
                <ListItemIcon className={classes.link}>
                  <Home/>

                </ListItemIcon>
                <ListItemText primary={"Home"} className={classes.link}>
                </ListItemText>
                </ListItem>
              </List>
              <List>
                <Link to="/resume" className={classes.link}></Link>
                <ListItem button>
                <ListItemIcon className={classes.link}>
                 <AssignmentInd/>

                </ListItemIcon>
                <ListItemText primary={"Resume"} className={classes.link}>
                </ListItemText>
                </ListItem>
              </List>
              <Link to="/portfolio"   className={classes.link}>
        <ListItem button>
<ListItemIcon className={classes.link}>
    <Apps/>
</ListItemIcon>
<ListItemText primary={"Portfolio"}/>
        </ListItem>
        </Link>
        <Link to="/contact" className={classes.link}>
        <ListItem button>
<ListItemIcon className={classes.link}>
    <ContactMail/>
</ListItemIcon>
<ListItemText primary={"Contacts"}/>
        </ListItem>
        </Link>

              
            </Box>

          </Drawer>
        </Toolbar>

      </AppBar>

    </Box>
    <div className="container-fluid  body">
      <div className="head-select">

   
    <h2 >
    
    MY SKILLS
    </h2>
    </div>
    <div className={classes.linear}>
    <LinearProgress  variant="determinate" value={50} />
    </div>
    <br/>
    <Container>
    <Divider />
      <Row xs="4" className="Row1">
        <Col>
        <h6>HTML </h6><span>95%</span>
        </Col>
        <Col>
        <LinearProgress variant="determinate" style={{padding:"6px"}}  value={95}/>
        </Col>
        <Col>
        <h6>CSS3 </h6><span>90%</span>
        </Col>
        <Col>
        <LinearProgress variant="buffer" style={{padding:"6px"}}  value={90}/>
        </Col>
      </Row>
      <Divider/>
     
      <Row xs="4" className="Row1">
        <Col>
        <h6>Javascript</h6><span>70%</span>
        </Col>
        <Col>
        <LinearProgress variant="buffer" style={{padding:"6px"}}  value={70}/>
        </Col>
        <Col>
        <h6>ReactJS</h6><span>80%</span>
        </Col>
        <Col>
        <LinearProgress variant="buffer"  style={{padding:"6px"}}  value={80}/>
        </Col>
      </Row>
      <Row xs="4" className="Row1">
        <Col>
        <h6>Figma</h6><span>40%</span>
        </Col>
        <Col>
        <LinearProgress variant="determinate" style={{padding:"6px"}} value={40}/>
        </Col>
        <Col>
        <h6>Networking</h6><span>80%</span>
        </Col>
        <Col>
        <LinearProgress variant="determinate" style={{padding:"6px"}}  value={80}/>
        </Col>
        
      </Row>
      <Row xs="4" className="Row1">
        <Col>
        <h6>Crystal & SSRS Reports</h6><span>70%</span>
        </Col>
        <Col>
        <LinearProgress  variant="determinate"  style={{padding:"6px"}}  value={70} />

        </Col>
     
        
      </Row>
      <Divider/>
    </Container>
    <div className="head-select">

   
<h2 >

Resume
</h2>
</div>
<div className={classes.linear}>
    <LinearProgress  variant="determinate" value={50} />
    </div>
    <br/>
    <div className="head-select2">
      <span></span>
      <h5> <span><BusinessCenterIcon sx={{fontSize:"26px"}}/></span> Working Experience</h5>
    </div>
    <div className="summary">
      <Container>
        <Row xs="2" style={{paddingTop:"40px"}}>
          
          <Col className="year">
         
      <h6 >2020-2022</h6> 
     
      </Col>
      <Col className="work">
      <h5>Software Support Engineer</h5>
      <h6>Magickwoods Export Pvt Ltd - Chennai</h6>
      <p>
      TFG tools using deploying exe for all client PC’s
	Responsible to resolving trouble-tickets raised by clients through phone, email or remote access.
	Interacting with clients, understanding their needs & providing technical support to clients by remotely accessing their networks & troubleshooting the issues raised.
	Provide Tier 2 and Tier 1 Level support.
	MSSQL Server backup and restore.
  Tested troubleshooting methods, devised innovative solutions and documented resolutions for inclusion in knowledge base for support team use
  Performed application configuration and setup across multiple areas of the ERP system and other related application
	Build/configured, test and performed implementation of hardware, peripheral equipment and related software.

      </p>
      </Col>
    
      </Row>
      <Divider/>
      <Row xs="2" style={{paddingTop:"40px"}}>
          <Col className="year">
      <h6 >2018-2019</h6>
      </Col>
      <Col className="work">
      <h5>Hardware and Network Engineer</h5>
      <h6>OXUS Technologies - Chennai</h6>
      <p>
      	Install Hardware and Software Configurations, Troubleshoot, Assembling Peripherals. 
	AD and Group policy apply for all client system
CA ARC Backup server configuration
	Cisco Switches (6500, 5000, 3500, 2900).
Verify that peripherals are working properly 
Quickly arrange repair for hardware in occasion of hardware failure 	Implemented DHCP, DNS, FTP, TFTP, and NPA.
	Punch Blocks, Tone Tracers, Repeaters, Modems, Professional Modular Plug Crimper.
	Printers and Telephone services
	Maintaining  Linux and  Centos  servers	
	Mail outlook configuration and firewalls add rules 
	Handling   Web Server  on  lamp and wamp server
	Create a backup and recovery policy

      </p>
      </Col>
    
      </Row>
      <Divider/>
      <Row xs="2" style={{paddingTop:"40px"}}>
          <Col className="year">
      <h6 >2017-2018</h6>
      </Col>
      <Col className="work">
      <h5>IT Support Engineer</h5>
      <h6>NSE IT LTD - Chennai</h6>
      <p>
      Configured and installed routers switches and wireless controllers.	
      Troubleshooting connectivity related issues between Exam Server and Exam Machines.
	Providing Technical related support in both Networking and Server Environment
	Auditing Weekly as well as Monthly Reports, Regular Preventive Maintenance
Configure Pix to Pix, and Router to Router VPN
Redistribution of routing protocols and Frame-Relay configuration
	Create virtual Machines in our server using for storage  
Handing for tightVNC viewer and using RDP


      </p>
      </Col>
    
      </Row>
      </Container>

    </div>
    <div className="head-select2">

   
<h5 >

<span><LocalLibraryIcon sx={{fontSize:"30px"}}/></span>{' '}Educational Qualifications
</h5>
</div>
<br/>
<Container>
        <Row xs="2" style={{paddingTop:"40px"}}>
          <Col className="year">
      <h6 >2012-2016</h6>
      </Col>
      <Col className="work">
      <h5>Bachelor of Degree</h5>
      <h6>RVS Technical Campus- Coimbatore</h6>
      <p>
      I have completed BE-Electrionics communication Engineering at RVS Technical campus-Coimbatore and My CGPA is 6.7% 
      </p>
      </Col>
    
      </Row>
      <Divider/>
      <Row xs="2" style={{paddingTop:"40px"}}>
          <Col className="year">
      <h6 >2010-2012</h6>
      </Col>
      <Col className="work">
      <h5>Higher School Graduation</h5>
      <h6>Kamarajar Higher Secondary School - Namakkal</h6>
      <p>
      I have completed 12th (Computer Science)at Kamarajar Higher Secondary School - Namakkal and My CGPA is 79% 
</p>
      </Col>
    
      </Row>
      <Divider/>
      
      </Container>

    </div>
    
    </>

  );
}
