import { useState, useEffect } from "react";
import { states } from "../data/states";
import countiesData from "../data/counties.json";

const SearchParams = () => {
  const [state, setState] = useState("");
  const [county, setCounty] = useState("");

  const counties = [];

  useEffect(() => {
    retrieveCounties(state);
  }, [state]); // eslint-disable-line react-hooks/exhaustive-deps

  const retrieveCounties = (state) => {
    for (let idx = 0; idx < countiesData.length; idx++) {
      if (countiesData[idx].State === state) {
        counties.push(countiesData[idx].County);
      }
    }
  };

  return (
    <div className="search-params">
      <form>
        <label htmlFor="state">
          State
          <select
            id="state"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
              setCounty("");
            }}
            onBlur={(e) => {
              setState(e.target.value);
              setCounty("");
            }}
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
            {counties.map((county) => (
              <option key="county" value={county}>
                {county}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
