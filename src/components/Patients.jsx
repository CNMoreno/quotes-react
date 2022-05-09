import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Patients = ({ patient, setPatient, deletePatient }) => {
  const { namePet, nameOwner, email, startDate, symptom, id } = patient;

  const handleDelete = () => {
    Swal.fire({
      title: "Estás seguro de eliminar?",
      text: "No puedes revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4f46e5",
      cancelButtonColor: " #dc2626",
      confirmButtonText: "Si, eliminalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePatient(id);
        Swal.fire("Eliminado!", "Tu cita se ha eliminado.", "success");
      }
    });
  };
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{namePet}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{nameOwner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Correo: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Alta: {""}
        <span className="font-normal normal-case">{startDate}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{symptom}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPatient(patient)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Patients;
