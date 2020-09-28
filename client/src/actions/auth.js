export const SET_TOKEN = 'SET_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';
const TOKEN_KEY = "ORDER_APP_TOKEN"

export const removeToken = () => ({
    type: REMOVE_TOKEN,
});

  export const setToken = token => ({
    type: SET_TOKEN,
    token,
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
      dispatch(setToken(token));
    }
};

export const logout = () => async (dispatch, getState) => {
    const { authentication: { token } } = getState();
    const response = await fetch(`/logout`, {
      method: 'delete',
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.ok) {
      window.localStorage.removeItem(TOKEN_KEY);
      dispatch(removeToken());
    }
};

export const signUp = () => (username, email, password) => async dispatch => {
    const response = await fetch('/sign-up', {
        method: 'post',
        body: JSON.stringify({ username, email, password }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        const { token } = await response.json();
        window.localStorage.setItem(TOKEN_KEY, token);
        dispatch(setToken(token));
    }
}