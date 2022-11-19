import { useEffect, useReducer } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, producto: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Details() {
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, producto }, dispatch] = useReducer(reducer, {
    producto: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/productos/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
    };
    fetchData();
  }, [slug]);

  return (
    loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
      ) : (
          <div>{producto.nombre }</div>
  )
  );
}
export default Details;
