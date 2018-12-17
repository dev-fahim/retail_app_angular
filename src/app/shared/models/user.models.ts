// All user related models

export interface UserCredentialsModel {
    username: string;
    email: string;
    password: string;
}

export interface UserDetailsModel {
    pk: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
}

export interface UserLoginResponseModel {
    token: string;
    user: UserDetailsModel;
}
