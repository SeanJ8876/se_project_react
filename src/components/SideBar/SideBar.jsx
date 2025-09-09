import "../SideBar/SideBar";

function SideBar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__avatar"
        src="../../assets/images/default-avatar.png"
        alt="Default Avatar"
      />
      <p className="sidebar__username">User name</p>
    </div>
  );
}

export default SideBar;
