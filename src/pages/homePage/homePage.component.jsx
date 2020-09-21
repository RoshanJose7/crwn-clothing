import React from "react";
import DirectoryMenu from "../../components/directory-menu/directoryMenu.component";
import "./homepage.styles.scss";

const HomePage = (props) => {
  console.log(props);
  return (
    <div className="homepage">
      <DirectoryMenu />
    </div>
  );
};

export default HomePage;
