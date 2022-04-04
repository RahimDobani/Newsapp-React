import "./App.css";
import Navbar from "./component/Navbar";
import News from "./component/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
      <Navbar title="News Reader" home="Home"/>
        <Routes>
          <Route exact path="/" key={"general"} element={<News country="us" pageSize="18" subheading="General" category="general"/>} />
          <Route exact path="/Business" key={"business"} element={<News country="us" pageSize="18" subheading="Business" category="business"/>} />
          <Route exact path="/Entertainment" key={"entertainment"} element={<News country="us" pageSize="18" subheading="Entertainment" category="entertainment"/>} />
          <Route exact path="/Health" key={"health"} element={<News country="us" pageSize="18" subheading="Health" category="health"/>} />
          <Route exact path="/Science" key={"science"} element={<News country="us" pageSize="18" subheading="Science" category="science"/>} />
          <Route exact path="/Sports" key={"sports"} element={<News country="us" pageSize="18" subheading="Sports" category="sports"/>} />
          <Route exact path="/Technology" key={"technology"} element={<News country="us" pageSize="18" subheading="Technology" category="technology"/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
