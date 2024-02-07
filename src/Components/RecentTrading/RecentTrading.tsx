import React, { useEffect, useState } from "react";
import { StyledRecentTrading } from "./RecentTrading.styled";


function RecentTrading() {

  const[isactive, setIsActive] = useState<string>("");

  const buttonHandler = (buttonName) => {
        setIsActive(buttonName)
    }
        

  useEffect(() => {
    console.log(isactive);
  },[isactive]);

  return (
    <StyledRecentTrading>
      <div className="wrap">
        <div className="name">
          <h2>Recent Trading Activities</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div className="buttons">
          <button onClick={() => buttonHandler("Montly")} className={isactive === "Montly"? "isActive" : "" }>Monthly</button>
          <button onClick={() => buttonHandler("Weekly")} className={isactive === "Weekly"? "isActive" : "" }>Weekly</button>
          <button onClick={() => buttonHandler("Today")} className={isactive === "Today"? "isActive" : "" }>Today</button>
        </div>
      </div>
      <div className="table">
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>24h%</th>
            <th>7d%</th>
            <th>Market Cap <span>i</span></th>
            <th>Volume(24h) <span>i</span></th>
          </tr>
          <tr>
            <td><img src="https://www.svgrepo.com/show/484569/coin.svg" alt="coin" /> Bitcoin <button>Buy</button></td>
            <td>40.000,86</td>
            <td>0.00%</td>
            <td>0.00%</td>
            <td>$151.1515.1515.155</td>
            <td><p>$151.1515.1515.155</p>
                <span>1515151 BTC</span>
            </td>
          </tr>
          <tr>
            <td ><img src="https://www.svgrepo.com/show/484569/coin.svg" alt="coin" /> Bitcoin <button>Buy</button></td>
            <td>40.000,86</td>
            <td>40.00%</td>
            <td>0.00%</td>
            <td>$151.1515.1515.155</td>
            <td><p>$151.1515.1515.155</p>
                <span>1515151 BTC</span></td>
          </tr>
          <tr>
            <td><img src="https://www.svgrepo.com/show/484569/coin.svg" alt="coin" /> Bitcoin <button>Buy</button></td>
            <td>40.000,86</td>
            <td>0.00%</td>
            <td>0.00%</td>
            <td>$151.1515.1515.155</td>
            <td><p>$151.1515.1515.155</p>
                <span>1515151 BTC</span></td>
          </tr>
          <tr>
            <td><img src="https://www.svgrepo.com/show/484569/coin.svg" alt="coin" /> Bitcoin <button>Buy</button></td>
            <td>40.000,86</td>
            <td>0.00%</td>
            <td>0.00%</td>
            <td>$151.1515.1515.155</td>
            <td><p>$151.1515.1515.155</p>
                <span>1515151 BTC</span></td>
          </tr>
          <tr>
            <td className="last"><img src="https://www.svgrepo.com/show/484569/coin.svg" alt="coin" /> Bitcoin <button>Buy</button></td>
            <td className="last">40.000,86</td>
            <td className="last">40.00%</td>
            <td className="last">0.00%</td>
            <td className="last">$151.1515.1515.155</td>
            <td className="last"><p>$151.1515.1515.155</p>
                <span>1515151 BTC</span></td>
          </tr>
        </table>
      </div>
    </StyledRecentTrading>
  );
}

export default RecentTrading;
