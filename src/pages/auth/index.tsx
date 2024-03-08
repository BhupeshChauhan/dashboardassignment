/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import AnimationWapper from "../../common/PageAnimation";
import Login from "../../ui/AuthForm/Login";
import { useGlobalContext } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import LoginIllustriation from "../../assets/login.svg";

const UserAuth = ({ type }: { type: string }) => {
  const { userData } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(userData).length > 0) {
      navigate("/users/list");
    }
  }, []);

  return (
    <AnimationWapper keyValue={type}>
      <Grid container className="h-cover flex items-center justify-center">
        <Grid item lg={6} xs={12}>
          <Login type={type} />
        </Grid>
        <Grid item lg={6} className="hidden md:block">
          <div className="h-full w-full">
            <img src={LoginIllustriation} alt="LoginIllustriation" />
          </div>
        </Grid>
      </Grid>
    </AnimationWapper>
  );
};

export default UserAuth;
