import React, { Component } from "react";
import AboutMenuItem from "./AboutMenuItem";
import AboutSubHeading from "./AboutSubHeading";
import subHeadingsData from "./subHeadingsData";
import personalIcon from "../assets/moebius-triangle.png";
import educationIcon from "../assets/upgrade.png";
import carrerIcon from "../assets/triple-corn.png";
import subheadingsData from "./subHeadingsData";

class AboutMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
      activeSubHeading: 1,
    };
  }

  handleMenuItem = (menuitem) => {
    this.setState({
      activeMenuItem: menuitem,
      activeSubHeading: 1,
    });
  };

  handleMenuSubheading = (heading) => {
    this.setState({
      activeSubHeading: heading,
    });
  };
  render() {
    const { activeMenuItem, activeSubHeading } = this.state;
    const menuitems = ["PERSONAL", "EDUCATION", "CARRER"];
    const activeMenuTitle = menuitems[activeMenuItem - 1];
    const activeMenuIcon =
      activeMenuTitle === "PERSONAL"
        ? personalIcon
        : activeMenuTitle === "EDUCATION"
        ? educationIcon
        : carrerIcon;
    const subHeadings = subheadingsData[activeMenuItem];
    return (
      <>
        <div className="menu">
          {menuitems.map((item, index) => {
            return (
              <AboutMenuItem
                key={index}
                title={item}
                active={activeMenuItem === index + 1}
                onclick={() => this.handleMenuItem(index + 1)}
              />
            );
          })}
        </div>
        <div className="sub-container">
          <div className="icon-title-container">
            <img src={activeMenuIcon} alt={activeMenuTitle} />
            <h3>{activeMenuTitle}</h3>
          </div>
          {subHeadings.map((item, index) => (
            <AboutSubHeading
              key={index}
              title={item.title}
              content={item.content}
              active={activeSubHeading === index + 1}
              onclick={() => this.handleMenuSubheading(index + 1)}
              menuItem={activeMenuItem}
            />
          ))}
        </div>
      </>
    );
  }
}

export default AboutMenu;
