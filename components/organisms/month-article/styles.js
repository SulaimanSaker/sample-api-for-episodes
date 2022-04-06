import styled from "styled-components";

export const Styles = styled.div`
  .month-article {
    padding-left: 10rem;
    padding-bottom: 4rem;

    @media (max-width: 960px) {
      padding-left: 1rem;
    }
  }

  .month-article-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header {
    border-bottom: 1px solid var(--gray-2);
    margin-bottom: 2rem;
  }

  .date {
    color: var(--primary);
  }

  .overview {
    color: var(--gray-14);
    text-transform: uppercase;
    margin-top: 0.3rem;
  }

  .title {
    color: var(--gray-12);
    text-transform: uppercase;
    margin: 0.5rem 0;
  }

  .text {
    color: var(--gray-8);
    margin-bottom: 1rem;
  }
`;
