import React, { useEffect, useState } from "react";
import { deleteEvent, getAllEvents, updateEvent } from "../services/apiCalls"; // Assuming you have this

const Section4 = () => {
  const [events, setEvents] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  const fetchEvents = async () => {
    const data = await getAllEvents();
    setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleChange = (id, field, value) => {
    setEvents((prev) =>
      prev.map((event) =>
        event._id === id ? { ...event, [field]: value } : event
      )
    );
  };

  const handleSave = (id) => {
    const updated = events.find((e) => e._id === id);
    updateEvent(updated._id, updated)
      .then((response) => {
        setExpandedId(null);
      })
      .catch((error) => {
        console.error("Error updating event:", error);
      });
  };

    const handleDelete = (id) => {
      const confirmDelete = window.confirm(
        "¿Estás seguro de que quieres borrar este incidente?"
      );
      if (confirmDelete) {
        deleteEvent(id)
          .then((response) => {
            setEvents((prev) => prev.filter((event) => event._id !== id));
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
          });
      }
    };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      {events?.map((event) => (
        <div
          key={event._id}
          className="border border-gray-300 rounded p-4 shadow-sm"
        >
          <button
            onClick={() => handleExpand(event._id)}
            className="w-full text-left text-lg font-semibold text-indigo-700 hover:underline"
          >
            {event.incidente}
          </button>

          {expandedId === event._id && (
            <div className="mt-4 space-y-3">
              <input
                type="text"
                value={event.incidente}
                onChange={(e) =>
                  handleChange(event._id, "incidente", e.target.value)
                }
                className="w-full border rounded px-3 py-2"
                placeholder="Incidente"
              />
              <input
                type="text"
                value={event.zona}
                onChange={(e) =>
                  handleChange(event._id, "zona", e.target.value)
                }
                className="w-full border rounded px-3 py-2"
                placeholder="Zona"
              />
              <textarea
                value={event.descripcion}
                onChange={(e) =>
                  handleChange(event._id, "descripcion", e.target.value)
                }
                className="w-full border rounded px-3 py-2"
                rows={3}
                placeholder="Descripción"
              ></textarea>
              <button
                onClick={() => handleSave(event._id)}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
              >
                Guardar Cambios
              </button>
              <button
                onClick={() => handleDelete(event._id)}
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

export default Section4;
