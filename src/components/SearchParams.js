import { useState } from "react";

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
          />
        </label>
        <label htmlFor="county">
            County
            <select 
                id="county"
                value={county}
                onChange={(e) => setCounty(e.target.value)}
                onBlur={(e) => setCounty(e.target.value)}
            />
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
