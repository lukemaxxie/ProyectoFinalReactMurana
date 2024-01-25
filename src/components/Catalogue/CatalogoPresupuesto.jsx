import React, { useState } from 'react';

export const CatalogoPresupuesto = () => {
  const [formData, setFormData] = useState({
    persons: '',
    services: {
      lunch: false,
      musicalizacion: false,
      decoracion: false,
      fotografia: false,
    },
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? { ...prevData[name], [value]: checked } : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation for the number of persons
    const persons = parseInt(formData.persons, 10);
    if (isNaN(persons) || persons <= 50) {
      setError('Number of persons must be greater than 50.');
      return;
    }

    // Send the form data via email (you might need to implement a backend service for this)

    // Reset form data and error after successful submission
    setFormData({
      persons: '',
      services: {
        lunch: false,
        musicalizacion: false,
        decoracion: false,
        fotografia: false,
      },
    });
    setError('');
  };

  return (
    <div>
      <h2>Catalogo Presupuesto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="persons">Number of Persons:</label>
          <input
            type="number"
            id="persons"
            name="persons"
            value={formData.persons}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Services:</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="services"
                value="lunch"
                checked={formData.services.lunch}
                onChange={handleInputChange}
              />
              Lunch
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="services"
                value="musicalizacion"
                checked={formData.services.musicalizacion}
                onChange={handleInputChange}
              />
              Musicalizacion
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="services"
                value="decoracion"
                checked={formData.services.decoracion}
                onChange={handleInputChange}
              />
              Decoracion
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="services"
                value="fotografia"
                checked={formData.services.fotografia}
                onChange={handleInputChange}
              />
              Fotografia
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};
export default CatalogoPresupuesto;
