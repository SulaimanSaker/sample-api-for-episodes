import React, { useState, useEffect } from "react";
import { Styles } from "./styles";
import Calendar from "react-calendar";
import useMediaQuery from "components/particles/hooks/with-media-query";
import "react-calendar/dist/Calendar.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function Calenders() {
  const mediaQuery = useMediaQuery();

  const [value, onChange] = useState([new Date(2022, 1, 2), new Date(2022, 1, 10)]);
  const [nextMonthValue, onNextMonthValueChange] = useState([
    new Date(2022, 2, 2),
    new Date(2022, 2, 10),
  ]);

  const [SecondRange, setSecondRange] = useState([
    new Date("2022-02-16"),
    new Date("2022-02-20"),
  ]);
  const [SecondRangeNextMonth, setSecondRangeNextMonth] = useState([
    new Date("2022-03-16"),
    new Date("2022-03-20"),
  ]);

  const [underlinedDates, setUnderlinedDates] = useState([
    new Date("2022-02-12"),
    new Date("2022-02-23"),
    new Date("2022-02-25"),
    new Date("2022-03-12"),
    new Date("2022-03-23"),
    new Date("2022-03-25"),
  ]);

  const [defaultStartDate, setDefaultStartDate] = useState(new Date());
  const [monthNames, setMonthNames] = useState({ current: "", next: "" });

  let whiteDate = new Date("2022-02-9");
  let whiteDateNextMonth = new Date("2022-03-9");

  useEffect(() => {
    let allButtons = document.getElementsByClassName("react-calendar__tile");
    for (let i = 0; i < allButtons.length; i++) {
      let currentDate = new Date(allButtons[i].childNodes[0].getAttribute("aria-label"));
      colorCurrentDate(currentDate, allButtons[i]);
    }
    getMonthNames();
  }, [defaultStartDate]);

  const colorCurrentDate = (date, button) => {
    if (checkDateNextMonthRange(date) && !checkIfneighboringMonth(button)) {
      button.style.backgroundColor = "var(--primary)";
      button.style.color = "#fff";

      if (checkDateEqualStart(date)) {
        button.style.borderRadius = "0.5rem 0 0 0.5rem";
      }

      if (checkDateEqualEnd(date)) {
        button.style.borderRadius = "0 0.5rem 0.5rem 0";
      }
    }

    if (isWhiteDay(date)) colorSpecialDay(button);

    if (checkifInclude(date)) {
      button.style.textDecoration = "underline";
      button.style.textDecorationColor = "var(--primary)";
      button.style.textDecorationThickness = "2px";
      button.style.textUnderlineOffset = "4px";
    }

    if (checkDateInRanges(date)) {
      button.style.backgroundColor = "#E3A7CB";
      button.style.color = "#fff";

      if (checkDateEqualStart(date)) {
        button.style.borderRadius = "0.5rem 0 0 0.5rem";
        button.style.position = "relative";
        attachIcon(button, "/images/icons/red-heart.png");
      }

      if (checkDateEqualEnd(date)) {
        button.style.borderRadius = "0 0.5rem 0.5rem 0";
      }
      if (checkNeedWhiteHeart(date)) {
        button.style.position = "relative";
        attachIcon(button, "/images/icons/white-heart.png");
      }

      if (checkNeedFlowers(date)) {
        button.style.position = "relative";
        attachIcon(button, "/images/icons/3-flowers.png", true);
      }
    }
  };

  const attachIcon = (button, src, large) => {
    let image = document.createElement("img");
    image.src = src;
    image.style.position = "absolute";
    image.style.top = large ? "-3px" : "3px";
    image.style.left = large ? "-4px" : "3px";
    image.style.width = large ? "2rem" : "1rem";
    button.appendChild(image);
  };

  const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };
  const addMonths = (date, num) => {
    var result = new Date(date);
    result.setMonth(result.getMonth() + num);
    return result;
  };

  const checkifInclude = (date) => {
    let match = false;
    for (let i = 0; i < underlinedDates.length; i++) {
      if (areEqualDates(date, underlinedDates[i])) {
        match = true;
        break;
      }
    }

    return match;
  };
  const checkNeedFlowers = (date) => {
    return (
      areEqualDates(addDays(date, 1), SecondRange[1]) ||
      areEqualDates(addDays(date, 1), SecondRangeNextMonth[1])
    );
  };

  const checkIfneighboringMonth = (button) => {
    return button.classList.contains(
      "react-calendar__month-view__days__day--neighboringMonth"
    );
  };

  const checkNeedWhiteHeart = (date) => {
    return (
      checkDateEqualEnd(date) ||
      areEqualDates(addDays(date, 2), SecondRange[1]) ||
      areEqualDates(addDays(date, 2), SecondRangeNextMonth[1])
    );
  };

  const isWhiteDay = (date) => {
    return areEqualDates(date, whiteDate) || areEqualDates(date, whiteDateNextMonth);
  };

  const checkDateEqualStart = (date) => {
    return (
      areEqualDates(date, SecondRange[0]) ||
      areEqualDates(date, SecondRangeNextMonth[0]) ||
      areEqualDates(date, nextMonthValue[0])
    );
  };

  const checkDateEqualEnd = (date) => {
    return (
      areEqualDates(date, SecondRange[1]) ||
      areEqualDates(date, SecondRangeNextMonth[1]) ||
      areEqualDates(date, nextMonthValue[1])
    );
  };

  const checkDateNextMonthRange = (date) => {
    return (
      isGreaterOrEqualDate(date, nextMonthValue[0]) &&
      isLessOrEqualDate(date, nextMonthValue[1])
    );
  };

  const checkDateInRanges = (date) => {
    return (
      (isGreaterOrEqualDate(date, SecondRange[0]) &&
        isLessOrEqualDate(date, SecondRange[1])) ||
      (isGreaterOrEqualDate(date, SecondRangeNextMonth[0]) &&
        isLessOrEqualDate(date, SecondRangeNextMonth[1]))
    );
  };

  const colorSpecialDay = (whiteButton) => {
    whiteButton.style.backgroundColor = "#fff";
    whiteButton.style.color = "var(--primary)";
    whiteButton.style.border = "1px solid var(--gray-5)";
    whiteButton.style.padding = "1px 0";
    whiteButton.style.margin = "3px 0";
    whiteButton.style.fontWeight = "bold";
  };

  const isGreaterOrEqualDate = (date1, date2) => {
    return date1.setHours(0, 0, 0, 0) >= date2.setHours(0, 0, 0, 0);
  };

  const isLessOrEqualDate = (date1, date2) => {
    return date1.setHours(0, 0, 0, 0) <= date2.setHours(0, 0, 0, 0);
  };

  const areEqualDates = (date1, date2) => {
    return date1.setHours(0, 0, 0, 0) === date2.setHours(0, 0, 0, 0);
  };

  const backMonth = () => {
    setDefaultStartDate(addMonths(defaultStartDate, -1));
  };

  const nextMonth = () => {
    setDefaultStartDate(addMonths(defaultStartDate, 1));
  };

  const getMonthNames = () => {
    let from = document.getElementsByClassName(
      "react-calendar__navigation__label__labelText"
    )[0].innerHTML;
    let to = document.getElementsByClassName("react-calendar__navigation__label__labelText")[1]
      .innerHTML;
    setMonthNames({ current: from, next: to });
  };

  return (
    <Styles>
      <div className="calender-section container">
        <div className="row">
          <div className="month-names">
            <div className="month-name">
              {monthNames.current}
              <img src="/images/icons/3flowers1.png" alt="icon" />
            </div>
            <div className="month-name doubleviewName">
              {monthNames.next}
              <img src="/images/icons/3flowers1.png" alt="icon" />
            </div>
          </div>

          <div className="col-12 calender-content">
            <Calendar
              onChange={onChange}
              value={value}
              showDoubleView
              showFixedNumberOfWeeks={false}
              activeStartDate={defaultStartDate}
              nextLabel={<MdArrowForwardIos onClick={nextMonth} />}
              prevLabel={
                <MdArrowBackIos className="navigation-button back-arrow" onClick={backMonth} />
              }
              prev2Label=""
              next2Label=""
            />
          </div>
        </div>
      </div>
    </Styles>
  );
}

export default Calenders;
