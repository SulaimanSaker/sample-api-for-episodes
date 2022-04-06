import styled from "styled-components";

export const Styles = styled.div`
  .container {
    padding-right: 0;
    padding-left: 0;
  }

  .thumbnails-carousel {
    display: flex;
    height: 612px;
  }

  .thumbnails-carousel__thumbnails {
    width: 155px;
  }

  @media (max-width: 960px) {
    .thumbnails-carousel__thumbnails {
      display: none;
    }
  }

  .thumbnails-carousel__carousel {
    width: calc(100% - 155px);
  }

  @media (max-width: 1680px) {
    .thumbnails-carousel {
      height: 550px;
    }

    .thumbnails-carousel__thumbnails {
      width: 150px;
    }

    .thumbnails-carousel__carousel {
      width: calc(100% - 150px);
    }
  }

  @media (max-width: 1600px) {
    .thumbnails-carousel {
      height: 500px;
    }

    .thumbnails-carousel__thumbnails {
      width: 140px;
    }

    .thumbnails-carousel__carousel {
      width: calc(100% - 140px);
    }
  }

  @media (max-width: 1536px) {
    .thumbnails-carousel {
      height: 475px;
    }

    .thumbnails-carousel__thumbnails {
      width: 130px;
    }

    .thumbnails-carousel__carousel {
      width: calc(100% - 130px);
    }
  }

  @media (max-width: 1440px) {
    .thumbnails-carousel {
      height: 450px;
    }

    .thumbnails-carousel__thumbnails {
      width: 125px;
    }

    .thumbnails-carousel__carousel {
      width: calc(100% - 125px);
    }
  }

  @media (max-width: 1366px) {
    .thumbnails-carousel {
      height: 425px;
    }

    .thumbnails-carousel__thumbnails {
      width: 115px;
    }

    .thumbnails-carousel__carousel {
      width: calc(100% - 115px);
    }
  }

  @media (max-width: 960px) {
    .thumbnails-carousel__carousel {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    .thumbnails-carousel {
      height: 400px;
    }
  }

  @media (max-width: 375px) {
    .thumbnails-carousel {
      height: 350px;
    }
  }

  @media (max-width: 320px) {
    .thumbnails-carousel {
      height: 300px;
    }
  }
`;
