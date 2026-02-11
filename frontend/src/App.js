import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListBookComponent from "./components/ListBookComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateBookComponent from "./components/CreateBookComponent";
import UpdateBookComponent from "./components/UpdateBookComponent";

function App() {
  return (
      <div>
          <BrowserRouter>
              <div className="container">
                  <HeaderComponent />
                  <div className="container">
                      <Switch>
                          <Route path="/" exact component={ListBookComponent} />
                          <Route path="/books" component={ListBookComponent} />
                          <Route path="/add-book/:id" component={CreateBookComponent} />
                          {/*<Route path="/update-book/:id" component={UpdateBookComponent} />*/}
                      </Switch>
                  </div>
                  <FooterComponent />
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;
