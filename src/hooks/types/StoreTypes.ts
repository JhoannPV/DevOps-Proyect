import type { store } from "../../store";

export type RootState = ReturnType<typeof store.getState>

export interface LoginParams {
    email: string;
    password: string;
}

export interface RegisterParams {
    name: string;
    email: string;
    password: string;
}

export interface ErrorResponseRegister {
    response: {
        data?: {
            error: string
        }
    }
}

export interface ErrorResponseLogin {
    response: {
        data?: {
            errors: {
                email: {
                    msg: string
                },
                password: {
                    msg: string
                },
            }
        }
    }
}