import React, { useState } from "react";
import styled from "styled-components";
import { colors, vars, spacings } from "../../vars/vars";
import { Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
const Day = styled.div``;

interface Props {
    nothingYet?: string;
}
const AddForm: React.FC<Props> = ({}) => {
    const [tabIndex, setTabIndex] = useState<number | undefined>(0);
    const [companyName, setCompanyname] = useState<string | undefined>("");
    const [companyAdres, setCompanyAdres] = useState<string | undefined>("");
    const [companyLanguages, setCompanyLanguages] = useState<
        string | undefined
    >("");
    const [companyPhone, setCompanyPhone] = useState<string | undefined>("");
    const [companyDescription, setCompanyDescription] = useState<
        string | undefined
    >("");
    const [mondayFrom, setMondayFrom] = useState<string | undefined>("");
    const [mondayTo, setMondayTo] = useState<string | undefined>("");
    const [mondayClosed, setMondayClosed] = useState<boolean>(false);

    const [tuesdayFrom, setTuesdayFrom] = useState<string | undefined>("");
    const [tuesdayTo, setTuesdayTo] = useState<string | undefined>("");
    const [tuesdayClosed, setTuesdayClosed] = useState<boolean | undefined>(
        false
    );

    const [wednesdayFrom, setWednesdayFrom] = useState<string | undefined>("");
    const [wednesdayTo, setWednesdayTo] = useState<string | undefined>("");
    const [wednesdayClosed, setWednesdayClosed] = useState<boolean | undefined>(
        false
    );

    const [thursdayFrom, setThursdayFrom] = useState<string | undefined>("");
    const [thursdayTo, setThursdayTo] = useState<string | undefined>("");
    const [thursdayClosed, setThursdayClosed] = useState<boolean | undefined>(
        false
    );

    const [fridayFrom, setFridayFrom] = useState<string | undefined>("");
    const [fridayTo, setFridayTo] = useState<string | undefined>("");
    const [fridayClosed, setFridayClosed] = useState<boolean | undefined>(
        false
    );

    const [saterdayFrom, setSaterdayFrom] = useState<string | undefined>("");
    const [saterdayTo, setSaterdayTo] = useState<string | undefined>("");
    const [saterdayClosed, setSaterdayClosed] = useState<boolean | undefined>(
        false
    );

    const [sundayFrom, setSundayFrom] = useState<string | undefined>("");
    const [sundayTo, setSundayTo] = useState<string | undefined>("");
    const [sundayClosed, setSundayClosed] = useState<boolean | undefined>(
        false
    );
    return (
        <Container>
            <form>
                <Form>
                    <Tabs selectedIndex={tabIndex}>
                        <TabPanel>
                            <h1>Bedrijf toevoegen</h1>
                            <div>
                                <h3>Naam</h3>
                                <input
                                    type="text"
                                    value={companyName}
                                    onChange={(
                                        ev: React.ChangeEvent<HTMLInputElement>
                                    ): void => setCompanyname(ev.target.value)}
                                />
                            </div>
                            <div>
                                <h3>Adres</h3>
                                <input
                                    type="text"
                                    value={companyAdres}
                                    onChange={(
                                        ev: React.ChangeEvent<HTMLInputElement>
                                    ): void => setCompanyAdres(ev.target.value)}
                                />
                            </div>
                            <div>
                                <h3>Welke talen worden er gesproken?</h3>
                                <input
                                    type="text"
                                    value={companyLanguages}
                                    onChange={(
                                        ev: React.ChangeEvent<HTMLInputElement>
                                    ): void =>
                                        setCompanyLanguages(ev.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <h3>Telefoonnummer</h3>
                                <input
                                    type="number"
                                    value={companyPhone}
                                    onChange={(
                                        ev: React.ChangeEvent<HTMLInputElement>
                                    ): void => setCompanyPhone(ev.target.value)}
                                />
                            </div>
                            <div>
                                <h3>Vertel wat over je bedrijf</h3>
                                <textarea
                                    value={companyDescription}
                                    onChange={(
                                        ev: React.ChangeEvent<
                                            HTMLTextAreaElement
                                        >
                                    ): void =>
                                        setCompanyDescription(ev.target.value)
                                    }
                                />
                            </div>
                            <ButtonContainer>
                                <ButtonNextStart onClick={() => setTabIndex(1)}>
                                    Volgende
                                </ButtonNextStart>
                            </ButtonContainer>
                        </TabPanel>
                        <TabPanel>
                            <h1>Bedrijf toevoegen</h1>
                            <div>
                                <h2>Wanneeer is {companyName} open</h2>
                            </div>
                            <Day>
                                Maandag
                                <Time>
                                    <Inputs>
                                        <input
                                            type="time"
                                            value={mondayFrom}
                                            onChange={(
                                                ev: React.ChangeEvent<
                                                    HTMLInputElement
                                                >
                                            ): void =>
                                                setMondayFrom(ev.target.value)
                                            }
                                        />
                                        tot
                                        <input
                                            type="time"
                                            value={mondayTo}
                                            onChange={(
                                                ev: React.ChangeEvent<
                                                    HTMLInputElement
                                                >
                                            ): void =>
                                                setMondayTo(ev.target.value)
                                            }
                                        />
                                    </Inputs>
                                    <input type="checkbox" />
                                </Time>
                            </Day>
                            <Day>
                                Dinsdag
                                <Time>
                                    <Inputs>
                                        <input
                                            type="time"
                                            value={tuesdayFrom}
                                            onChange={(
                                                ev: React.ChangeEvent<
                                                    HTMLInputElement
                                                >
                                            ): void =>
                                                setTuesdayFrom(ev.target.value)
                                            }
                                        />
                                        tot
                                        <input
                                            type="time"
                                            value={tuesdayTo}
                                            onChange={(
                                                ev: React.ChangeEvent<
                                                    HTMLInputElement
                                                >
                                            ): void =>
                                                setTuesdayTo(ev.target.value)
                                            }
                                        />
                                    </Inputs>
                                    <input type="checkbox" />
                                </Time>
                            </Day>
                            <Day>
                                Woensdag
                                <Time>
                                    <Inputs>
                                        <input
                                            type="time"
                                            value={wednesdayFrom}
                                            onChange={(
                                                ev: React.ChangeEvent<
                                                    HTMLInputElement
                                                >
                                            ): void =>
                                                setWednesdayFrom(
                                                    ev.target.value
                                                )
                                            }
                                        />
                                        tot
                                        <input
                                            type="time"
                                            value={wednesdayTo}
                                            onChange={(
                                                ev: React.ChangeEvent<
                                                    HTMLInputElement
                                                >
                                            ): void =>
                                                setWednesdayTo(ev.target.value)
                                            }
                                        />
                                    </Inputs>
                                    <input type="checkbox" />
                                </Time>
                            </Day>
                            <Day>
                                Donderdag
                                <Time>
                                    <Inputs>
                                        <input
                                            type="time"
                                            value={thursdayFrom}
                                            onChange={(
                                                ev: React.ChangeEvent<
                                                    HTMLInputElement
                                                >
                                            ): void =>
                                                setThursdayFrom(ev.target.value)
                                            }
                                        />
                                        tot
                                        <input
                                            type="time"
                                            value={thursdayTo}
                                            onChange={(
                                                ev: React.ChangeEvent<
                                                    HTMLInputElement
                                                >
                                            ): void =>
                                                setThursdayTo(ev.target.value)
                                            }
                                        />
                                    </Inputs>
                                    <input type="checkbox" />
                                </Time>
                            </Day>
                            <Day>
                                Vrijdag
                                <Time>
                                    <Inputs>
                                        <input
                                            type="time"
                                            value={fridayFrom}
                                            onChange={(
                                                ev: React.ChangeEvent<
                                                    HTMLInputElement
                                                >
                                            ): void =>
                                                setFridayFrom(ev.target.value)
                                            }
                                        />
                                        tot
                                        <input
                                            type="time"
                                            value={fridayTo}
                                            onChange={(
                                                ev: React.ChangeEvent<
                                                    HTMLInputElement
                                                >
                                            ): void =>
                                                setFridayTo(ev.target.value)
                                            }
                                        />
                                    </Inputs>
                                    <input type="checkbox" />
                                </Time>
                            </Day>
                            <Day>
                                Zaterdag
                                <Time>
                                    <Inputs>
                                        <input
                                            type="time"
                                            value={saterdayFrom}
                                            onChange={(
                                                ev: React.ChangeEvent<
                                                    HTMLInputElement
                                                >
                                            ): void =>
                                                setSaterdayFrom(ev.target.value)
                                            }
                                        />
                                        tot
                                        <input
                                            type="time"
                                            value={saterdayTo}
                                            onChange={(
                                                ev: React.ChangeEvent<
                                                    HTMLInputElement
                                                >
                                            ): void =>
                                                setSaterdayTo(ev.target.value)
                                            }
                                        />
                                    </Inputs>
                                    <input type="checkbox" />
                                </Time>
                            </Day>
                            <Day>
                                Zondag
                                <Time>
                                    <Inputs>
                                        <input
                                            type="time"
                                            value={sundayFrom}
                                            onChange={(
                                                ev: React.ChangeEvent<
                                                    HTMLInputElement
                                                >
                                            ): void =>
                                                setSundayFrom(ev.target.value)
                                            }
                                        />
                                        tot
                                        <input
                                            type="time"
                                            value={sundayTo}
                                            onChange={(
                                                ev: React.ChangeEvent<
                                                    HTMLInputElement
                                                >
                                            ): void =>
                                                setSundayTo(ev.target.value)
                                            }
                                        />
                                    </Inputs>
                                    <input type="checkbox" />
                                </Time>
                            </Day>
                            <ButtonContainer>
                                <ButtonBack onClick={() => setTabIndex(0)}>
                                    Vorige
                                </ButtonBack>
                                <ButtonNext onClick={() => setTabIndex(2)}>
                                    Volgende
                                </ButtonNext>
                            </ButtonContainer>
                        </TabPanel>
                        <TabPanel>
                            <h1>Bedrijf toevoegen</h1>
                            Klaar is Kees
                            <ButtonContainer>
                                <ButtonBack onClick={() => setTabIndex(1)}>
                                    Vorige
                                </ButtonBack>
                                <ButtonNext onClick={() => alert("joejoe")}>
                                    Volgende
                                </ButtonNext>
                            </ButtonContainer>
                        </TabPanel>
                    </Tabs>
                </Form>
            </form>
        </Container>
    );
};
export default AddForm;
