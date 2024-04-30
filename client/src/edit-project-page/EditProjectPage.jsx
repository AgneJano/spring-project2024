import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

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

function EditProjectPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [errors, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (id) {
      const fetchProject = async () => {
        try {
          const response = await axios.get(
            `http://localhost:1000/api/v1/planpro/projects/${id}`
          );
          setFormData({
            name: response.data.name,
            description: response.data.description,
          });
        } catch (error) {
          console.error("Error fetching project:", error);
        }
      };

      fetchProject();
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errors) {
      return;
    }

    try {
      await axios.patch(
        `http://localhost:1000/api/v1/planpro/projects/${id}`,
        formData
      );

      navigate(`/projects/${id}`); // Redirect to the project detail page or projects list
    } catch (error) {
      setErrors(error.toString());
      console.error("Error updating project:", error);
    }
  };

  return (
    <RegistrationContainer>
      <FormTitle>{id ? "Edit Project" : "Create New Project"}</FormTitle>
      <StyledForm onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Project Name:</Label>
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
        </FormField>
        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </RegistrationContainer>
  );
}

export default EditProjectPage;