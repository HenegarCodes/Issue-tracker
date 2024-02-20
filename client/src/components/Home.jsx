import './home.css'
//import Login from './Login';
// import SignUp from './SignUp';
// import Logout from './Logout';



const Home = (props) => {
    
const {loggedin, email} =props
const navigate = useNavigate();

const onButtonClick = () =>{
    //update later
}

 return(
    <div className='mainContainer'>
        

        <div className={'titleContainer'}>
            <div>        <h1>Issue Tracker!</h1></div>
        
        </div>
    </div>
)


}

export default Home;