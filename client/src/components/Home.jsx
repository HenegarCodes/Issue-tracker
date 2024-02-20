import './home.css'
import Login from './Login';
import SignUp from './Signup'
// import Logout from './Logout';



const Home = (props) => {
    


const onButtonClick = () =>{
    //update later
}

 return(
    <div className='mainContainer'>
        

        <div className={'titleContainer'}>
            <div>        <h1>Issue Tracker!</h1></div>

            <div>
                <Login />
                <SignUp />
            </div>
        
        </div>
    </div>
)


}

export default Home;