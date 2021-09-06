import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from './pages/App';
import MyAppBar from './MyAppBar';
import Login from './pages/Login';
// import { mergeClasses } from '@material-ui/styles';

ReactDOM.render(
<>
<BrowserRouter>
{/* <Container ClassName = {Classes.root}> */}
<MyAppBar/>
<App />
{/* <Login/> */}
<Switch>
    <Route exact path="/app" component={App}/>
    <Route exact path="/login" component={Login}/>
</Switch>
{/* </Container> */}
</BrowserRouter>
</>, document.getElementById('root'));
    