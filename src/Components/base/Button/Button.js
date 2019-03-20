import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  color: ${props => props.theme.colors.primary};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: ${props => `2px solid ${props.theme.colors.primary}`};
  border-radius: 3px;
  cursor: pointer;
`;

export default Button;
