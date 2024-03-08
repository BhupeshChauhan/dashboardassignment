/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridColDef } from "@mui/x-data-grid";
import { format, parseISO } from 'date-fns';

const UserListColumns = () => {

    const listColumns: GridColDef[] = [
        {
          field: 'profilePicture',
          headerName: 'Profile Picture',
          flex: 1,
          renderCell: (params) => {
            return <img src={params?.row?.picture?.medium} className="aspect-square w-20" width={50}/>;
          },
          sortable: false,
        },
        {
          field: 'name',
          headerName: "User's Name",
          flex: 1,
          renderCell: (params) => {
            return <p>{params?.row?.name?.first} {params?.row?.name?.last}</p>;
          },
          sortable: false,
        },
        {
          field: 'location',
          headerName: "User's Location",
          flex: 1,
          renderCell: (params) => {
            return <p>{params?.row?.location.city}, {params?.row?.location.state}</p>;
          },
          sortable: false,
        },
        {
          field: 'email',
          headerName: "User's Email",
          flex: 1,
          renderCell: (params) => {
            return <p>{params.row.email}</p>;
          },
          sortable: false,
        },
        {
          field: 'phone',
          headerName: "User's Phone",
          flex: 1,
          sortable: false,
        },
        {
          field: 'registered',
          headerName: 'Registered At',
          flex: 1,
          renderCell: (params: any) => {
            return <>{format(parseISO(params?.row?.registered?.date), 'MMMM dd, yyyy')}</>;
          },
          sortable: false,
        },
      ];
    return listColumns
}

export default UserListColumns
