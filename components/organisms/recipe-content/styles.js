import styled from "styled-components";

export const Styles = styled.div`
  .recipe-content {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  .recipe_details {
    display: flex;
    justify-content: start;
    align-items: start;
  }

  .recipe__image {
    height: 100%;
  }

  .recipe__info {
    color: var(--gray-dark);
    width: 100%;
    padding: 0rem;
    transition: text-align 0.25s ease;
    display: flex;
    .recipe__title {
      font-weight: bold;
      margin-bottom: 0rem;

      color: var(--gray-14);
      text-transform: uppercase;
      display: block;
      padding: 0;
    }

    .rating {
      display: flex;
      align-items: center;
      justify-content: start;
      margin: 0;
      margin-top: -0.3rem;
      @media (max-width: 1000px) {
        margin-top: 0;
      }
      span {
        font-weight: bold;
        color: var(--gray-10);
      }
    }

    .recipe__By {
      margin-top: 1rem;
      color: var(--gray-8);
      text-transform: uppercase;

      span {
        color: var(--primary);
        text-decoration: underline;
      }
    }
  }

  .ingredients_section {
    margin-top: 3rem;
    font-weight: bold;
    div {
      color: var(--primary);
      font-weight: 700;
    }
    ol {
      list-style-type: none;
      padding-left: 0;
      margin-top: 0.5rem;
    }
    li {
      display: flex;
      align-items: center;
      line-height: 1;
      font-weight: 700;
      color: var(--gray-10);
    }
    ol li:before {
      font-weight: 900;
      content: "•";
      color: var(--primary);
      margin-right: 1rem;
      font-size: 2rem;
    }
  }
  .directions_section {
    margin: 2rem 0;
  }
  .main__title {
    color: var(--primary);
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;
