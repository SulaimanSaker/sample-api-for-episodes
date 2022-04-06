import styled from "styled-components";

export const Styles = styled.div`
  li {
    color: #666666;
  }

  img {
    width: 100%;
    object-fit: contain;
    margin: 0.5rem 0;
  }

  @media (max-width: 375px) {
    img {
      width: 100%;
      height: 100%;
    }
  }

  .rtl .article-content {
    direction: rtl;

    text-align: right;
  }

  .article-content__header {
    text-transform: uppercase;
    margin: 0.8rem 0;
    color: #333333;
  }

  .article-content__header .title {
    font-size: 1.375rem;
    font-weight: bold;
    margin-bottom: 0.1rem;
  }

  @media (max-width: 1600px) {
    .article-content__header .title {
      font-size: 1.275rem;
    }
  }

  @media (max-width: 1536px) {
    .article-content__header .title {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 1440px) {
    .article-content__header .title {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 1366px) {
    .article-content__header .title {
      font-size: 1rem;
    }
  }

  @media (max-width: 800px) {
    .article-content__header .title {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 600px) {
    .article-content__header .title {
      font-size: 0.8rem;
    }
  }

  .article-content__header .des1 {
    font-size: 0.875rem;
    font-weight: 400;
    margin-bottom: 0.35rem;
  }

  @media (max-width: 1600px) {
    .article-content__header .des1 {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 1536px) {
    .article-content__header .des1 {
      font-size: 0.785rem;
    }
  }

  @media (max-width: 1440px) {
    .article-content__header .des1 {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 1366px) {
    .article-content__header .des1 {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 800px) {
    .article-content__header .des1 {
      font-size: 0.6rem;
    }
  }

  .article-content__header .des2 {
    color: #999999;
    font-size: 0.875rem;
  }

  @media (max-width: 1600px) {
    .article-content__header .des2 {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 1536px) {
    .article-content__header .des2 {
      font-size: 0.785rem;
    }
  }

  @media (max-width: 1440px) {
    .article-content__header .des2 {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 1366px) {
    .article-content__header .des2 {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 800px) {
    .article-content__header .des2 {
      font-size: 0.6rem;
    }
  }

  .pink-header {
    color: #bd4d94;
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 1680px) {
    .pink-header {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 800px) {
    .pink-header {
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    .pink-header {
      font-size: 0.8rem;
    }
  }

  .paragraph {
    color: #666666;
    margin-bottom: 1.8rem;
  }

  .know-more {
    color: #666666;
    margin-bottom: 0.5rem;
  }

  .know-more-list {
    list-style-type: disc;
  }

  .know-more-list li {
    margin-bottom: 0.5rem;
  }

  .know-more-list li::marker {
    color: #bd4d94;
    font-size: 1.5em;
  }

  @media (max-width: 800px) {
    .know-more-list li::marker {
      font-size: 1.35em;
    }
  }

  .proin {
    color: #666666;
  }

  .proin .paragraph {
    margin-bottom: 0.5rem;
  }

  .proin .black-list {
    font-weight: bold;
    padding-left: 1rem;
  }

  .proin .black-list li:first-of-type {
    margin-bottom: 0.55rem;
  }

  .numbers-list {
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    .numbers-list {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 600px) {
    .numbers-list {
      font-size: 0.7rem;
    }
  }

  ol {
    counter-reset: section;
    list-style-type: none;
    padding-left: 0;
  }

  ol > li:before {
    counter-increment: section;
    font-weight: 700;
    content: counters(section, ".") ". ";
    color: #7e7e7e;
  }

  .article-content__advertisements {
    display: flex;
    justify-content: center;

    margin-top: 1.5rem;
    margin-bottom: 5rem;
  }

  .article-content__advertisements .wrapper {
    width: 80%;
  }

  .video {
    padding-top: 1rem;
    padding-bottom: 1.25rem;
  }

  .plus-icon {
    margin-top: -4px;
  }

  .article-content__social-links {
    padding-left: 1rem;
    padding-bottom: 1rem;
    margin-top: 2rem;
  }

  table {
    margin-top: 2rem;
  }

  table thead {
    background-color: #bd4d94;
    color: white;
    font-weight: bold;
  }

  table th {
    border: 1px solid #666666;
  }

  table td {
    border: 1px solid #666666;
  }

  table a {
    text-decoration: underline;
  }

  .like-save-buttons button {
    background-color: transparent;
    border: none;
    padding: 0;
  }

  p {
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 600px) {
    p {
      font-size: 0.7rem;
    }
  }

  .rotate_arrow_up {
    transition: all 0.2s;
    transform: rotate(180deg);
  }

  .rotate_arrow_down {
    transition: all 0.2s;
    transform: rotate(0deg);
  }

  a {
    color: var(--pink);
    &:hover {
      text-decoration: underline;
    }
  }

  .rotate_arrow_up {
    transition: all 0.2s;
    transform: rotate(180deg);
  }

  .rotate_arrow_down {
    transition: all 0.2s;
    transform: rotate(0deg);
  }
`;
