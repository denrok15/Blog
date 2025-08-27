import { useUserStore } from "../store/UserStore.ts";
import { useState } from "react";
import { Header } from "client/components";

export function ChangeProfilePage() {
  const [bioinput, setBioInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [birthdayInput, setBirthdayInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [genderInput, setGenderInput] = useState("");
  const { setBio, setName, setBirthday, setLocation, setPhone, setGender } =
    useUserStore();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBio(bioinput);
    setName(nameInput);
    setBirthday(birthdayInput);
    setLocation(locationInput);
    setGender(genderInput);
    setPhone(phoneInput);
    alert("Данные сохранены");
  };
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          className={"mt-5 border border-black"}
          type="text"
          placeholder={"Описание"}
          value={bioinput}
          onChange={(e) => setBioInput(e.target.value)}
        />
        <input
          className={"mt-5 border border-black"}
          type="text"
          placeholder={"Имя"}
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <input
          className={"mt-5 border border-black"}
          type="text"
          placeholder={"Дата рождения"}
          value={birthdayInput}
          onChange={(e) => setBirthdayInput(e.target.value)}
        />
        <input
          className={"mt-5 border border-black"}
          type="text"
          placeholder={"Локация"}
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
        />
        <input
          className={"mt-5 border border-black"}
          type="text"
          placeholder={"Телефон"}
          value={phoneInput}
          onChange={(e) => setPhoneInput(e.target.value)}
        />
        <input
          className={"mt-5 border border-black"}
          type="text"
          placeholder={"Пол"}
          value={genderInput}
          onChange={(e) => setGenderInput(e.target.value)}
        />
        <button type={"submit"}>Сохранить</button>
      </form>
    </>
  );
}
