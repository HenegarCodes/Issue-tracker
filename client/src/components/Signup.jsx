const SignUp = () => {
    


    return(
      <div className="signup-container">
       <div>
           <h3>Please Signup</h3>
           <input type="email" name="email" placeholder="Email" />
           <input type="password" name="password" placeholder="Password" />
           <div>
           <a href="/login">Login</a>
           <button>Signup up!</button>
           </div>
       </div>
       
      </div>
   )
   
   
   }
   
   export default SignUp;