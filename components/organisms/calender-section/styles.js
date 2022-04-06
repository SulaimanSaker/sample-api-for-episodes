import styled from "styled-components";
export const Styles = styled.div`
  background-color: #f0eaee;
  padding: 5rem;

  @media (max-width: 567px) {
    padding: 5rem 1rem;
  }

  .first-calender {
    display: flex;
    justify-content: end;
  }

  .react-calendar__tile {
    color: var(--gray-12);
  }

  .react-calendar {
    width: 450px;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--gray-8);
  }

  .react-calendar--doubleView {
    width: 900px;
    margin: 0 auto;
  }

  .react-calendar__tile--active,
  .react-calendar__tile--hasActive {
    background: var(--primary);
    color: #fff;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus,
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #e3a7cb;
  }

  .react-calendar__tile--rangeStart {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  .react-calendar__tile--rangeEnd {
    border-radius: 0rem 0.5rem 0.5rem 0;
  }

  .react-calendar__month-view__weekdays {
    color: var(--primary);
  }

  .react-calendar__navigation__arrow.react-calendar__navigation__prev-button,
  .react-calendar__navigation__arrow.react-calendar__navigation__next-button {
    background-color: var(--primary);
    color: #fff;
    border-radius: 50%;
    font-size: 1.2rem;
    &:hover {
      background-color: #fff;
      color: var(--primary);
      border: 1px solid var(--primary);
    }
  }

  .react-calendar__tile {
    margin: 0.5rem 0;
  }

  .white-button {
    background: #fff;
    color: var(--primary);
    border: 1px solid var(--primary);
  }

  .react-calendar__tile--now {
    background: transparent;
    border: 1px solid var(--primary);
  }

  .react-calendar__navigation__label {
    flex-grow: 0 !important;
    width: 0;
    visibility: hidden;
  }

  .react-calendar__navigation {
    justify-content: center;
    position: absolute;
    top: -7rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .month-names {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-top: 1px solid var(--gray-8);
    @media (max-width: 960px) {
      margin: 0;
      width: 100%;
      position: relative;
    }
  }

  .month-name {
    width: 450px;
    text-align: center;
    margin: 1rem 0;
    color: var(--primary);
    font-weight: bold;
    position: relative;

    @media (max-width: 960px) {
      width: 100%;
    }

    img {
      position: absolute;
      left: 0;
      width: 3rem;
    }
  }

  .doubleviewName {
    @media (max-width: 960px) {
      position: absolute;
      top: 350px;
      border-top: 1px solid var(--gray-8);
      padding-top: 1rem;
    }
  }

  .react-calendar__viewContainer > .react-calendar__month-view:first-child {
    padding: 0 1rem;
    @media (min-width: 960px) {
      border-right: 1px solid var(--gray-8);
    }
  }

  .react-calendar__month-view {
    @media (max-width: 960px) {
      width: 100%;
      margin-bottom: 5rem;
    }
  }

  .react-calendar__viewContainer {
    @media (max-width: 960px) {
      flex-wrap: wrap;
    }
  }
`;
