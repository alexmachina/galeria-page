import { post, baseUrl } from "../../../lib/api";

export const authenticateUser = async userCredentials => {
  const url = `${baseUrl}/auth/login`;
  const response = await post(url, userCredentials);
  return response;
};
