import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #1e1e1e;
  color: white;
  padding: 3rem 1.5rem 1rem;
  font-family: "Barlow", sans-serif;
  width: 100%;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #333;
  margin-top: 2rem;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;

  img {
    width: 20px;
    cursor: pointer;
  }
`;
