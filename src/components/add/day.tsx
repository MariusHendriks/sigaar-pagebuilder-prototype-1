import React, { useState } from "react";

interface Props {
  dayName: string;
  setFunction: (day: dayObj) => void;
}

const Day: React.FC<Props> = ({ dayName, setFunction }) => {
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [closed, setClosed] = useState<boolean>(false);

  const pushData = () => {
    let closedSwith = !closed;

    let data: dayObj = {
      dayName,
      from,
      to,
      closed
    };

    setFunction(data);
  };

  return (
    <div className={"time "}>
      <h3>{dayName}</h3>
      <div className={"timeRow"}>
        <div className={closed ? "timeFromTo isClosed" : "timeFromTo"}>
          <p className="to">Vanaf</p>
          <input
            disabled={closed}
            type="time"
            value={from}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {
              setFrom(ev.target.value);
              pushData();
            }}
          />

          <p className="to">tot</p>
          <input
            disabled={closed}
            type="time"
            value={to}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {
              setTo(ev.target.value);
              pushData();
            }}
          />
        </div>

        <input
          className="closedCheckbox"
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {
            setClosed(ev.target.checked);
            pushData();
          }}
          type="checkbox"
          id="checkbox"
        />
      </div>
    </div>
  );
};
export default Day;
