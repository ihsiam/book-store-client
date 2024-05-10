import { jwtDecode } from "jwt-decode";
export function useAuth() {
    //get token
    const token = localStorage.getItem("Token");

    // validate token
    if(token){
        // decode
        const user = jwtDecode(token);

        // exp check
        if(user.exp > Date.now()/1000){
            return user
        }else{
            return false
        }
    }else{
        return false
    }
    
}

export function logout() {
    // remove token
    localStorage.removeItem('Token');
    // set null token
    localStorage.setItem("Token", '');
}