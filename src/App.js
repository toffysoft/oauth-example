import React from 'react';
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

function App() {
  const responseGoogle = async response => {
    console.log("google console");
    console.log({response});
    if(!response.accessToken) return
    try{
      const {data} = await Axios.post(`${process.env.REACT_APP_SERVICE_URL}/google`,{
        access_token :response.accessToken
      })
      console.log({data})
    }catch(error){
      console.error(error)
    }


  };
  const responseFacebook = async response => {
    console.log("facebook console");
    console.log({response});
   
    if(!response.accessToken) return

    try{
      const {data} = await Axios.post(`${process.env.REACT_APP_SERVICE_URL}/facebook`,{
        access_token :response.accessToken
      })
      console.log({data})
    }catch(error){
      console.error(error)
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
        <br/>
        <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      </header>
    </div>
  );
}

export default App;
