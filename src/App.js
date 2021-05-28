import "./App.css";
import NewsContextProvider from "./contexts/NewsContext";
import Home from "./pages/home/home.page";

function App() {
  return (
    <NewsContextProvider>
      <div className="app">
        <Home />
      </div>
    </NewsContextProvider>
  );
}

export default App;
