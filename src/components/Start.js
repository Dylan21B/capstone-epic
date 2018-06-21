import React, { Component } from 'react';
import './Start.css';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PlayerImg from '../images/character.jpg';


class Start extends Component {
   
        state = {
           character: {
                name: '',
                charImg: null,
                score: null,
                inventory: {}
           }
        };
    



    render(){
        return(

  <div className="startContainer">
   <h1>Welcome to Dylan's super cool adventure game!</h1>
   <h3>Character Creation</h3>
   <Form>
   <FormGroup>
        <Label for="exampleEmail">Character Name</Label>
        <Input type="text" name="Character Name" placeholder="Name" />
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
              <img src={PlayerImg} alt="character choice 2" className="charChoiceImg"/>
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              <img src={PlayerImg} alt="character choice 3" className="charChoiceImg"/>
            </Label>
          </FormGroup>
    </div>
          <Button>Submit</Button>
  </Form>

   <Link to='/play'>To Game</Link>
  </div>

)}};

export default Start;