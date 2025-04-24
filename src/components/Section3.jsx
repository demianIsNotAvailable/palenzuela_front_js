import React, { useState } from "react";
import { createEvent } from "../services/apiCalls";

const Section3 = () => {
  const [formData, setFormData] = useState({
    incidente: "",
    zona: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createEvent(formData)
      .then((response) => {
        setFormData({
          incidente: "",
          zona: "",
          descripcion: "",
        });
      })
      .catch((error) => {
        console.error("Error creating event:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Incidente</label>
        <input
          type="text"
          name="incidente"
          value={formData.incidente}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Zona</label>
        <input
          type="text"
          name="zona"
          value={formData.zona}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 resize-none"
          rows={4}
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Guardar Evento
      </button>
    </form>
  );
};

export default Section3;
