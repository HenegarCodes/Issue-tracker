

const Login = () => {
    


     return(
       <div className="login-container">
        <div>
            <h3>Please Login</h3>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <div>
            <a href="/signup">Create Account</a>
            <button>Login</button>
            </div>
        </div>
        
       </div>
    )
    
    
    }
    
    export default Login;