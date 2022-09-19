import { useState, useEffect } from "react";
import { states } from "../data/states";
import counties from "../data/counties.json";

const SearchParams = () => {
  const [state, setState] = useState("");
  const [county, setCounty] = useState("");

  useEffect(() => {
    console.log("State: ", state);
    console.log("First county: ", counties[0]);
    for (let idx = 0; idx < counties.length; idx++) {
      if (counties[idx].State === state) {
        console.log("Counties: ", counties[idx]);
      }
    }
  }, [state]);

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
