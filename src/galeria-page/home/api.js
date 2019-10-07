import { get, baseUrl } from "../../lib/api";

export const verifyAuth = async () => {
  const url = `${baseUrl}/auth/verify`;
  const response = await get(url);
  return response;
};
