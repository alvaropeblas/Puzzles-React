import { USER_LOGIN, USER_REGISTER, USER_BY_ID, GET_RESERVA, CREATE_RESERVA, DELETE_RESERVA, CREATE_RESERVA_OUT } from './routes';

export const userRegister = async (userCredentials) => {
    try {
        const res = await fetch(USER_REGISTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userCredentials),
        });

        if (!res.ok) {
            throw new Error(`Error en la solicitud ${res.status}`);
        }

        const response = await res.json();

        return response;
    } catch (error) {

        throw new Error(`Error en el login de usuario ${error.message}`);
    }
};

export const userLogin = async (userCredentials) => {
    try {
        const res = await fetch(USER_LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userCredentials),
        });

        if (!res.ok) {
            throw new Error(`Error en la solicitud ${res.status}`);
        }

        const response = await res.json();
        const user = await userByID(response.token);

        return { user, token: response.token, status: response.status };
    } catch (error) {
        throw new Error(`Error en el login de usuario ${error.message}`);
    }
};

export const userByID = async (userToken) => {
    try {
        const res = await fetch(USER_BY_ID, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`,
            },
        });
        if (!res.ok) {
            throw new Error(`Error en la solicitud ${res.status}`);
        }
        const response = await res.json();
        return response.user;
    } catch (error) {
        throw new Error(`Error al obtener información del usuario ${error.message}`);
    }
};


export const crearReserva = async (userToken, reservaData) => {
    try {
        const res = await fetch(CREATE_RESERVA, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`,
            },
            body: JSON.stringify(reservaData)
        });
        if (!res.ok) {
            throw new Error(`Error en la solicitud ${res.status}`);
        }
        const response = await res.json();
        return response;
    } catch (error) {
        throw new Error(`Error al crear la reserva ${error.message}`);
    }
};

export const crearReservaOut = async (reservaData) => {
    try {
        const res = await fetch(CREATE_RESERVA_OUT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservaData)
        });
        if (!res.ok) {
            throw new Error(`Error en la solicitud ${res.status}`);
        }
        const response = await res.json();
        return response;
    } catch (error) {
        throw new Error(`Error al crear la reserva ${error.message}`);
    }
};

export const obtenerReservas = async (userToken) => {
    try {
        const res = await fetch(GET_RESERVA, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`,
            },
        });
        if (!res.ok) {
            throw new Error(`Error en la solicitud ${res.status}`);
        }
        const response = await res.json();
        return response;
    } catch (error) {
        throw new Error(`Error al crear la reserva ${error.message}`);
    }
};
export const borrarReserva = async (userToken, idReserva) => {
    try {
        const res = await fetch(DELETE_RESERVA + idReserva, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`,
            },
        });
        if (!res.ok) {
            throw new Error(`Error en la solicitud ${res.status}`);
        }
        const response = await res.json();
        return response;
    } catch (error) {
        throw new Error(`Error al crear la reserva ${error.message}`);
    }
};
