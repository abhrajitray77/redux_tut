import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProdDetails from "./components/ProdDetails";
import ProdList from "./components/ProdList";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" exact element= {<ProdList />}  />
        <Route path="/product/:productId" exact component={ProdDetails} />
        <Route>404 Not Found! oops</Route>
      </Routes>
    </div>
  );
}

export default App;
