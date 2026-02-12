import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListBookComponent from "./components/ListBookComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateBookComponent from "./components/CreateBookComponent";
import UpdateBookComponent from "./components/UpdateBookComponent";
import ViewBookComponent from "./components/ViewBookComponent";

function App() {
  return (
      <div>
          <BrowserRouter>
                  <HeaderComponent />
                  <div className="container">
                      <Routes>
                          <Route path="/" exact component={<ListBookComponent />} />
                          <Route path="/books" component={<ListBookComponent />} />
                          <Route path="/add-book/:id" component={<CreateBookComponent />} />
                          <Route path="/view-book/:id" component={<ViewBookComponent />} />
                          {/*<Route path="/update-book/:id" component={UpdateBookComponent} />*/}
                      </Routes>
                  </div>
                  <FooterComponent />
          </BrowserRouter>
      </div>
  );
}

export default App;
