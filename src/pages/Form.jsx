import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const Form = ({setFormOpen,setgreetOpen, onSubmit}) => {
  const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [languages, setLanguages] = useState([]);
  const validationfunction=()=>{
    if(firstName.length <3){
        alert("First name should be more than 3 characters");
        return false;
    }  if(lastName.length <3){  
        alert("Last name should be more than 3 characters");
        return false;
    }    if(email.length <3 || !email.includes("@")){   
        alert("Email is in wrong format");
        return false;}
         if(!gender){
            alert("Please choose any gender");
            return false;
        }  if (!termsAccepted){
            alert("Please accept the terms and conditions");
            return false;
        }
        if(!languages){
            alert("Please choose any language");
            return false;
        }
return true;
}
const handleLanguageChange = (lang) => {
    if (languages.includes(lang)) {
      setLanguages(languages.filter((l) => l !== lang));
    } else {
      setLanguages([...languages, lang]);
    }
  };

    const handleClose = () => {
        setFormOpen(false);
    };
    const handleDone = () => {
        if(validationfunction()){
const data ={
    name: `${firstName} ${lastName}`,
    gender,language: languages.join(", "),
    email
};
onSubmit(data);

            setFormOpen(false);
        setgreetOpen(true);


    }}
  return (
    <div className="fixed inset-0 bg-black/30 bg-opacity-20 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 relative shadow-xl">
        <button
          onClick={handleClose}
          type="button"
          className="absolute top-3 right-3 text-white bg-red-500 hover:bg-red-600 p-2 rounded-full"
        >
          <FaTimes />
        </button>

        <h1 className="text-xl font-bold mb-2">Get Started Today!</h1>
        <p className="text-sm text-gray-600 mb-4">
          Fill in your details and take control of your tasks.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex flex-col w-full">
            <label className="text-sm mb-1">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="border px-3 py-2 rounded"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm mb-1">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="border px-3 py-2 rounded"
            />
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm mb-2">Gender</p>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "Male"}
              />
              Male
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "Female"}
              />
              Female
            </label>
          </div>
        </div>

       <div className="mb-4">
  <p className="text-sm mb-2">Languages</p>
  <div className="flex gap-4 flex-wrap">
    <label className="flex items-center   gap-1">
      <input
        type="checkbox" value="English"
        onChange={ ()  => handleLanguageChange("English")}
              checked={languages.includes("English")}
      />
      English
    </label>
              <label className="flex items-center gap-1">
      <input
        type="checkbox"
              value="Hindi"
        onChange={() => handleLanguageChange("Hindi")}
        checked={languages.includes("Hindi")}
      />
      Hindi
    </label>
    <label className="flex items-center gap-1">
      <input
        type="checkbox"
              value="Marathi"
        onChange={() => handleLanguageChange("Marathi")}checked={languages.includes("Marathi")}
      />
      Marathi
    </label>
  </div>
</div>
        <div className="mb-4">
          <label className="text-sm mb-1 block">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border px-3 py-2 rounded w-full"
          />
        </div>

        <div className="flex items-start gap-2 mb-4">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
          />
          <p className="text-sm">
            I agree to the{" "}
            <a href="#" className="text-red-500 underline">
              terms and conditions
            </a>
          </p>
        </div>

        <button
          onClick={handleDone}
          className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600 transition"
        >
          Done
        </button>
      </div>
    </div>
  );
};
 export default Form;