import "../SideBar/SideBar";

import img from "../../assets/avatar-profile.png";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={img} alt="Default Avatar" />
      <p className="sidebar__username">User name</p>
    </div>
  );
}

export default SideBar;
