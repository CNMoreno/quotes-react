import { useState, useEffect } from "react";
import Error from "./Error";
import { v1 as uuidv1 } from "uuid";

const Form = ({ patients, patient, setPatients, setPatient }) => {
  const [namePet, setNamePet] = useState("");
  const [nameOwner, setNameOwner] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [symptom, setSymptom] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setNamePet(patient.namePet);
      setNameOwner(patient.nameOwner);
      setEmail(patient.email);
      setStartDate(patient.startDate);
      setSymptom(patient.symptom);
    }
  }, [patient]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([namePet, nameOwner, email, startDate, symptom].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    const objPatients = {
      namePet,
      nameOwner,
      email,
      startDate,
      symptom,
    };

    if (patient.id) {
      objPatients.id = patient.id;

      const patientsUpdate = patients.map((patientState) =>
        patientState.id === patient.id ? objPatients : patientState
      );
      setPatients(patientsUpdate);
      setPatient({});
    } else {
      objPatients.id = uuidv1();
      setPatients([...patients, objPatients]);
    }

    setNamePet("");
    setNameOwner("");
    setEmail("");
    setStartDate("");
    setSymptom("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-xl mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Adiministralos</span>
      </p>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && <Error message="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            htmlFor="namePet"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="namePet"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={namePet}
            onChange={(e) => setNamePet(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="nameOwner"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="nameOwner"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nameOwner}
            onChange={(e) => setNameOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Correo electronico
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email contacto propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="startDate"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de alta
          </label>
          <input
            id="startDate"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptom"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="symptom"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={patient.id ? "Editar paciente" : "Añadir paciente"}
        ></input>
      </form>
    </div>
  );
};

export default Form;
