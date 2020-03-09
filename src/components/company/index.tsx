import React, { useState } from "react";
import "./company.scss";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Company: React.FC = () => {
  const [signInName, setSignInName] = useState<string>("");
  const [signInEmail, setSignInEmail] = useState<string>("");
  const [signInMessage, setSignInMessage] = useState<string>("");
  return (
    <div className="company__container">
      <div className="company__block block1">
        <div className="company__block__text">
          <h2>[NAAM VAN KARTREKKER]</h2>
          <p>
            Duis vestibulum elit vel neque pharetra vulputate. Quisque
            scelerisque nisi urna. Duis rutrum non risus in imperdiet. Proin
            molestie accumsan nulla sit amet mattis. Ut vel tristique neque.
            Praesent purus eros, aliquet sit amet venenatis in, sodales in odio.
            Curabitur ac ligula et purus cursus vulputate accumsan sit amet
            erat. Vestibulum ac mauris ut nisl maximus porta eu a libero. In hac
            habitasse platea dictumst. Proin augue urna, pretium vel mauris sed,
            lobortis rutrum libero. Duis vestibulum elit vel neque pharetra
            vulputate. Quisque scelerisque nisi urna. Duis rutrum non risus in
            imperdiet. Proin molestie accumsan nulla sit amet mattis. Ut vel
            tristique neque. Praesent purus eros, aliquet sit amet venenatis in,
            sodales in odio. Curabitur ac ligula et purus cursus vulputate
            accumsan sit amet erat. Vestibulum ac mauris ut nisl maximus porta
            eu a libero. In hac habitasse platea dictumst. Proin augue urna,
            pretium vel mauris sed, lobortis rutrum libero. Duis vestibulum elit
            vel neque pharetra vulputate. Quisque scelerisque nisi urna. Duis
            rutrum non risus in imperdiet. Proin molestie accumsan nulla sit{" "}
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
          <h2>[BEDRIJFSNAAM]</h2>
          <p>
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
            quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs
            grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright
            vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.
            Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV
            quiz. How quickly daft jumping zebras jolt my wax bed. Flummoxed by
            job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad
            milk. A very bad quack might jinx zippy fowls. Few quips galvanized
            the mock jury box. Quick brown dogs jump over the lazy fox. The jay,
            pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a
            quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s
            job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex
            Trebek's fun TV quiz game. The quick, brown fox jumps over a lazy
            dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox
            whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for
            quick jigs vex! Fox nymphs grab quick-jived{" "}
          </p>
        </div>
      </div>
      <div className="company__block block3">
        <div className="company__block__text">
          <h2>Openingstijden</h2>
          <div className="company__block__text__opened">
            <div className="company__block__text__opened__day">Maandag</div>
            <div className="company__block__text__opened__time">
              8:00 - 15:00
            </div>
          </div>
          <div className="company__block__text__opened">
            <div className="company__block__text__opened__day">Dinsdag</div>
            <div className="company__block__text__opened__time">
              8:00 - 15:00
            </div>
          </div>
          <div className="company__block__text__opened">
            <div className="company__block__text__opened__day">Woensdag</div>
            <div className="company__block__text__opened__time">
              8:00 - 15:00
            </div>
          </div>
          <div className="company__block__text__opened">
            <div className="company__block__text__opened__day">Donderdag</div>
            <div className="company__block__text__opened__time">
              8:00 - 15:00
            </div>
          </div>
          <div className="company__block__text__opened">
            <div className="company__block__text__opened__day">Vrijdag</div>
            <div className="company__block__text__opened__time">
              8:00 - 15:00
            </div>
          </div>
          <div className="company__block__text__opened">
            <div className="company__block__text__opened__day">Zaterdag</div>
            <div className="company__block__text__opened__time">Gesloten</div>
          </div>
          <div className="company__block__text__opened">
            <div className="company__block__text__opened__day">Zondag</div>
            <div className="company__block__text__opened__time">Gesloten</div>
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
            Neem een kijkje bij [bedrijfsnaam]. Wil je op bezoek komen? Wij
            zullen je ontvangen met open armen!
          </p>
          <div className="company__contact__data__row">
            <div className="company__contact__data__row__icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            [Email]
          </div>
          <div className="company__contact__data__row">
            <div className="company__contact__data__row__icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            [Telefoon]
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
