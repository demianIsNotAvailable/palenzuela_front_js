import React, { useEffect, useState } from "react";
import { deleteUser, getAllUsers, updateUser } from "../services/apiCalls";

const estados = ["Vivo", "Muerto", "Desconocido"];

const Section2 = () => {
  const [users, setUsers] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  const fetchUsers = async () => {
    const data = await getAllUsers();
    console.log("Fetched users:", data);
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleChange = (id, field, value) => {
    setUsers((prev) =>
      prev.map((person) =>
        person._id === id ? { ...person, [field]: value } : person
      )
    );
  };

  const handleSave = (id) => {
    const updatedPerson = users.find((p) => p._id === id);
    console.log("Saving:", updatedPerson);
    updateUser(updatedPerson._id, updatedPerson).then((response) => {
      console.log("User updated successfully:", response);
      // Optionally reset the form or show a success message
    });
    // TODO: Call your update service
  };

  // function that shows a confirmation dialog before deleting a user
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que quieres borrar este usuario?"
    );
    if (confirmDelete) {
      deleteUser(id)
        .then((response) => {
          console.log("User deleted successfully:", response);
          setUsers((prev) => prev.filter((person) => person._id !== id));
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    }
  };
  
  return (
    <div className='space-y-4 max-w-md mx-auto'>
      {users?.map((person) => (
        <div
          key={person._id}
          className='border border-gray-300 rounded p-4 shadow-sm'
        >
          <button
            onClick={() => handleExpand(person._id)}
            className='w-full text-left text-lg font-semibold text-blue-700 hover:underline'
          >
            {person.nombre}
          </button>

          {expandedId === person._id && (
            <div className='mt-4 space-y-3'>
              <input
                type='text'
                value={person.edad}
                onChange={(e) =>
                  handleChange(person._id, "edad", e.target.value)
                }
                className='w-full border rounded px-3 py-2'
                placeholder='Edad'
              />
              <input
                type='text'
                value={person.afiliacion}
                onChange={(e) =>
                  handleChange(person._id, "afiliacion", e.target.value)
                }
                className='w-full border rounded px-3 py-2'
                placeholder='Afiliación'
              />
              <textarea
                value={person.descripcion}
                onChange={(e) =>
                  handleChange(person._id, "descripcion", e.target.value)
                }
                className='w-full border rounded px-3 py-2'
                rows={3}
                placeholder='Descripción'
              ></textarea>
              <select
                value={person.estado}
                onChange={(e) =>
                  handleChange(person._id, "estado", e.target.value)
                }
                className='w-full border rounded px-3 py-2'
              >
                {estados.map((estado) => (
                  <option key={estado} value={estado}>
                    {estado}
                  </option>
                ))}
              </select>
              <button
                onClick={() => handleSave(person._id)}
                className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
              >
                Guardar Cambios
              </button>
              <button
                onClick={() => handleDelete(person._id)}
                className='bg-blue-600 text-red px-4 py-2 rounded hover:bg-blue-700 transition'
              >
                BORRAR
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Section2;
