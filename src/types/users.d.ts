type User = {
  id: number;
  name: string;
};

type UserPayload = {
  data: object;
};

type UsersInitialState = {
  usersStatus: string;
  users: User[];
  usersError: string;
  userStatus: string;
  user: object;
  userError: string;
};
