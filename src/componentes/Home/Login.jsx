import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import logo1 from "../../assets/images/logo2.png";

function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log("onSubmit ejecutado");
    const jsonData = {
      username: data.username,
      password: data.password,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXNwYWNobyI6InRva2VuX2Rlc3BhY2hvIn0.fVh_o63FpirWQarv4QgnOTYXqwZzn2Wj6liiIo6gejA",
    };

    console.log("Datos del form:", jsonData);

    try {
      const response = await axios.post(
        "https://qic534o8o0.execute-api.us-east-1.amazonaws.com/validacionUsuarios/",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        navigate("/crud");
      } else {
        Swal.fire({
          title: "Error de inicio de sesión 🛻!",
          text: "Favor comprobar datos de ingreso",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    } catch (error) {
      console.log("Error en la solicitud: ", error);
      Swal.fire({
        title: "Error de inicio de sesión 🛻!",
        text: "Favor comprobar datos de ingreso",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <div className="bg-white p-12  rounded-lg relative">
      <div className="flex justify-center mb-4">
        <img src={logo1} alt="Logo" className="w-20 h-20" />
      </div>
      <h2 className="text-center text2xl font-bold mb-4">Inicio de Sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Usuario
          </label>
          <input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
            placeholder="Ingrese usuario"
            {...register("username", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Contraseña
          </label>
          <input
            type="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            {...register("password", { required: true })}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="text-white focus:outline-none font-medium r text-sm px-5 py-2.5 text-center bg-teal-500/80 hover:bg-teal-600 transition-all duration-500 flex w-full justify-center rounded-md"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
