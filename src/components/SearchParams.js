import { useState } from "react";
import{states} from "../data/states"
import counties from "../data/counties.json";

const SearchParams = () => {
  const [state, setState] = useState("");
  const [county, setCounty] = useState("");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="state">
          State
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            onBlur={(e) => setState(e.target.value)}
          >
            <option />
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="county">
          County
          <select
            id="county"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
            onBlur={(e) => setCounty(e.target.value)}
          >
            <option />
          </select>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
