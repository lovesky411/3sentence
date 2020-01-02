import '../webapp/css/custom.css';

import React from 'react';
import ReactDOM from 'react-dom';

class MainPage extends React.Component  {

    render() {
        return (
        <div className="main">
            <h1> 3 Sentence!</h1>
            <div>
                <input type="text" id="loginId" name="loginId"></input>
                <input type="password" id="password" name="password"></input>
                <button onClick={() => alert("click!")}>로그인</button>
                <button onClick={() => alert("회원가입")}>회원가입</button>
            </div>
         </div>
        );
    }
}

ReactDOM.render(<MainPage/>, document.getElementById('root'));