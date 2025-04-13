import React from "react";
import styled from "styled-components";

const Instagram = styled.div`
  flex: 1;
  min-width: 200px;
  text-align: left;
  margin-top: 2rem;

  h4 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 500;
    font-family: "Barlow", sans-serif;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: flex-start;
  }

  .grid img {
    width: calc(33.33% - 0.35rem);
    height: auto;
    max-width: 105px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 4px;
  }

  @media (max-width: 1200px) {
    width: 100%;

    .grid {
      justify-content: flex-start;
      gap: 0.4rem;
    }

    .grid img {
      width: calc(33.33% - 0.25rem);
    }
  }
`;

const FooterInstagram = () => {
  return (
    <Instagram>
      <h4>Instagram</h4>
      <div className="grid">
        <img src="../images/iteration-2-images/footer/insta/li-0.png" alt="" />
        <img src="../images/iteration-2-images/footer/insta/li-1.png" alt="" />
        <img src="../images/iteration-2-images/footer/insta/li-2.png" alt="" />
        <img src="../images/iteration-2-images/footer/insta/li-3.png" alt="" />
        <img src="../images/iteration-2-images/footer/insta/li-4.png" alt="" />
        <img src="../images/iteration-2-images/footer/insta/li-5.png" alt="" />
      </div>
    </Instagram>
  );
};

export default FooterInstagram;
