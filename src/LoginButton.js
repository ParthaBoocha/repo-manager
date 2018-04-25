import React from 'react';
import { Button } from 'gestalt';

const LoginButton = () => (
    <Button
        onClick={() => window.location='https://github.com/login/oauth/authorize?client_id=0cfe94f780ef8adcba39&scope=repo%20user%20admin:org&state=foobar&allow_signup=false'}
        text="Log in"
        inline
    />
);

export default LoginButton;