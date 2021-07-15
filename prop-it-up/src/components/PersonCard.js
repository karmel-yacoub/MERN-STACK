import React,{Component} from "react";

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state={
            Age : this.props.Age
        };

    }
    increaseage =() => {
        this.setState({Age:this.state.Age+1});   
    } 
    render(){
        const { firstName, lastName ,hairColor} = this.props;

        return(
            <div>
                <h1>{firstName}{lastName}</h1>
                <p>Age:{this.state.Age}</p>
                <p>Hair Color:{hairColor}</p>
                <button onClick ={this.increaseage }> Birthday Button for jane Doe</button>
            </div>
        )
    }
}

export default PersonCard;