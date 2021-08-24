import React from "react";

const ColorSwitcher = () => {
  const colorSwitcherStyling = {
    position: "fixed",
    top: "30px",
    right: "50px",
  };

  return (
    <div>
      <div className="color-switcher" style={colorSwitcherStyling}>
        ◐
      </div>
    </div>
  );
};

export default ColorSwitcher;
