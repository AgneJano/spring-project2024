import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  max-width: 700px;
  width: 100%;
  padding: 50px 30px;
  line-height: 36px;
  font-size: 20px;
  color: #666666;
`;

const FormTitle = styled.p`
  color: #333333;
  font-weight: 400;
  font-size: 1.5rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormField = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;
`;

const Label = styled.label`
  height: 24px;
  margin-bottom: 7px;
  font-size: 16px;
`;

const Input = styled.input`
  height: 40px;
  padding: 5px;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 4px;
  outline: none;
  color: #333333;

  &:focus {
    border-color: #000;
  }
`;

const TextArea = styled.textarea`
  height: 200px;
  padding: 5px;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 4px;
  color: #333333;

  &:focus {
    border-color: #000;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 45px;
  padding: 10px;
  background-color: #ffc107;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.9rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #b38600;
  }
`;

const Select = styled.select`
  height: 40px;
  padding: 5px;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 4px;
  outline: none;
  color: #333333;

  &:focus {
    border-color: #000;
  }
`;

function EditTaskPage() {
  const navigate = useNavigate();
  const { projectId, taskId } = useParams();
  const [errors, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: '',
    priority: '',
  });

  useEffect(() => {
    if (taskId && projectId) {
      const fetchTask = async () => {
        try {
          const response = await axios.get(
            `http://localhost:1000/api/v1/planpro/projects/${projectId}/tasks/${taskId}`,
          );
          setFormData({
            name: response.data?.name || '',
            description: response.data?.description || '',
            status: response.data?.status || '',
            priority: response.data?.priority || '',
          });
        } catch (error) {
          console.error('Error fetching project:', error);
        }
      };

      fetchTask();
    }
  }, [projectId, taskId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      await axios.patch(`http://localhost:1000/api/v1/planpro/projects/${projectId}/tasks/${taskId}`, formData);

      navigate(`/projects/${projectId}/tasks/${taskId}`);
    } catch (error) {
      setErrors(error);
      console.error('Error updating task:', error);
    }
  };

  return (
    <RegistrationContainer>
      <FormTitle>Edit Task</FormTitle>
      <StyledForm onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Task Name:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            minLength={2}
            maxLength={50}
            required
          />
          {formData.name && formData.name.length === 0 && <span style={{ color: 'red' }}>Name is required.</span>}
          {formData.name && formData.name.length < 2 && (
            <span style={{ color: 'red' }}>Name must be at least 2 characters long.</span>
          )}
          {formData.name && formData.name.length > 50 && (
            <span style={{ color: 'red' }}>Name must be at most 50 characters long.</span>
          )}
        </FormField>
        <FormField>
          <Label htmlFor="description">Description:</Label>
          <TextArea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            minLength={2}
            maxLength={10000}
            required
          />
          {formData.description && formData.description.length === 0 && (
            <span style={{ color: 'red' }}>Description is required.</span>
          )}
          {formData.description && formData.description.length < 2 && (
            <span style={{ color: 'red' }}>Description must be at least 2 characters long.</span>
          )}
          {formData.description && formData.description.length === 10000 && (
            <span style={{ color: 'red' }}>Description must be at most 10000 characters long.</span>
          )}
        </FormField>

        <FormField>
          <Label htmlFor="status">Status:</Label>
          <Select id="status" name="status" value={formData.status} onChange={handleChange} required>
            <option value="">Select status</option>
            <option value="to do">To Do</option>
            <option value="in progress">In Progress</option>
            <option value="done">Done</option>
          </Select>
        </FormField>
        <FormField>
          <Label htmlFor="priority">Priority:</Label>
          <Select id="priority" name="priority" value={formData.priority} onChange={handleChange} required>
            <option value="">Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Select>
        </FormField>

        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </RegistrationContainer>
  );
}

export default EditTaskPage;
