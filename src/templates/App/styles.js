import styled, { css } from "styled-components";

export const Wrapper = styled.h1`
  ${(props) => css`
    background: ${props.background};
    color: ${props.color};
    padding: 1rem;
  `}
`;
