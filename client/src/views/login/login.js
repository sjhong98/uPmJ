import kakaoLogin from '../../assets/images/kakaoLogin.png';
import '@styles/login/login.css';

function Login() 
{
    const Rest_api_key='c105c81a4b71d2b2b6eb5313272815ef' //REST API KEY
    // const redirect_uri = 'http://localhost:9000/login/auth' //Redirect URI
    const redirect_uri = 'https://partyone-a5fab.web.app/login/auth';
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }

    return(
        <div>
            <img 
                src={kakaoLogin} 
                className='login'
                onClick={handleLogin}/>
        </div>
    )
}

export default Login;