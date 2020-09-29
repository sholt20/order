export const SET_TOKEN = 'SET_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const TOKEN_KEY = "ORDER_APP_TOKEN"

export const removeToken = () => ({
    type: REMOVE_TOKEN,
});

  export const setToken = (username, token) => ({
    type: SET_TOKEN,
    token,
    username
});

  export const loadToken = () => async dispatch => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
      dispatch(setToken(token));
    }
};

export const login = (username, password) => async dispatch => {
    const response = await fetch(`/api/login`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const { token } = await response.json();
      window.localStorage.setItem(TOKEN_KEY, token);
      dispatch(setToken(username, token));
    }
};

export const logout = () => async (dispatch, getState) => {
    window.localStorage.removeItem(TOKEN_KEY);
    dispatch(removeToken());
};

export const signUp = (username, email, password) => async dispatch => {
    const response = await fetch('/api/sign-up', {
        method: 'post',
        body: JSON.stringify({ username, email, password }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        const { token } = await response.json();
        window.localStorage.setItem(TOKEN_KEY, token);
        dispatch(setToken(username, token));
    }
}