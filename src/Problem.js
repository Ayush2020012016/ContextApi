import React, { useState } from "react";

const Grandchild = ({ brand }) => {
  return (
    <div>
      <Child brand={brand} />
    </div>
  );
};

const Child = ({ brand }) => {
  return (
    <div>
      <h1>child: {brand}</h1>
      <div></div>
    </div>
  );
};

const App = () => {
  const [brandName] = useState("Amazon");
  return (
    <div>
      App
      <div>
        <Grandchild brand={brandName} />
      </div>
    </div>
  );
};

export default App;
