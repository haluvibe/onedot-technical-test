import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;

  @media (max-width: 960px) {
    padding: 2em;
  }

  @media (max-width: 480px) {
    padding: 1em;
  }
`;

export default Wrapper;
