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
                          <Route path="/" exact element={<ListBookComponent />} />
                          <Route path="/books" element={<ListBookComponent />} />
                          <Route path="/add-book/:id" element={<CreateBookComponent />} />
                          <Route path="/view-book/:id" element={<ViewBookComponent />} />
                          {/*<Route path="/update-book/:id" component={UpdateBookComponent} />*/}
                      </Routes>
                  </div>
                  <FooterComponent />
          </BrowserRouter>
      </div>
  );
}

export default App;
