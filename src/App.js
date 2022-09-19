import { createRoot } from "react-dom/client";
import BirdButton from "./components/BirdButton";

const App = () => {
  return (
    <div>
      <h1>County Climate Watch</h1>
      <BirdButton />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
