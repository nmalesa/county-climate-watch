import { createRoot } from "react-dom/client";
import ButtonsList from "./components/ButtonsList";
import SearchParams from "./components/SearchParams";

const App = () => {
  return (
    <div>
      <h1>County Climate Watch</h1>
      <ButtonsList />
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
