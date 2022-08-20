/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import "../styles/layout.css";

const Layout = ({ children }) => {
  return (<div style={{ background: `#eff6ff` }}>
    <Header />
    <div
      style={{
        margin: `0 auto`, padding: `var(--size-gutter)`
      }}
    >
      <main style={{ minHeight: "70vh" }}>{children}</main>
    </div>

    <footer
      className={"Footer"}>
      <div className={"FooterRow"}>
        <div>
          <a href={"/"} className={"logo"}>
            BC
          </a>
        </div>
        <span style={{
          display: "flex", flexDirection: "row", alignItems: "center"
        }}>
          <span style={{ display: "flex", gap: "2vw" }}>
            <a href={"mailto:main.bobchen@gmail.com"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                   className="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
            </a>
            <a href={"tel:0435113898"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                   className="bi bi-phone-fill" viewBox="0 0 16 16">
                <path
                  d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
              </svg>
            </a>
            <a href={"https://www.linkedin.com/in/3bobchen/"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                   className="bi bi-linkedin" viewBox="0 0 16 16">
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
            <a href={"https://www.behance.net/bobchen10"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                   className="bi bi-behance" viewBox="0 0 16 16">
                <path
                  d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z" />
              </svg>
            </a>
          </span>
      </span>
      </div>

      <div className={"FooterRow"}>
        <div className={"FooterShortcuts"}>
          {/*<span>*/}
          {/*    <b>Home</b>*/}
          {/*</span>*/}
          {/*<span>*/}
          {/*    <b>Experience</b>*/}
          {/*</span>*/}
          {/*<span>*/}
          {/*    <b>Portfolio</b>*/}
          {/*</span>*/}
          {/*<span>*/}
          {/*    <b>Contact</b>*/}
          {/*</span>*/}
        </div>
        <span style={{
          display: "flex", flexDirection: "row", alignItems: "center"
        }}>
            <b>
                © {new Date().getFullYear()} (Bob Chen)
            </b>
        </span>
      </div>
    </footer>
  </div>);
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
