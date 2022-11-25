import Axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Container} from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { Store } from "../../contexto/store";
// import { toast } from "react-toastify";
// import { getError } from "../../utils";

export default function SigninScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post("/usuarios/login", {
        email,
        password,
      });
      console.log(data);
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
    } catch (err) {
      alert("datos incorrecos");
      // toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  return (
    <Container className="small-container">
      <Helmet>
        <title>Iniciar Sesión</title>
      </Helmet>
      <h1 className="my-3">Iniciar Sesión</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo</Form.Label>
          {/* <Form.Control type="email" required /> */}
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          {/* <Form.Control type="password" required /> */}
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Iniciar Sesión</Button>
        </div>
        <div className="mb-3">
          Eres cliente nuevo?{" "}
          <Link to={`/signup?redirect=${redirect}`}>Crear Cuenta</Link>
        </div>
      </Form>
    </Container>
  );
}
