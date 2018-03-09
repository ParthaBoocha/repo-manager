import React from 'react';

// const LoginButton = () => (
//     <Route render={({ history }) => (
//         <button onClick={() => history.push('/https://github.com')}>
//             Log in
//         </button>
//     )} />
// );

const LoginButton = () => (
    <button
        onClick={() => window.location=`https://github.com/login/oauth/authorize?client_id=0cfe94f780ef8adcba39
                                            &scope=user%20repo%20read:org
                                            &state=foobar
                                            &allow_signup=false`}>
        Log in
    </button>
);

export default LoginButton;