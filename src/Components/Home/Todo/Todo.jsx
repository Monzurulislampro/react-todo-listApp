import React, { useState } from 'react';

const Todo = () => {
  const initialFormData = {
    id: null,
    name: '',
    job: '',
    company: '',
    location: '',
    createdAt: '',
  };

  const [data, setData] = useState([
    {
      id: 1,
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      company: 'Littel, Schaden and Vandervort',
      location: 'Canada',
      createdAt: '12/16/2020',
    },
    // Add more data as needed
  ]);

  const [formData, setFormData] = useState(initialFormData);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const selectedItem = data.find((item) => item.id === id);
    setFormData(selectedItem);
    setIsEditing(true);
  };

  const handleSave = () => {
    // Implement save functionality
    const updatedData = data.map((item) => (item.id === formData.id ? formData : item));
    setData(updatedData);
    setFormData(initialFormData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-md mx-auto">
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name</th>
              <th>Job</th>
              <th>Company</th>
              <th>Location</th>
              <th>Created At</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.job}</td>
                <td>{item.company}</td>
                <td>{item.location}</td>
                <td>{item.createdAt}</td>
                <td>
                  <button className="btn btn-secondary" onClick={() => handleEdit(item.id)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-error" onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isEditing && (
        <div>
          <h2>Edit Form</h2>
          <form>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <br />

            <label>Job:</label>
            <input
              type="text"
              name="job"
              value={formData.job}
              onChange={handleInputChange}
            />
            <br />

            <label>Company:</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
            />
            <br />

            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />
            <br />

            <label>Created At:</label>
            <input
              type="text"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleInputChange}
            />
            <br />

            <button type="button" onClick={handleSave}>
              Save
            </button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Todo;
