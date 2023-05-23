import React from "react";

const Header = ({ money, total }) => {
  return (
    <>
      <div>
        {total > 0 && money - total !== 0 && (
          <div>Harcamak için $({money - total}) paranız bulunmaktadır...</div>
        )}
        {total === 0 && (
          <div>Harcamak için $({money}) paranız bulunmaktadır...</div>
        )}
        {money - total === 0 && <div>Paran bitti... Çalış çalış çalış...</div>}
      </div>
    </>
  );
};

export default Header;
