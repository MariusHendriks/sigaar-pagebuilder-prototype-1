import React from "react";

interface Props {
  data?: dayObj;
}
const OpenedRow: React.FC<Props> = ({ data }) => {
  console.log("data : " + data?.dayName, data);
  if (typeof data !== "undefined") {
    return (
      <div className="company__block__text__opened">
        <div className="company__block__text__opened__day">{data.dayName}</div>
        <div className="company__block__text__opened__time">
          {data.closed || data.from === "" || data.to === ""
            ? "Gesloten"
            : data.from + " - " + data.to}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
export default OpenedRow;
