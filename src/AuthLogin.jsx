import axios from "axios";
import Endpoint from '../src/endpoint'


const login = ( username, password) => {

    return axios
        .post(Endpoint + "v1/auth/login", {
            // fullName,
            username,
            password,
            // phoneNumber,
        })
        .then((response) => {
            if (response) {
                localStorage.setItem("token", JSON.stringify(response.data.item.token));
                // localStorage.setItem("userCurrentRole", JSON.stringify(response.data.role));
                // console.log(response)
            }
            return response;
        });
};
const AuthService = {
    login,
}
export default AuthService;