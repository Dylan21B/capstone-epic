import React, { Component } from 'react';
import './Start.css';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PlayerImg from '../images/character.jpg';
import PlayerImg2 from '../images/character2.jpg';
import PlayerImg3 from '../images/character3.jpg';



class Start extends Component {
  constructor(props) {
    super(props);
        this.state = {
          value: ""
        
        };
      }

        handleChange = (event) => {
          this.setState({value: event.target.value});
        }

        handleSubmit = (event) => {
          event.preventDefault();
          this.setToStore();
          console.log(this.state.value)
        }

        setToStore = () =>{
          // console.log(this.state.value);
          localStorage.removeItem('character');
          localStorage.setItem('character',this.state.value);
          // console.log(this.state.value);

        }

    render(){
        return(

  <div className="startContainer">
   <h1>Welcome to my first game!</h1>
   <div className="welcome">
   <h3>I love games and I am excited to have built my first game. I hope you enjoy it, and any feedback would be great!</h3>
   </div>
   <h2>Character Creation</h2>
   <Form onSubmit={this.handleSubmit}>
   <FormGroup>
        <Label for="exampleEmail">Character Name</Label>
        <Input type="text" value={this.state.value} onChange={this.handleChange} name="Character Name" placeholder="Name" />
    </FormGroup>
    <div className="chooseCharCont">
    <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              <img src={PlayerImg} alt="character choice 1" className="charChoiceImg"/>
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              <img src={PlayerImg2} alt="character choice 2" className="charChoiceImg"/>
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              <img src={PlayerImg3} alt="character choice 3" className="charChoiceImg"/>
            </Label>
          </FormGroup>
    </div>
    <div className="buttons">
    <Button><input type="submit" value="Submit" id="submit" /></Button>
<div className="right">
   <Button color="danger"><Link to='/play' id="start">Start</Link></Button>
  </div>
    <h3>Don't forget to submit!</h3>
    </div>

          {/* <Button>Submit</Button> */}
  </Form>
  </div>

)}};

export default Start;