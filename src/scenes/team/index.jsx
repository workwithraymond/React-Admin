import {useEffect, useState} from "react";
import { Box, Typography, useTheme, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
// import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import {collection, getDocs, deleteDoc, doc} from "firebase/firestore";
import {db} from "../../firebase";

const Team = () => {
  const [users, setUsers] = useState([]);
  const [selectedIds, setIds] = useState([]);
 
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  useEffect(() => {
    getAllUsers();
  }, [])

  const getAllUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));

    const user_list = [];
    var id = 1;
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = id;
      data._id = doc.id;
      data.name = data.firstName + " " + data.lastName;
      data.access = "admin";
      id++;

      user_list.push(data);
    });

    setUsers(user_list);
  }

  const handleDelete = async () => {
    console.log(selectedIds);
    const selected = users.filter(row => selectedIds.includes(row.id));
    console.log(selected);

    for(var i = 0; i < selected.length; i++) {
      await deleteDoc(doc(db, "users", selected[i]._id));
    }

    await getAllUsers();
    setIds([]);
  }


  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        Delete
      </Button>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid 
          checkboxSelection 
          rows={users}           
          columns={columns} 
          onSelectionModelChange={(ids) => {
            console.log(ids);   
            setIds(ids) ;
          }}          
        />
      </Box>
    </Box>
  );
};

export default Team;