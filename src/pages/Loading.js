import React from "react";
import { useLocation,useHistory } from "react-router-dom";

const RedirectPage = ()=>{
    const location = useLocation();
    const history = useHistory();
    const authCode = new URLSearchParams(location.search).get('code');
    if(authCode){
      fetch('https://2a67uxwzf2.execute-api.eu-west-1.amazonaws.com/dev/auth',{
            method: 'POST',
            body: JSON.stringify(authCode),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((res)=>{return res.json()}).then(data=>{
            console.log(data.result['access_token']);
            localStorage.setItem('access_token',data.result['access_token']);
            history.replace('/home')
          });
    }
    return(
        <div>
            <h3>
                Loading ....
            </h3>
        </div>
    )
}

export default RedirectPage;