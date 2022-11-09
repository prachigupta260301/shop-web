import { Navigate } from "react-router-dom";

export const ProtectedWrapper = ({ children }) => {
    if (localStorage.getItem("TOKEN")) {
        return children;
    } else {
        return <Navigate to="/login" replace />;
    }
}