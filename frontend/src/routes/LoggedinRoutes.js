import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";

export default function LoggedinRoutes() {
    const { user } = useSelector((state) => ({ ...state }))
    return user ? <Outlet /> : <Login />;
}
