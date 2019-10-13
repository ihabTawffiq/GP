import React,{Component} from "react"

// const ancr = document.getElementById("btn")

class Login extends Component{
 
    state = {
      email :'',
      password: ''
    }
  handlechange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handlesubmit = (e) =>{
      e.preventDefault()
       if(this.state.email.includes("@manger")){
         
        e.preventDefault()
       console.log("true")
      //  ancr.setAttribute("href" ,"/about")
      window.location.assign('/manger')
    }else if(this.state.email.includes("@student")){
         e.preventDefault()
           console.log("false")
           window.location.assign('/student')
          }
          else{
            alert("Please Create an account !")
            window.location.assign('/signup')

          }

  }

  
    render(){
    return(
       <div className="container">
        <h4 className="center">
          <h2 className="center">Login</h2>
        </h4>
        <form onSubmit={this.handlesubmit}>
        <input onChange={this.handlechange} id="email" type="email" placeholder="Email"/>
        <input onChange={this.handlechange} id="password" type="password" placeholder="Password"/>

        <button className="waves-effect waves-light btn-large blue accent-4 center-align">Submit</button>
        {/* <a href="/" className="btn" id="btn" role="button">Submit</a> */}
        </form>
       </div>
    )
}
}
export default Login