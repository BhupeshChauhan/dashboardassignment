/* eslint-disable @typescript-eslint/no-explicit-any */
import { UsersApi } from "../../../apis/UsersApi";
import CustomList from "../../../components/CustomPageLayout/CustomList";
import UserListColumns from "../../../data/list/userListColumns";

const UsersList = () => {
  return (
    <CustomList
    addLink={'/users/add'}
    addLinkTitle={'Add Users'}
    columnsDef={() => UserListColumns()}
    getAPI={(payload: any) => UsersApi.getAll(payload.page, payload.maxLimit)}
  />
  );
};

export default UsersList;
