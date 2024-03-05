import React, { useState } from "react";
import CardInput from "../components/CardInput";

interface User {
  name: string;
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<User>({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://pandela-youtube.onrender.com/api/^auth/register\.(?P<format>[a-z0-9]+)/?$ [name='auth-register-list']", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("DATA:", data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="register-form">
      <CardInput
        inputsData={[
          { title: "Ваше имя", type: "text", name: "name" },
          { title: "Придумайте никнейм", type: "text", name: "username" },
          { title: "Почта", type: "email", name: "email" },
          { title: "Пароль", type: "password", name: "password" },
        ]}
        formTitle="Регистрация"
        buttonText="Зарегистрироваться"
        to="/login"
        linkText="Уже зарегистрированы? Войти"
        function={handleSubmit}
      />
    </div>
  );
};

export default Register;
