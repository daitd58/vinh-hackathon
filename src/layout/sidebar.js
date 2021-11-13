import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  display: none;
  @media (max-width: 768px) {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    flex-flow: column nowrap;
    background: rgba(14, 44, 81, 0.8);;
    backdrop-filter: blur(35px);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 64px;
    right: 0;
    width: 600px;
    height: 100vh;
    padding: 0 0;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      padding: 18px 10px;
      :hover {
        background: #0d2538;
      }
    }
  }
  @media (max-width: 376px) {
    top: 63px;
    width: 300px;
  }
`;
export const NavBar = ({ open }) => {
  return (
    <Ul open={open}>
      <li>CITIES</li>
      <li>VENTURES</li>
      <li>ACADEMY</li>
      <li>SERVICES</li>
      <li>ACCELERATOR</li>
      <li>ABOUT US</li>
    </Ul>
  );
};
