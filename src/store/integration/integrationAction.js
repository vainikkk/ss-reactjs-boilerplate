import userService from "services/userService";
import { integrationLoading, setIntegrationList } from "./integrationSlice";

export const fetchIntegration = () => async (dispatch) => {
  dispatch(integrationLoading());
  const response = await userService.getUsers();
  dispatch(setIntegrationList(response));
};
