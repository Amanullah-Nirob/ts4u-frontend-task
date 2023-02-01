import { Image } from "antd";
import Link from "next/link";

function LayoutSideMenu() {
  return (
    <div className="sideBar">
      <Link className="logo" href="/">
        <Image src="/static/images/fav.png" alt="" />
        <p>AmanSpaceX</p>
      </Link>
      <div className="menu-content" style={{ color: "#fff" }}>
        Product Filter coming soon
      </div>
    </div>
  );
}

export default LayoutSideMenu;
