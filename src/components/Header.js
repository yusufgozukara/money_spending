import React from "react";
import { moneyFormat } from "../helpers";

const Header = ({ money, total }) => {
  return (
    <>
      {total > 0 && money - total !== 0 && (
        <div className="header">
          Harcayacak <span>${moneyFormat(money - total)}</span> paranız
          bulunmaktadır...
        </div>
      )}
      {total === 0 && (
        <div className="header">
          Harcamak için <span>${moneyFormat(money)}</span> paranız
          bulunmaktadır...
        </div>
      )}
      {money - total === 0 && (
        <div className="header">Paran bitti... Çalış çalış çalış...</div>
      )}
      <style jsx>
        {`
          .header {
            background: linear-gradient(to bottom, orange, yellow);
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: darkgray;
            font-size: 24px;
            letter-spacing: 1px;
          }
          .header span {
            margin: 0 10px;
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
};

export default Header;
