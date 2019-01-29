import styled from "styled-components";

// * This is our container div. Here, we import fonts that we need throughout
// * our app.
export const Content = styled.div`
  padding: 0 100px;

  @media (max-width: 736px) {
    padding: 0;
  }
`;
