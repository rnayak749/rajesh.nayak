import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:'',
            password:'',
            errors:{},
            isLoggedin:false
        }
    }

    passValid(){
        let errors = {};
        let formIsValid = true;
        let password = this.state.password;

        if(!password){
           formIsValid = false;
           errors["password"] = "Cannot be empty";
        }

        if(!password.match(/[a-z]/)){
            formIsValid = false;
            errors["password"] = "Password should contain at least small latter";
        }
        if(!password.match(/[A-Z]/)){
            console.log("Madhe gela1");
            formIsValid = false;
            errors["password"] = "Password should contain at least one caps letter";
        }
        if(!password.match(/[0-9]/)){
            formIsValid = false;
            errors["password"] = "Password should contain at least one number";
        }
        if(!password.match(/[!@#$%*()~|"'?&._-]/)){
            formIsValid = false;
            errors["password"] = "Password should contain at least one special char";
        }        
       this.setState({errors: errors});
       return formIsValid;
   }

   onFormSubmit(event){
        event.preventDefault();
        if(this.passValid()) {
            this.setState({isLoggedin:true});
            this.props.history.push('/users');
        }
        else {
            this.setState({isLoggedin:false});
        }
    }    

    render() {
    return (      
            <div className="row">
                <div className="col-sm-8 col-sm-offset-1 col-lg-offset-4">
                    <form onSubmit= {this.onFormSubmit.bind(this)}>
                        <table>
                            <tbody>
                            <tr>
                                <td><label>Username</label></td>
                                <td>
                                    <input className="form-control" id="username" 
                                    onChange={ (event) => this.setState({username : event.target.value}) } 
                                    value={this.state.username}
                                /></td>
                            </tr>
                            <tr>
                                <td><label>Password</label></td>
                                <td><input type="password" className="form-control" id="user-password" 
                                onChange = { (event) => this.setState({password : event.target.value}) }
                                />
                                </td>
                                <td style={{color: "red"}}>{this.state.errors["password"]}</td>
                            </tr>
                            <tr>
                                <td className="text-center" colSpan="2"><button className="btn btn-default" to="/users" >Submit</button></td>
                            </tr>
                            </tbody>
                        </table>			  
                </form>
                    </div>     
           
        </div>
    );
  }
}

export default withRouter(LoginForm)