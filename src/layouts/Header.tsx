import React from "react";
import "../styles/Header.css";
import { Layout, theme } from "antd";
import { Link } from "react-router-dom";

interface MenuListItem {
  key: number;
  to: string;
  text: string;
}

const { Header } = Layout;
const MainHeader = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const menuList: MenuListItem[] = [
    {
      key: 1,
      to: "/wiki",
      text: "위키",
    },
    {
      key: 2,
      to: "/project",
      text: "프로젝트",
    },
    {
      key: 3,
      to: "/employee",
      text: "직원정보",
    },
    // {
    //   key: 4,
    //   to: "/wiki",
    //   text: "위키",
    // },
  ];
  return (
    <Header style={{ background: colorBgContainer }}>
      <div className="header-wrap">
        <h1 className="header-logo fe3-wiki-logo">
          <a href="/">Logo</a>
        </h1>
        <div className="header-nav">
          <nav>
            <ul>
              {menuList.map((menu) => (
                <li key={menu.key}>
                  <Link to={menu.to}>{menu.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="header-user">
          <ul>
            <li>
              <button className="user-link timer-btn">출퇴근 타이머</button>
            </li>
            <li>
              <Link to={"/signin"} className="user-link signin-link">
                로그인
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Header>
  );
};

export default MainHeader;