import React, { useState } from "react";
import logo from "../SinglePage/image.jpg";
import {Link} from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import {Row, Container, Col} from "reactstrap"
import logo1 from "../SinglePage/mypic.jpg"
import "../App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import BrushIcon from '@mui/icons-material/Brush';
import SupportIcon from '@mui/icons-material/Support';
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
  Typography,

  
} from "@material-ui/core";
import {
  Apps,
  Menu,
  ContactMail,
  AssignmentInd,
  Home,
  Facebook,
  Twitter,
  GitHub
} from "@material-ui/icons";
import Down from "./download";
import Silder from "./silder";




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
    width:"16%",
    marginTop:"30px",
    marginLeft:"75px"
  },
  linear1:{
    width:"16%",
    marginTop:"30px",
    marginLeft:"55px"
  },
img:{
    width:"100%",height:"100%", border:"25px", borderRadius:"25px", boxShadow:"inherit",
    borderColor:"#037fff"
}
,
font:{
fontSize:'25px',
fontWeight:'bolder'
},
ange:{
width:"120px",height:"120px",justifyContent:"Space-between"

}

}));


export default function Portfolio() {
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
                <Link to="/resume"className={classes.link}></Link>
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
      <div className="head-select" >

   
    <h2  style={{marginTop:"70px" , fontFamily:"sans-serif", linespace:"2px", marginLeft:"55px"}}>
    
   About Me
    </h2>
    
    </div>
    <div className={classes.linear}>
    <LinearProgress  variant="determinate" value={50} />
    </div>
   <Container>
    <Row className="Row1">
        <Col md="6">
   <img src={logo1} className={classes.img}alt="balaji"/>

        </Col>
        <Col  md="6">
   <h3 style={{textAlign:"left"}}>I am <span style={{ color: '#037fff',fontWeight:"bolder", textAlign:'right'}}>Balaji Thiyagarajan</span></h3>
   <h5 style={{textAlign:"left",color: '#a4acca'}}>I am a frontend web developer.<br/> I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</h5>
<ul>
  <li><b>Full Name</b>Balaji Thiyagarajan</li>
  <li><b>Age</b>27 Years</li>
  <li><b>Nationality</b>Indian</li>
  <li><b>Languages</b>Tamil, English</li>
  <li><b>Freelance</b>Available</li>
</ul>
<br/>
<br/>


<div className="button1">

<Down/>


</div>    
<div className="icon">
<a href="https://www.linkedin.com/in/balaji-t-689952133">
<BsLinkedin size="35px" />
</a> {'  '}
<a href="https://www.facebook.com/profile.php?id=100004874345316">
  
<BsFacebook size="35px"/>
</a>{'  '}
<a href="https://github.com/Balaji1995-ui">
<BsGithub size="35px"/>
</a>
</div>

   </Col>
     
    </Row>
    <div className="container-fluid  body">
      <div className="head-select" >

   
    <h2  style={{marginTop:"45px" , fontFamily:"sans-serif", linespace:"2px", marginLeft:"55px"}}>
    
    SERVICES
    </h2>
    
    </div>
    <br/>
    <div className={classes.linear1}>
    <LinearProgress  variant="determinate" value={50} />
    </div>
    <br/>
<Container>
      <Row >
        <Col md="4">
        <Card sx={{ display: "flex" ,width:"100%",float:'left',textAlign:"left"}}>
      
        <CardContent sx={{ flex: "1 0 auto" }}>
        <CardMedia>
          <BrushIcon sx={{ fontSize: "110px"  ,marginLeft:"120px" }} />
        </CardMedia>
          <Typography component="div" variant="h4" style={{textAlign:"center"}}>
           Web Design
          </Typography>
          <br/>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
         I value simple content structure,<br/> clean design patterns, and thoughtful interactions.
          </Typography>
          <br/>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
        <h5 style={{color:"#037fff", fontWeight:"500"}}> Things I enjoy designing:</h5>
    
         UX, UI, Web, Apps, Logos
         <br/>
        <h5 style={{color:"#037fff", fontWeight:"500"}}> Design Tools:</h5>
     
         Figma
         <br/>
Font Awesome
<br/>
Pen & Paper
<br/>
Sketch
<br/>
Webflow
<br/>
<br/>

          </Typography>
        </CardContent>

       
      </Card>
        </Col>
        <Col md="4">
        <Card sx={{ display: "flex" ,width:"100%",float:'left',textAlign:"left"}}>
        <CardContent sx={{ flex: "1 0 auto" }}>
        <CardMedia>
          <DeveloperModeIcon sx={{ fontSize: "110px" ,marginLeft:"120px"  }} />
        </CardMedia>
        
          <Typography component="div" variant="h4">
          Frontend Developer
          </Typography>
          <br/>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
         I like to code things from scratch, <br/>and enjoy bringing ideas to life in the browser.
          </Typography>
          <br/>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
        <h5 style={{color:"#037fff", fontWeight:"500"}}>  Languages I speak:</h5>
HTML, Pug, Slim, CSS, Sass, Git
<br/>
Dev Tools:
<br/>
Bootstrap
<br/>
HTML5
<br/>
CSS5
<br/>
React JS
<br/>
Material UI
<br/>
GIT
<br/>
          </Typography>
        </CardContent>

       
      </Card>
        </Col>
        <Col md="4">
        <Card sx={{ display: "flex" ,width:"100%",float:'left',textAlign:"left"}}>
        <CardContent sx={{ flex: "1 0 auto" }}>
        <CardMedia>
          <SupportIcon sx={{ fontSize: "110px",marginLeft:"120px" }} />
        </CardMedia>
   
          <Typography component="div" variant="h4">
          Hardware & Network<br/> Support
          </Typography>
          <br/>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
      Desktop and Laptop Services,<br/> Firewall & Server configuration, 
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
           
          </Typography>
        </CardContent>

    
      </Card>
        </Col>
      </Row>
      </Container>
      
    </div>
    <div className="container-fluid  body">
      <div className="head-select" >

   
    <h2  style={{marginTop:"45px" , fontFamily:"sans-serif",color:"#fff", linespace:"2px", textAlign:"center",padding:"20px", background:"#037fff", borderRadius:"34px 0px 20px 10px"}}>
    
  Portfolio
    </h2>
    
    </div>
    <br/>
 
    </div>
    <Row>
<h3 style={{textAlign:"center",fontWeight:"bolder" ,fontFamily:"cursive"}}>Few Projects</h3>

      {/* <Col md="12" style={{marginTop:"55px"}}> */}
<Silder/>
      {/* </Col> */}
   
    </Row>

   </Container>
    </div>
    </>

  );
}
