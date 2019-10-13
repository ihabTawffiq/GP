import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
export class AddUserForm extends Component {
    state = {
        step : 1 ,
        first_name: "",
        last_name: "",
        gender: "",
        birthdate: "",
        identity: "",
        specialty: "",
        canteach: [
            "1",
            "2",
            "3"
        ],
        address: "",
        phonenumber: "",
    }
    nextStep =()=> {
        const step = this.state.step;
        this.setState({
            step : step+1
        });
    };

    prevtStep =()=> {
        const step = this.state.step;
        this.setState({
            step : step-1
        });
    };

    handlechange = input => e => {
        this.setState({
            [input] : e.target.value
        })
    }
    render() {
        const step = this.state.step;
        const {first_name,
        last_name,
        gender,
        birthdate,
        identity,
        specialty,
        canteach,
        address,
        phonenumber} = this.state;
        const values = { first_name,
            last_name,
            gender,
            birthdate,
            identity,
            specialty,
            canteach,
            address,
            phonenumber };
            switch (step){
                case 1: return(
                    <FormUserDetails 
                    nextStep = {this.nextStep}
                    handlechange = {this.handlechange}
                    values = {values} />
                    )
                case 2 : return <h1>User Information is </h1>
                case 3 : return <h1>Confirm</h1>
                case 4 : return <h1>Success</h1>
            }
     
    }
}

export default AddUserForm
