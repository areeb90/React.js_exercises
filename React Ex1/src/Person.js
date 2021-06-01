import React , {Component} from "react";


class Person extends Component{
    constructor(){
        super();
        this.state = {
            age : 20
        }
    }
    render(){

        // cudstom inline CSS
        const styleObj = {
            color: "red",
            fontFamily: "Lucida Console"

        }


        // here we are getting our props from the App.js through de-structuring 
        // getting props in class based compponents
        const {name} = this.props
        const {age} = this.state
        return( 
            <div>
                <p style={styleObj}>Hi there,{name}</p>
                <p>My age is {age }</p>

            </div>
        )
    }
}

export default Person;