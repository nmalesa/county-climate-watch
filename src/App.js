import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import ButtonsList from "./components/ButtonsList";
import SearchParams from "./components/SearchParams";

const App = () => {
  return (
    <div>
      <Header />
      <ButtonsList />
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
