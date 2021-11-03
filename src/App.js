import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/home" component={Home} />
       </Switch>
    </BrowserRouter>
  );
}

export default App;
