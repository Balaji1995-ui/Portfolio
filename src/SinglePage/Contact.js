import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import {useForm} from "react-hook-form"
import logo from "../SinglePage/image.jpg";
import {Link} from "react-router-dom";
import {Row, Col,Container,Form,Button} from "reactstrap"
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@mui/material/TextField';
import "../App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
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
  Home,
  LaptopWindows,
 
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
  },
  linear:{
    width:"10%",
    paddingTop:"20px"
  },
  textfield:{
    width:"90%"
  }

}));



export default function Contact() {
  const{ registers, errors, handleSubmit}= useForm();
  const [open , setOpen]= useState();
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [sub, setSub]=useState("");
  const [message, setMessage]=useState("");
const [loadStatus, setLoadStatus]=useState("");



  const register=async()=>{
    Axios.post("http://localhost:5000/",{Name:name,Email:email,Subject:sub,Message:message}).then((res)=>{
      if(res.data.message){
        setLoadStatus(res.data.message);
        
      }
      else{
        // setLoadStatus(res.data[0].Name);
        
      }
console.log(res.data)
    })
  }
  const sendMail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_epfs4ln','template_vghfmep',e.target,'_dGkAcaFGkYX1l8JA')
    .then((result)=>{
      if(result){
        alert("Message sent Successfully");
      }
         
return window.location.reload();
      
  
      
    },(error)=>{
      console.log(error.text);
    });
  }


  const classes = useStyles();
  const toggleSlider= ()=>{
    setOpen(!open);
  };
  const sidebars=()=>(
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
              <Link to="/resume"   className={classes.link}>
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

              
            </Box>
);

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
            
{sidebars()}
          </Drawer>
        </Toolbar>

      </AppBar>

    </Box>

    <div className="container-fluid  body">
      <div className="head-select">

   
    <h2 >
    
    CONTACT ME
    </h2>
    
    </div>
    <div className={classes.linear}>
    <LinearProgress  variant="determinate" value={50} />
    </div>
    <br/>
    <br/>
    
    <Container>
    <Divider />
      <Row  className="Row1">
        <Col>
        <h3 style={{textAlign:'left' ,fontWeight:"bolder"}}>Get In Touch</h3>
       
        </Col>
       
       <Col>

       
       </Col>
      </Row>
      <Divider/>
     
      <Row xs="2" className="Row1">
        <Col>
        <Form class="form-floating"  onSubmit={sendMail}  >
          {/* <h6 style={{color:"red",fontWeight:"bold"}}>{loadStatus}</h6> */}
       {/* <TextField className={classes.textfield}
          id="outlined-multiline-flexible"
          label="Enter your name*"
          multiline
          maxRows={4}
        onChange={(e)=>{setName(e.target.value)}}


        /> */}
        <input  type="text" className="form-control  p-3" name="user_Name" placeholder="Enter Your Name*" onChange={(e)=>{setName(e.target.value)}} required>
        </input>
      
        <br/>
   
        <input  type="email" className="form-control p-3" name="user_Email" placeholder="Enter Your Email*" onChange={(e)=>{setEmail(e.target.value)}}>
        </input>
        <br/>
    
        <input  type="text" className="form-control p-3" name="user_Subject" placeholder="Subject" onChange={(e)=>{setSub(e.target.value)}}>
        </input>
         <br/>
     
        <textarea rows="4" cols="50" className="form-control p-3" name="user_Message" placeholder="Message" onChange={(e)=>{setMessage(e.target.value)}}>
        </textarea>
        <br/>
       
        <Button className="btn btn-primary" type="submit" onClick={register} >Send Message</Button>
       </Form>
        </Col>
        <Col>
        <Card sx={{ display: "flex" ,width:"100%",float:'left',textAlign:"left"}}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h4">
            Phone
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            +918610451834
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            +918344468241
          </Typography>
        </CardContent>

        <CardMedia>
          <PhoneIphoneIcon sx={{ fontSize: "110px" }} />
        </CardMedia>
      </Card>
      <br/>
      <Card sx={{ display: "flex" ,width:"100%", marginTop:"120px", textAlign:"left"}}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h4">
            Email
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
           <span>Balakarthi3448@gmail.com</span> 
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
          <span> Techicevalue@gmail.com</span> 
          </Typography>
        </CardContent>

        <CardMedia>
          <EmailIcon sx={{ fontSize: "110px", }} />
        </CardMedia>
      </Card>
        </Col>
        <Col>
       
        </Col>
      
      </Row>
      
      <Divider/>
    </Container>
    

    </div>
    
    </>

  );
}
