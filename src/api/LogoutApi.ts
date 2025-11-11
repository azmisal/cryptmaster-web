import { createApiClient } from "./AuthApi"
import { useNavigate } from "react-router-dom";



export const loginApi = async (accessToken: string) => {
    const navigate = useNavigate();
    const apiClient = createApiClient(accessToken);

    try {
        await apiClient.get('/logout');
        navigate('/login');
    } catch (err) {
        console.log(err);
    }

}