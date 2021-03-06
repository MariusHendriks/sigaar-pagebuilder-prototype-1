import React, { useState, useEffect } from "react";
import { Tabs, TabPanel, TabList, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Day from "./day";
import "./add.scss";
import { Redirect, Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const AddForm: React.FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [cookies, setCookie, removeCookie] = useCookies(["data"]);
  const [personalName, setPersonalName] = useState<string>("");
  const [personalDescription, setPersonalDescription] = useState<string>("");
  const [zzp, setIsZzp] = useState<boolean>(false);

  const [companyEmail, setCompanyEmail] = useState<string>("");
  const [companyPhone, setCompanyPhone] = useState<string>("");
  const [companyName, setCompanyname] = useState<string>("");
  const [companyAdres, setCompanyAdres] = useState<string>("");
  const [companyDescription, setCompanyDescription] = useState<string>("");
  const [companyLink, setCompanyLink] = useState<string>("");

  const [days, setDays] = useState<dayObj[]>([]);
  console.log("days :", days);
  const setCookies = () => {
    setCookie("name", personalName, { path: "/" });
    setCookie("email", companyEmail, { path: "/" });
    setCookie("phone", companyPhone, { path: "/" });
    setCookie("description", personalDescription, { path: "/" });
    setCookie("companyName", companyName, { path: "/" });
    setCookie("companyAdres", companyAdres, { path: "/" });
    setCookie("companyDescription", companyDescription, { path: "/" });
    setCookie("companyLink", companyLink, { path: "/" });
    setCookie("opened", days, { path: "/" });
    setCookie("zzp", zzp, { path: "/" });
  };

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
      const to = "";
      const from = "";
      const closed = false;
      let day: dayObj = { dayName, to, from, closed };
      newState?.push(day);
      if (newState !== days) {
        setDays(newState);
      }
    }
  });
  const handleClickNextTab = (isZzp: boolean) => {
    setTabIndex(tabIndex + 1);
    if (isZzp) {
      setIsZzp(true);
    }
  };
  useEffect(() => {}, [days]);

  const setDayData = (day: dayObj) => {
    const index = days.findIndex(d => d.dayName === day.dayName);
    let state = [...days];

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
              <Tab></Tab>
            </TabList>
            <TabPanel>
              <div className="tab">
                <h1>Persoonlijke informatie</h1>
                <div>
                  <h3>Naam</h3>
                  <input
                    type="text"
                    value={personalName}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                      setPersonalName(ev.target.value)
                    }
                  />
                </div>

                <div>
                  <h3>Vertel wat over jezelf</h3>
                  <textarea
                    className="long"
                    placeholder="Wie ben jij? Waar kom je vandaan? Wat doe je in je vrije tijd?"
                    value={personalDescription}
                    onChange={(
                      ev: React.ChangeEvent<HTMLTextAreaElement>
                    ): void => setPersonalDescription(ev.target.value)}
                  />
                </div>
              </div>
            </TabPanel>
            {/* Freelancer of niet */}
            <TabPanel>
              <div className="freelancerContainer">
                <h1>Maak een keuze...</h1>
                <div className="freelancers">
                  <div className="openContainer">
                    <img
                      alt="freelancer"
                      className="freelancerContainer__img"
                      src={require("../assets/img/freelance.png")}
                    />
                    <h2>Ik ben een freelancer/zzp-er</h2>
                    <p>Bij deze keuze heb je geen openingstijden</p>
                    <div
                      onClick={() => handleClickNextTab(true)}
                      className="buttons__next freelancerNextButton"
                    >
                      Klik hier
                    </div>
                  </div>

                  <div className="openContainer">
                    <img
                      alt="ondernemer"
                      className="freelancerContainer__img"
                      src={require("../assets/img/ondernemer.png")}
                    />
                    <h2>Ik ben een ondernemer</h2>
                    <p>Bij deze keuze heb je wel openingstijden</p>
                    <div
                      onClick={() => handleClickNextTab(false)}
                      className="buttons__next freelancerNextButton"
                    >
                      Klik hier
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setTabIndex(tabIndex - 1)}
                  className="buttons__previous freelancerBackButton "
                >
                  Stap Terug
                </div>
              </div>
            </TabPanel>
            {/* Bedrijf */}
            <TabPanel>
              <div className="tab">
                <h1>Bedrijf/evenement informatie</h1>
                <div>
                  <h3>Naam van het bedrijf/activiteit</h3>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                      setCompanyname(ev.target.value)
                    }
                  />
                </div>
                <div>
                  <h3>Vertel wat over het bedrijf/activiteits</h3>
                  <textarea
                    placeholder="Wat doet je bedrijf of activiteit?"
                    value={companyDescription}
                    onChange={(
                      ev: React.ChangeEvent<HTMLTextAreaElement>
                    ): void => setCompanyDescription(ev.target.value)}
                  />
                </div>
                <div className="photoBox">
                  <div className="uploadIcon">
                    <img
                      alt="upload icon"
                      className="uploadImg"
                      src={require("../assets/img/uploadImg-oranje.png")}
                    />
                  </div>
                  <h3 className="uploadText">Upload een logo (Optioneel)</h3>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              {tabIndex === 3 ? (
                <>{zzp ? setTabIndex(tabIndex + 1) : null}</>
              ) : (
                <></>
              )}

              {zzp ? (
                <></>
              ) : (
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
              )}
            </TabPanel>

            {/* Contact */}
            <TabPanel>
              <div className="tab">
                <h1>Contact</h1>
                <div>
                  <h3>Email</h3>
                  <input
                    type="text"
                    value={companyEmail}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                      setCompanyEmail(ev.target.value)
                    }
                  />
                </div>
                <div>
                  <h3>Telefoonnummer</h3>
                  <input
                    type="text"
                    value={companyPhone}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                      setCompanyPhone(ev.target.value)
                    }
                  />
                </div>
                <div>
                  <h3>Website Link (optioneel)</h3>
                  <input
                    type="text"
                    value={companyLink}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                      setCompanyLink(ev.target.value)
                    }
                  />
                </div>
                <h3>Adres</h3>
                <input
                  type="text"
                  value={companyAdres}
                  onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                    setCompanyAdres(ev.target.value)
                  }
                />
                <img
                  className="googleImg"
                  alt="google mockup"
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
                      alt="upload icon"
                      className="uploadImg"
                      src={require("../assets/img/uploadImg-blue.png")}
                    />
                  </div>
                  <h3 className="uploadText">
                    Upload een afbeelding Voor de persoonlijke Informatie.
                  </h3>
                </div>
                <div className="photoBox">
                  <div className="uploadIcon">
                    <img
                      alt="upload icon"
                      className="uploadImg"
                      src={require("../assets/img/uploadImg-blue.png")}
                    />
                  </div>
                  <h3 className="uploadText">
                    Upload een afbeelding Voor de bedrijfs Informatie.
                  </h3>
                </div>
                <div className="photoBox">
                  <div className="uploadIcon">
                    <img
                      alt="upload icon"
                      className="uploadImg"
                      src={require("../assets/img/uploadImg-blue.png")}
                    />
                  </div>
                  <h3 className="uploadText">
                    Upload een afbeelding naar keuze
                  </h3>
                </div>
              </div>
            </TabPanel>
          </Tabs>
          {tabIndex !== 1 ? (
            <div className="buttons">
              {tabIndex > 0 ? (
                <>
                  {tabIndex === 5 && zzp ? (
                    <div
                      className="buttons__previous"
                      onClick={() => setTabIndex(tabIndex - 2)}
                    >
                      Vorige
                    </div>
                  ) : (
                    <div
                      className="buttons__previous"
                      onClick={() => setTabIndex(tabIndex - 1)}
                    >
                      Vorige
                    </div>
                  )}
                </>
              ) : (
                <div></div>
              )}

              {tabIndex === 4 ? (
                <Link to="/company/1">
                  <div onClick={() => setCookies()} className="buttons__next">
                    Bekijk het resultaat
                  </div>
                </Link>
              ) : (
                <div
                  className="buttons__next"
                  onClick={() => setTabIndex(tabIndex + 1)}
                >
                  Volgende stap
                </div>
              )}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </form>
    </div>
  );
};
export default AddForm;
