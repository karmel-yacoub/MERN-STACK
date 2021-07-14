import React,{Component} from "react";

class PersonCard extends Component{
    render(){
        const { firstName, lastName , Age ,hairColor } = this.props;
        return(
            <div>
                <h1>{this.props.firstName}{this.props.lastName}</h1>
                <p>Age:{this.props.Age}</p>
                <p>Hair Color:{this.props.hairColor}</p>
            </div>
        )
    }
}

export default PersonCard;