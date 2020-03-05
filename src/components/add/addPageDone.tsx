import React from "react";

interface Props {
  days?: Array<dayObj>;
  adres?: string;
  phone?: string;
  languages?: string;
  name?: string;
}
const AddPageDone: React.FC<Props> = ({
  name,
  adres,
  days,
  phone,
  languages
}) => {
  return (
    <>
      {console.log("days :", days)}
      <h3>Gelukt!</h3>
      <p>Je hebt een pagina gemaakt voor {name}.</p>
      <h3>Informatie</h3>
      <p>Adres: {adres}</p>
      <p>Openingstijden: </p>
    </>
  );
};
export default AddPageDone;
