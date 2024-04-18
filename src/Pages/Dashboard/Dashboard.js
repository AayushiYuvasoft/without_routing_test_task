import { Box,Button,Typography } from "@mui/material";
import { getTableLists } from "../../Redux/Slices/DashboardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Dashboard.scss';
import pendingIcon from '../../Assets/images/pending-icon.png'
import definationIcon from '../../Assets/images/defination-icon.png'
import plusIcon from '../../Assets/images/plus-icon.png'

const Dashboard = () => {
    const dispatch = useDispatch();
    const getLists = useSelector((state) => state?.dashboard.isDashboardData);

  useEffect(() => {
    dispatch(getTableLists());
  }, []);

  return (
    <Box className="dashbaord-wrapper" sx={{padding: '0 64px'}}>
        <Typography variant="h2" sx={{fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '16px'}}>Admin</Typography>
        <Box sx={{display: 'flex', gap: '15px'}}>
            <Button  variant="primary" className="btn-wrapper users-btn">User</Button>
            <Button  variant="primary" className="btn-wrapper users-group-btn">User Groups</Button>
        </Box>

        <Box display={'flex'} justifyContent={'space-between'} mb={'1rem'}>
            <Box className="status-wrapper">
                <Box className="status defination-status"><img src={pendingIcon} /> Definitions - 58</Box>
                <Box className="status pending-status"><img src={definationIcon} /> Pending</Box>
            </Box>
            <Box className="add-user"><img src={plusIcon} /> Add User</Box>

        </Box>


      <TableContainer component={Paper} className="table-wrapper">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Id</TableCell>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">Email Id</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getLists && getLists?.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.name}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.phone}</TableCell>
              <TableCell align="right">{item.website}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
};
export default Dashboard;
