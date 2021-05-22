import "./App.css";
import MyProvider from "./MyContext";
import Home from "./pages/home/home.page";

function App() {
  return (
    <MyProvider>
      <div className="app">
        <Home />
      </div>
    </MyProvider>
  );
}

export default App;
