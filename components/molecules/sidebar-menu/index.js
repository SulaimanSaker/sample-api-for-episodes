import React, { useState, useEffect } from "react";
import { Styles } from "./styles";

function SidebarMenu({ setCurrentTab }) {

const [currentTabIndex, setCurrentTabIndex] = useState(0);
    
  useEffect(() => {
    setCurrentTab(currentTabIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTabIndex]);
    
  return (
    <Styles>
      <ul>
        <li className={`font-size-25 ${currentTabIndex == 0 && "tab-selected"}`}>
          <button onClick={() => setCurrentTabIndex(0)}>
            <img
              src="/images/icons/myAccount.png"
              alt="myaccount"
              className="sidebar__tab__icon"
            />
            <span>My account</span>
          </button>
        </li>
        <li className={`font-size-25 ${currentTabIndex == 1 && "tab-selected"}`}>
          <button onClick={() => setCurrentTabIndex(1)}>
            <img
              src="/images/icons/myGoals.png"
              alt="myaccount"
              className="sidebar__tab__icon"
            />
            <span>My goals</span>
          </button>
        </li>
        <li className={`font-size-25 ${currentTabIndex == 2 && "tab-selected"}`}>
          <button onClick={() => setCurrentTabIndex(2)}>
            <img
              src="/images/icons/myOrders.png"
              alt="myaccount"
              className="sidebar__tab__icon"
            />
            <span>My orders</span>
          </button>
        </li>
        <li className={`font-size-25 ${currentTabIndex == 3 && "tab-selected"}`}>
          <button onClick={() => setCurrentTabIndex(3)}>
            <img
              src="/images/icons/subscriptions.png"
              alt="myaccount"
              className="sidebar__tab__icon"
            />
            <span>subscriptions</span>
          </button>
        </li>
      </ul>
    </Styles>
  );
}

export default SidebarMenu;
