import React, { useState, useEffect } from "react";
import { colors, vars, spacings } from "../../vars/vars";
import { Tabs, TabPanel, TabList, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Day from "./day";
import AddPageDone from "./addPageDone";
import "./add.scss";

const AddForm: React.FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(4);
  const [companyName, setCompanyname] = useState<string | undefined>(
    "Noedels Noedels"
  );
  const [companyAdres, setCompanyAdres] = useState<string | undefined>(
    "Keslaerstraat 1a, 5465rl, Maastricht"
  );
  const [companyLanguages, setCompanyLanguages] = useState<string | undefined>(
    "Nederlands, Limburgs"
  );
  const [companyPhone, setCompanyPhone] = useState<string | undefined>(
    "061234271"
  );
  const [companyDescription, setCompanyDescription] = useState<
    string | undefined
  >(
    "De gedachte “wat van ver komt is lekker” is inmiddels achterhaald. Voor de lekkerste producten hoeft u namelijk niet verder te kijken dan uw eigen omgeving! Met 20 vestigingen is Amazing Oriental de grootste Aziatische supermarktketen in Nederland. Met een assortiment van meer dan 10.000 authentieke A-merken uit Azië heeft Amazing Oriental het ruimste aanbod voor een One- Stop -Shop. Ontdek het gemak van instant noedels in meer dan 200 soorten verschillende smaken en de heerlijk gevarieerde Dim Sum hapjes in de vriesvakken die u als brunch voor in het weekend kunt gebruiken."
  );

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
  let leftSideContent = <></>;
  return (
    <div className={`addform__container step` + tabIndex}>
      <div className={`addform__left img` + tabIndex}>{leftSideContent}</div>
      <form className="addform__right">
        <div>
          <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
            <TabList className="none">
              <Tab></Tab>
              <Tab></Tab>
              <Tab></Tab>
              <Tab></Tab>
              <Tab></Tab>
            </TabList>
            <TabPanel>
              <div className="tab">
                <h1>Persoonlijke informatie</h1>
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
                  <h3>Email</h3>
                  <input
                    type="text"
                    value={companyAdres}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                      setCompanyAdres(ev.target.value)
                    }
                  />
                </div>
                <div>
                  <h3>Telefoonnummer</h3>
                  <input
                    type="text"
                    value={companyPhone}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                      setCompanyLanguages(ev.target.value)
                    }
                  />
                </div>

                <div>
                  <h3>Vertel wat over jezelf</h3>
                  <textarea
                    value={companyDescription}
                    onChange={(
                      ev: React.ChangeEvent<HTMLTextAreaElement>
                    ): void => setCompanyDescription(ev.target.value)}
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab">
                <h1>Bedrijf/evenement informatie</h1>
                <div>
                  <h3>Naam van het bedrijf/activiteit</h3>
                  <input
                    type="text"
                    value={companyPhone}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                      setCompanyLanguages(ev.target.value)
                    }
                  />
                </div>
                <div>
                  <h3>Vertel wat over het bedrijf/activiteits</h3>
                  <textarea
                    value={companyDescription}
                    onChange={(
                      ev: React.ChangeEvent<HTMLTextAreaElement>
                    ): void => setCompanyDescription(ev.target.value)}
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab">
                <h1>Openingstijden</h1>
                <h3 className="closed">gesloten</h3>
                <Day setFunction={setDayData} dayName={"maandag"} />
                <Day setFunction={setDayData} dayName={"dinsdag"} />
                <Day setFunction={setDayData} dayName={"woensdag"} />
                <Day setFunction={setDayData} dayName={"donderdag"} />
                <Day setFunction={setDayData} dayName={"vrijdag"} />
                <Day setFunction={setDayData} dayName={"zaterdag"} />
                <Day setFunction={setDayData} dayName={"zondag"} />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab">
                <h1>Openingstijden</h1>
                <h3>Adres</h3>
                <input
                  type="text"
                  value={companyPhone}
                  onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                    setCompanyLanguages(ev.target.value)
                  }
                />
                <img
                  className="googleImg"
                  src={require("../assets/img/googleMockup.png")}
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab">
                <h1>Foto's toevoegen</h1>
                <div className="photoBox">
                  <div className="uploadIcon">
                    <img
                      className="uploadImg"
                      src={require("../assets/img/uploadImg.png")}
                    />
                  </div>
                  <h3 className="uploadText">
                    Upload een afbeelding Voor de persoonlijke Informatie.
                  </h3>
                </div>
                <div className="photoBox">
                  <div className="uploadIcon">
                    <img
                      className="uploadImg"
                      src={require("../assets/img/uploadImg.png")}
                    />
                  </div>
                  <h3 className="uploadText">
                    Upload een afbeelding Voor de bedrijfs Informatie.
                  </h3>
                </div>
                <div className="photoBox">
                  <div className="uploadIcon">
                    <img
                      className="uploadImg"
                      src={require("../assets/img/uploadImg.png")}
                    />
                  </div>
                  <h3 className="uploadText">
                    Upload een afbeelding Voor de openingstijden.
                  </h3>
                </div>
              </div>
            </TabPanel>
          </Tabs>
          <div className="buttons">
            {tabIndex > 0 ? (
              <div
                className="buttons__previous"
                onClick={() => setTabIndex(tabIndex - 1)}
              >
                Vorige
              </div>
            ) : (
              <div></div>
            )}

            <div
              className="buttons__next"
              onClick={() => setTabIndex(tabIndex + 1)}
            >
              Volgende stap
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddForm;

/*
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
*/
