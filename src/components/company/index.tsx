import React, { useState } from "react";
import "./company.scss";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCookies } from "react-cookie";

const Company: React.FC = () => {
  const [signInName, setSignInName] = useState<string>("");
  const [signInEmail, setSignInEmail] = useState<string>("");
  const [signInMessage, setSignInMessage] = useState<string>("");

  const [cookies] = useCookies(["data"]);
  console.log("cookies :", cookies);

  return (
    <div className="company__container">
      <div className="company__block block1">
        <div className="company__block__text">
          <h2>
            {typeof cookies.name !== "undefined"
              ? cookies.name
              : "Er is geen naam ingevuld..."}
          </h2>
          <p>
            {typeof cookies.description !== "undefined"
              ? cookies.description
              : "Er is geen beschrijving ingevuld"}
          </p>
        </div>
        <div className="company__block__photo">
          <img
            alt="mockup profile"
            src={require("../assets/img/mockup-profile.png")}
          />
        </div>
      </div>
      <div className="company__block block2">
        <div className="company__block__photo">
          <img
            alt="mockup company"
            src={require("../assets/img/mockup-company.png")}
          />
        </div>
        <div className="company__block__text">
          <h2>
            {typeof cookies.companyName !== "undefined"
              ? cookies.companyName
              : "Er is geen bedrijfsnaam ingevuld..."}
          </h2>
          <p>
            {typeof cookies.companyDescription !== "undefined"
              ? cookies.companyDescription
              : "Er is geen bedrijfsBeschrijving ingevuld..."}
          </p>
        </div>
      </div>
      <div className="company__block block3">
        <div className="company__block__text">
          <h2>Openingstijden</h2>
          <div className="company__block__text__opened">
            <div className="company__block__text__opened__day">Maandag</div>
            <div className="company__block__text__opened__time">
              {typeof cookies.opened !== "undefined"
                ? cookies.opened[0].from
                : "Gesloten"}
              {typeof cookies.opened !== "undefined" ? (
                " - " + cookies.opened[0].to
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="company__block__text__opened">
            <div className="company__block__text__opened__day">Dinsdag</div>
            <div className="company__block__text__opened__time">
              {typeof cookies.opened !== "undefined"
                ? cookies.opened[1].from
                : "Gesloten"}
              {typeof cookies.opened !== "undefined" ? (
                " - " + cookies.opened[1].to
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="company__block__text__opened">
            <div className="company__block__text__opened__day">Woensdag</div>
            <div className="company__block__text__opened__time">
              {typeof cookies.opened !== "undefined"
                ? cookies.opened[2].from
                : "Gesloten"}
              {typeof cookies.opened !== "undefined" ? (
                " - " + cookies.opened[2].to
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="company__block__text__opened">
            <div className="company__block__text__opened__day">Donderdag</div>
            <div className="company__block__text__opened__time">
              {typeof cookies.opened !== "undefined"
                ? cookies.opened[3].from
                : "Gesloten"}
              {typeof cookies.opened !== "undefined" ? (
                " - " + cookies.opened[3].to
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="company__block__text__opened">
            <div className="company__block__text__opened__day">Vrijdag</div>
            <div className="company__block__text__opened__time">
              {typeof cookies.opened !== "undefined"
                ? cookies.opened[4].from
                : "Gesloten"}
              {typeof cookies.opened !== "undefined" ? (
                " - " + cookies.opened[4].to
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="company__block__text__opened">
            <div className="company__block__text__opened__day">Zaterdag</div>
            <div className="company__block__text__opened__time">
              {" "}
              {typeof cookies.opened !== "undefined"
                ? cookies.opened[5].from
                : "Gesloten"}
              {typeof cookies.opened !== "undefined" ? (
                " - " + cookies.opened[5].to
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="company__block__text__opened">
            <div className="company__block__text__opened__day">Zondag</div>
            <div className="company__block__text__opened__time">
              {" "}
              {typeof cookies.opened !== "undefined"
                ? cookies.opened[6].from
                : "Gesloten"}
              {typeof cookies.opened !== "undefined" ? (
                " - " + cookies.opened[6].to
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="company__block__photo">
          <img
            alt="mockup openingstijden"
            src={require("../assets/img/mockup-opened.png")}
          />
        </div>
      </div>
      <div className="company__contact">
        <div className="company__contact__data">
          <h2>Contact</h2>
          <p>
            Neem een kijkje bij {cookies.companyName} Wil je op bezoek komen?
            Wij zullen je ontvangen met open armen!
          </p>
          <div className="company__contact__data__row">
            <div className="company__contact__data__row__icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            {cookies.email}
          </div>
          <div className="company__contact__data__row">
            <div className="company__contact__data__row__icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            {cookies.phone}
          </div>
          <img
            alt="mockup google"
            className="googleImg"
            src={require("../assets/img/googleMockup.png")}
          />
        </div>
        <div className="company__contact__sign_up">
          <h2>Inschrijven</h2>
          <div>
            <h3>Naam</h3>
            <input
              type="text"
              value={signInName}
              onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                setSignInName(ev.target.value)
              }
            />
          </div>
          <div>
            <h3>Email</h3>
            <input
              type="text"
              value={signInEmail}
              onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                setSignInEmail(ev.target.value)
              }
            />
          </div>
          <div>
            <h3>Bericht</h3>
            <textarea
              value={signInMessage}
              onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>): void =>
                setSignInMessage(ev.target.value)
              }
            />
          </div>
          <button className="button">Verstuur</button>
        </div>
      </div>
    </div>
  );
};
export default Company;
