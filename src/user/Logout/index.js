import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Logout = () => {
    const { user } = useContext(AuthContext);
    return (
        <h1>logout User Id: {user?.userInfo?.userId}</h1>
    )
}
export default Logout;