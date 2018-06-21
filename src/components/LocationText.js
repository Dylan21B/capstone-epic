import React, { Component } from 'react';

class LocationText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }
    componentWillMount(){
        this.getLocationText();
      
      }


getLocationText = () =>{
    rebase.fetch('locations', {
        context: this,
        asArray: true,
        queries: {
            orderByChild: "text", 
            equalTo: this.state.text
        },then(data){
            data.forEach((element, i) => {
              var sitText = element.text
              // console.log(splitter[0], splitter[1])
          if((Number(splitter[0]) === this.state[quadSplit[0]]) && (Number(splitter[1]) === this.state[quadSplit[1]])){
               this.setState({
                   text: sitText,
                  })
          }
            });
          }
        });
  }
}
