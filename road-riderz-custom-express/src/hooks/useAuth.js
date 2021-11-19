import { useContext } from "react";
import { AuthContex } from "../ContextAPI/AuthProvider";

const useAuth = () => useContext(AuthContex);

export { useAuth };
