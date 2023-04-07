import React, { useState } from "react";

import PackageContext from "./Context";

const Provider  = (props) => {
  const [mission, setMission] = useState({
    mname: "Go to the Russia",
    agent: 1,
    accept: "Not accepted",
  });
  return (
    <>
      <PackageContext.Provider
        value={{
          data: mission,
          isMissionAccepted: () => {
            setMission({ ...mission, agent: "Accepted" });
          },
        }}
      >
        {props.children}
      </PackageContext.Provider>
    </>
  );
};

export default Provider;
