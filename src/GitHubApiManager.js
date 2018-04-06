import GitHub from 'github-api';
import AuthenticationManager from "./AuthenticationManager";

const gh = () => new GitHub({
    token: AuthenticationManager.getAccessToken()
});

export default gh;