import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import styles from "./LoginForm.module.css";
import { loginUser } from "../../redux/auth/operations";
import { toast } from 'react-toastify';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const data = await dispatch(
        loginUser({
          email: values.email,
          password: values.password
        })
      ).unwrap();

      // Зберігаємо токен
      localStorage.setItem("token", data.token);
      

      // Зберігаємо об’єкт користувача для хедера
      // data.user має містити { name, email, id }
      localStorage.setItem("user", JSON.stringify(data.user));

      resetForm();
      navigate("/");
    } catch (error) {
      console.log("Login error:", error);

const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Відправляємо тільки потрібні поля
      const payload = {
        email: values.email,
        password: values.password,
      };
      await dispatch(loginUser(payload)).unwrap();
      toast.success('Login successful', { position: 'top-right' });
      resetForm();
      
      // Редірект на головну або на попередню сторінку
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (error) {
      const errorMessage = error || 'Login failed';
      toast.error(errorMessage, { position: 'top-right' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="email">Enter your email address</label>
              <Field
                type="email"
                name="email"
                placeholder="email@gmail.com"
                className={styles.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="password">Enter your password</label>
              <div className={styles.passwordWrapper}>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="********"
                  className={styles.input}
                />
                <button
                  type="button"
                  className={styles.eyeButton}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className={styles.error}
              />
            </div>

            <button
              type="submit"
              className={styles.button}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading..." : "Login"}
            </button>

            <p className={styles.registerText}>
              Don’t have an account?{" "}
              <Link to="/auth/register" className={styles.registerLink}>
                Register
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
