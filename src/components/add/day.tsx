import React, { useState, useEffect } from "react";

interface Props {
    dayName: string;
    setFunction: (day: dayObj) => void;
}

const Day: React.FC<Props> = ({ dayName, setFunction }) => {
    const [from, setFrom] = useState<string>("09:00");
    const [to, setTo] = useState<string>("18:00");
    const [closed, setClosed] = useState<boolean>(false);
    const [test, setTest] = useState<boolean>(false);
    const pushData = () => {
        let data: dayObj = {
            dayName,
            from,
            to,
            closed
        };

        setFunction(data);
    };

    if (!test) {
        pushData();
        setTest(true);
    }
    return (
        <div className="time">
            <h3>{dayName}</h3>
            <div className="timeRow">
                <div className="timeFromTo">
                    <input
                        type="time"
                        value={from}
                        onChange={(
                            ev: React.ChangeEvent<HTMLInputElement>
                        ): void => {
                            setFrom(ev.target.value);
                        }}
                    />
                    <p className="to">tot</p>
                    <input
                        type="time"
                        value={to}
                        onChange={(
                            ev: React.ChangeEvent<HTMLInputElement>
                        ): void => {
                            setTo(ev.target.value);
                            pushData();
                        }}
                    />
                </div>
                <div className="round">
                    <input
                        onChange={(
                            ev: React.ChangeEvent<HTMLInputElement>
                        ): void => {
                            setClosed(ev.target.checked);
                            pushData();
                        }}
                        type="checkbox"
                        id="checkbox"
                    />
                    <label htmlFor="checkbox"></label>
                </div>
            </div>
        </div>
    );
};
export default Day;
