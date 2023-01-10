import { AsyncStorage } from "@react-native-community/async-storage";
import { post, get } from "./http";

const USER_TOKEN = "user_token";

export const loginUser = async (data) => {
  try {
    const response = await post("/api/:role/login", data);
    if (response.status === 200) {
      // Store the token in AsyncStorage
      await AsyncStorage.setItem(USER_TOKEN, response.data.token);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const getToken = async () => {
  const token = await AsyncStorage.getItem(USER_TOKEN);
  return token;
};

export const isAuthenticated = async () => {
  const token = await AsyncStorage.getItem(USER_TOKEN);
  if (token) {
    try {
      const response = await get("/api/user/me");
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
};
