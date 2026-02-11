import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListBookComponent from "./components/ListBookComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
      <div>
          <BrowserRouter>
              <div className="container">
                  <HeaderComponent />
                  <div className="container">
                      <Switch>
                          <Route path="/" component={<ListBookComponent />} />
                          <Route path="/books" component={<ListBookComponent />} />
                      </Switch>
                  </div>
                  <FooterComponent />
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;
