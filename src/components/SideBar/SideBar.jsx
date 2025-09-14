import "./SideBar.css";
import img from "../../assets/avatar-profile.png";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        <div className="sidebar__avatar">
          <img src={img} alt="Default Avatar" />
        </div>
        <p className="sidebar__username">Terrance Tegegne</p>
      </div>
    </div>
  );
}

export default SideBar;
