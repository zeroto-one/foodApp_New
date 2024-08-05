import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        };
    }
    
    render(){
        return (
            <div className="user-card">
            <h2> {this.props.name} from Class</h2>
            <button onClick={()=>{
                this.setState({
                  count:  this.state.count+1,
                })
            }}>Clcik me to do++</button>
            <h2>{this.state.count}</h2>
        </div>
        )
    }
}
export default UserClass;