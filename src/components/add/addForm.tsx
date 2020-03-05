import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors, vars, spacings } from "../../vars/vars";
import { Tabs, TabPanel, TabList, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Day from "./day";
import AddPageDone from "./addPageDone";

const Container = styled.div`
  width: 42%;
  background-color: ${colors.white};
`;
const Form = styled.div`
  padding: 4% 6%;

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  h2 {
    padding-top: ${spacings.small};
    padding-bottom: ${spacings.small};
  }
  h3 {
    padding-top: ${spacings.small};
  }
  input {
    border-radius: ${vars.borderRadius};
    width: 100%;
    background-color: ${colors.greyLight};
    border: 1px solid ${colors.greyBorder};
    height: 43px;
    padding-left: ${spacings.extraSmall};
    color: ${colors.grey};
    &:focus {
      border: 1px solid ${colors.blue};
    }
  }
  textarea {
    border-radius: ${vars.borderRadius};
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    background-color: ${colors.greyLight};
    border: 1px solid ${colors.greyBorder};
    min-height: 86px;
    padding-left: ${spacings.extraSmall};
    color: ${colors.grey};
    &:focus {
      border: 1px solid ${colors.blue};
    }
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const ButtonNext = styled.div`
  width: 40%;
  background-color: ${colors.blueDarker};
  color: ${colors.white};
  height: 40px;
  line-height: 40px;
  border-radius: ${vars.borderRadius};
  text-align: center;
  margin: ${spacings.medium} 0;
  cursor: pointer;
`;
const ButtonNextStart = styled.div`
  width: 40%;
  background-color: ${colors.blueDarker};
  color: ${colors.white};
  height: 40px;
  line-height: 40px;
  border-radius: ${vars.borderRadius};
  text-align: center;
  margin: ${spacings.medium} 0 ${spacings.medium} auto;
  cursor: pointer;
`;
const ButtonBack = styled.div`
  width: 40%;
  cursor: pointer;
  background-color: ${colors.grey};
  color: ${colors.white};
  height: 40px;
  line-height: 40px;
  border-radius: ${vars.borderRadius};
  text-align: center;
  margin: ${spacings.medium} 0;
`;

const AddForm: React.FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [companyName, setCompanyname] = useState<string | undefined>("");
  const [companyAdres, setCompanyAdres] = useState<string | undefined>("");
  const [companyLanguages, setCompanyLanguages] = useState<string | undefined>(
    ""
  );
  const [companyPhone, setCompanyPhone] = useState<string | undefined>("");
  const [companyDescription, setCompanyDescription] = useState<
    string | undefined
  >("");

  const [days, setDays] = useState<dayObj[]>([]);

  const weekDays = [
    "maandag",
    "dinsdag",
    "woensdag",
    "donderdag",
    "vrijdag",
    "zaterdag",
    "zondag"
  ];
  weekDays.forEach(dayName => {
    if (days.length <= 6) {
      const newState = days;
      let day: dayObj = { dayName };
      newState?.push(day);
      if (newState !== days) {
        setDays(newState);
      }
    }
  });

  useEffect(() => {}, [days]);

  const setDayData = (day: dayObj) => {
    const index = days.findIndex(d => d.dayName === day.dayName);
    const state = [...days];
    state[index] = day;
    setDays(state);
  };
  let currentTabindex = tabIndex;
  return (
    <Container>
      <form>
        <Form>
          <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
            <TabList className="none">
              <Tab></Tab>
              <Tab></Tab>
              <Tab></Tab>
            </TabList>
            <TabPanel>
              <h1>Bedrijf toevoegen</h1>
              <div>
                <h3>Naam</h3>
                <input
                  type="text"
                  value={companyName}
                  onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                    setCompanyname(ev.target.value)
                  }
                />
              </div>
              <div>
                <h3>Adres</h3>
                <input
                  type="text"
                  value={companyAdres}
                  onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                    setCompanyAdres(ev.target.value)
                  }
                />
              </div>
              <div>
                <h3>Welke talen worden er gesproken?</h3>
                <input
                  type="text"
                  value={companyLanguages}
                  onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                    setCompanyLanguages(ev.target.value)
                  }
                />
              </div>
              <div>
                <h3>Telefoonnummer</h3>
                <input
                  type="number"
                  value={companyPhone}
                  onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                    setCompanyPhone(ev.target.value)
                  }
                />
              </div>
              <div>
                <h3>Vertel wat over je bedrijf</h3>
                <textarea
                  value={companyDescription}
                  onChange={(
                    ev: React.ChangeEvent<HTMLTextAreaElement>
                  ): void => setCompanyDescription(ev.target.value)}
                />
              </div>
            </TabPanel>
            <TabPanel>
              <h1>Bedrijf toevoegen</h1>
              <div>
                <h2>Wanneeer is {companyName} open</h2>
              </div>
              <Day setFunction={setDayData} dayName={"maandag"} />
              <Day setFunction={setDayData} dayName={"dinsdag"} />
              <Day setFunction={setDayData} dayName={"woensdag"} />
              <Day setFunction={setDayData} dayName={"donderdag"} />
              <Day setFunction={setDayData} dayName={"vrijdag"} />
              <Day setFunction={setDayData} dayName={"zaterdag"} />
              <Day setFunction={setDayData} dayName={"zondag"} />
            </TabPanel>
            <TabPanel>
              <h1>Bedrijf toevoegen</h1>
              <AddPageDone
                days={days}
                adres={companyAdres}
                phone={companyPhone}
                languages={companyLanguages}
                name={companyName}
              />
            </TabPanel>
          </Tabs>
          <ButtonContainer>
            {tabIndex > 0 ? (
              <ButtonBack onClick={() => setTabIndex(tabIndex - 1)}>
                Vorige
              </ButtonBack>
            ) : null}

            <ButtonNext onClick={() => setTabIndex(tabIndex + 1)}>
              Volgende
            </ButtonNext>
          </ButtonContainer>
        </Form>
      </form>
    </Container>
  );
};
export default AddForm;
