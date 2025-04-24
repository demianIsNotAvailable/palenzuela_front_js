import React, { useState } from "react";
import { createUser } from "../services/apiCalls";

const estados = ["Vivo", "Muerto", "Desconocido"];

const Section1 = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    afiliacion: "",
    descripcion: "",
    estado: "Vivo",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(formData)
      .then((response) => {
        setFormData({
          nombre: "",
          edad: "",
          afiliacion: "",
          descripcion: "",
          estado: "Vivo",
        });
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Edad</label>
        <input
          type="text"
          name="edad"
          value={formData.edad}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Afiliación</label>
        <input
          type="text"
          name="afiliacion"
          value={formData.afiliacion}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          rows={4}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
        <select
          name="estado"
          value={formData.estado}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {estados.map((estado) => (
            <option key={estado} value={estado}>
              {estado}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Guardar Persona
        </button>
      </div>
    </form>
  );
};

export default Section1;
