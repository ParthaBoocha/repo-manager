import Cookies from "js-cookie";

const isLoggedIn = () => { return Cookies.get('loggedIn'); };

const setLoggedIn = () => { Cookies.set('loggedIn', true); };

const setAccessToken = (token) => {
    Cookies.set('accessToken', token);
    setLoggedIn();
};

const getAccessToken = () => { return Cookies.get('accessToken'); };

const reset = () => {
    Cookies.remove('loggedIn');
    Cookies.remove('accessToken');
};

export default { isLoggedIn, setLoggedIn, setAccessToken, getAccessToken, reset };