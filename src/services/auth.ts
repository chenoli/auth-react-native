interface IUser {
  name: string;
  email: string;
}

interface IResponse {
  token: string;
  user: IUser;
}

export function signIn(): Promise<IResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'c0f029e6-0cf2-41d9-92b9-54da33118185',
        user: {
          name: 'Carlos',
          email: 'carlos@rocketseat.com.br',
        },
      });
    }, 2000);
  });
}
