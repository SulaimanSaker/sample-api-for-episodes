import styled from "styled-components";

export const Styles = styled.div`
  .social-links {
    display: flex;
    color: ${({ color }) => color || "var(--gray-15)"};
  }
`;
