import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export function LoginProvider(props) {
	const [isLogin, setLogin] = useState(
		window.localStorage.getItem('login') || false
	);

	const changeLogin = () => {
		window.localStorage.setItem('login', true);
		setLogin(true);
	};

	return (
		<LoginContext.Provider value={{ isLogin, changeLogin }}>
			{props.children}
		</LoginContext.Provider>
	);
}
