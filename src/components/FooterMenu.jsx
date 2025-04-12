import React from "react";
import styled from "styled-components";

const Menu = styled.div`
  flex: 1;
  min-width: 200px;
  text-align: left;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  margin-top: 2rem;

  h4 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-family: "Barlow", sans-serif;
    font-weight: 500;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin-bottom: 1rem;
      font-size: 0.95rem;
      font-family: "Barlow", sans-serif;
      font-weight: 400;
    }
  }
`;

const FooterMenu = () => {
  return (
    <Menu>
      <h4>Hot Menu</h4>
      <ul>
        <li>Terminal Pizza</li>
        <li>5 Kişilik Hackathon Pizza</li>
        <li>useEffect Tavuklu Pizza</li>
        <li>Beyaz Console Frosty</li>
        <li>Testler Geçti Mutlu Burger</li>
        <li>Position Absolute Acı Burger</li>
      </ul>
    </Menu>
  );
};

export default FooterMenu;
