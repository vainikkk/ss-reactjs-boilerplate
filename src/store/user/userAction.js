import userService from "services/userService";
import { setUserData, userLoading } from "./userSlice";

export const fetchUser = () => async (dispatch) => {
  dispatch(userLoading());
  const response = await userService.getUsers();
  dispatch(setUserData(response));
};
