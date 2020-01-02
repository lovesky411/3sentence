import '../webapp/css/custom.css';
 
import React from 'react';
import ReactDOM from 'react-dom';
 
class SubPage extends React.Component {
 
    render() {
        return <div className="sub">Sub 페이지</div>;
    }
 
}
 
ReactDOM.render(<SubPage/>, document.getElementById('root'));