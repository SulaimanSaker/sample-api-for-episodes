import styled from "styled-components";

export const Styles = styled.div`
  line-height: 1;

  span:first-of-type {
    margin-right: 0rem;
  }

  span:last-of-type {
    margin-right: 0.3;
  }

  div[class="undefined react-stars"] {
    display: inline-flex;
  }

  div[class^="react-stars-wrapper"] {
    span {
      margin: 0 4px !important;
      font-size: 18px !important;
    }
    span:first-of-type {
      margin-left: 0rem !important;
    }
  }

  @media (max-width: 1680px) {
    div[class^="react-stars-wrapper"] {
      span {
        margin: 0 3px !important;
        font-size: 16px !important;
      }
    }
  }

  @media (max-width: 1600px) {
    div[class^="react-stars-wrapper"] {
      span {
        margin: 0 2px !important;
        font-size: 15px !important;
      }
    }
  }

  @media (max-width: 1536px) {
    div[class^="react-stars-wrapper"] {
      span {
        margin: 0 2px !important;
        font-size: 14px !important;
      }
    }
  }

  @media (max-width: 1440px) {
    div[class^="react-stars-wrapper"] {
      span {
        margin: 0 1px !important;
        font-size: 13px !important;
      }
    }
  }

  @media (max-width: 1366px) {
    div[class^="react-stars-wrapper"] {
      span {
        margin: 0 1px !important;
        font-size: 12px !important;
      }
    }
  }

  @media (max-width: 900px) {
    div[class^="react-stars-wrapper"] {
      span {
        margin: 0 !important;
        font-size: 10px !important;
      }
    }
  }
`;
