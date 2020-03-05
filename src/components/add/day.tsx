import React, { useState } from "react";
import styled from "styled-components";

const Time = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  input {
    width: 5%;
  }
`;
const Inputs = styled.div`
  line-height: 43px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  input {
    width: 90px;
    text-align: center;
  }
`;

interface Props {
  dayName: string;
  setFunction: (day: dayObj) => void;
}

const Day: React.FC<Props> = ({ dayName, setFunction }) => {
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [closed, setClosed] = useState<boolean>(false);

  const pushData = () => {
    let data: dayObj = {
      dayName,
      from,
      to,
      closed
    };

    setFunction(data);
  };

  return (
    <>
      {dayName}
      <Time>
        <Inputs>
          <input
            type="time"
            value={from}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {
              setFrom(ev.target.value);
            }}
          />
          tot
          <input
            type="time"
            value={to}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {
              setTo(ev.target.value);
              pushData();
            }}
          />
        </Inputs>
        <input
          defaultChecked={closed}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {
            setClosed(ev.target.checked);
            pushData();
          }}
          type="checkbox"
        />
      </Time>
    </>
  );
};
export default Day;
