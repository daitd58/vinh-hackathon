import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  display: none;
  @media (max-width: 376px) {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    & li {
      padding: 20px 12px;
      color: #ffffff;
      font-size: 18px;
      white-space: nowrap;
      font-style: normal;
      font-family: "Oxygen", sans-serif;
      font-weight: 500;
      line-height: 8px;
    }
    flex-flow: column nowrap;
    position: fixed;
    background: #204370;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 73.5px;
    right: 0;
    width: 260px;
    height: 100vh;
    padding: 0;
    transition: transform 0.3s ease-in-out;
  }
`;

const SideBar = ({ open}) => {
  return (
    <Ul open={open}>
      <li>Cities</li>
      <li>Ventures</li>
      <li>Academy</li>
      <li>Services</li>
      <li>Accelerator</li>
      <li>About us</li>
    </Ul>
  );
};

export default SideBar;
