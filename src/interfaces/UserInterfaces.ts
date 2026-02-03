
export interface IUser {
    user_Id: string;
    username: string;
    fname: string;
    lname: string;
    email: string;
    password: string;
    refreshToken?: string | null;
    refreshTokenExpiresAt?: Date | null;
    createdAt?: Date;
}

export interface IUserSignup {
    fname: string;
    lname: string;
    email: string;
    username: string;
    password: string;
}


export interface IUserLogin {
    email: string;
    password: string;
}