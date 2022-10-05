import React, { useState } from "react";
import logo from "../SinglePage/image.jpg";
import {Link} from "react-router-dom";
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


  },
  avatar: {
    margin: "0.5rem auto",
   
    width: theme.spacing(13),
    height: theme.spacing(13),
    borderRadius:"50px",
  },
  listItem: {
    color: "tan"
  }
}));


export default function Homes() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };


  return (
    <div>

        
      <CssBaseline />

      <Box component="nav">
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={toggleSlider}>
              <Menu />
            </IconButton>
            <Typography style={{fontWeight:"bold",fontSize:"25px",fontFamily: 'cursive'}}>Hire Me..!! 😎  </Typography>
            <Drawer open={open} anchor="right" onClose={toggleSlider}>
            <Box className={classes.menuSliderContainer} component="div">
      <Avatar 
        className={classes.avatar}
        src={logo}
        alt="balaji"
      />
      <Divider />
      <List>
        <Link to="/" className={classes.link}>
        <ListItem button>
<ListItemIcon className={classes.link}>
    <Home/>
</ListItemIcon>
<ListItemText primary={"Home"}/>
        </ListItem>
        </Link>

        <Link to="/resume"  className={classes.link}>
        <ListItem button>
<ListItemIcon className={classes.link}>
    <AssignmentInd/>
</ListItemIcon>
<ListItemText primary={"Resume"}/>
        </ListItem>
        </Link>
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

      
      </List>
    </Box>
   
            </Drawer>
          
          </Toolbar>
        </AppBar>
      </Box>
    <article className="wrapper">
        <h6 className="title">Hi, I am <span style={{color: '#037fff'}}>Balaji Thiyagarajan</span><br/>
        <span className="title1">I can provide clean code and pixel perfect design. I also make website more <br/> & more interactive with web animations.</span></h6>
   
  
       
    </article>
    <br/>
  
    </div>
  );
}
