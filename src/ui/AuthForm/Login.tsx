import { Box, Stack, InputAdornment } from '@mui/material';
import { MdEmail } from 'react-icons/md';
import { TbPasswordMobilePhone } from 'react-icons/tb';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomTextField from '../../formComponent/CustomTextField';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchUser, getSelectedUser, getUserStatus } from '../../redux/reducers/users';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContext';

interface loginType {
  type?: string;
}

const Login = ({ type }: loginType) => {
  const navigate = useNavigate();
  const { setUserData } = useGlobalContext();
  const dispatch = useAppDispatch();
  const userStatus = useAppSelector(getUserStatus);
  const selectedUser = useAppSelector(getSelectedUser);

  console.log(userStatus)
  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(fetchUser());
    }
  }, [userStatus, dispatch]);

  console.log(selectedUser);
  const handleSubmit = async (values: object) => {
    console.log(values);
    setUserData(selectedUser);
    navigate(`/users/list`);
  };

  const formik = useFormik({
    initialValues: {
      email: "julio.stanley@example.com",
      password: "killme",
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .required('Password is required')
    }),
    onSubmit: handleSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit} className=' md:w-[80%] p-10 bg-white rounded-lg shadow-xl'>
      <Stack>
        <Box>
          <h1 className='text-4xl font-gelasio capitalize mt-10 mb-14 text-center'>
            {type === 'sign-in' ? 'Welcome Back' : 'Join Us Today'}
          </h1>
        </Box>
        <Box mt='25px'>
          <CustomTextField
            id='email'
            variant='outlined'
            name='email'
            placeholder='Email'
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <MdEmail />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box mt='25px'>
          <CustomTextField
            id='password'
            variant='outlined'
            name='password'
            type='password'
            placeholder='Password'
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <TbPasswordMobilePhone />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Stack>
      <Box>
        <button type='submit' className='btn-dark center mt-14 w-full mb-10'>
          {type ? type.replace('-', ' '): null}
        </button>
      </Box>
    </form>
  );
};

export default Login;
