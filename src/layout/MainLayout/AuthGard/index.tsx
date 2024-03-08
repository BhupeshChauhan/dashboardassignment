/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useGlobalContext } from '../../../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const AuthGard = ({ children }: any) => {
  const { userData } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(userData).length === 0) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  return <div>{children}</div>;
};

export default AuthGard;
