import styled from "styled-components";

const Input = styled.input`
  padding: 0.5em;
  margin-right: 0.5em;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.secondary};
  border: none;
  border-radius: 3px;
`;

export default Input;
