import { $fetch } from "../utils/fetch";

// 登录
export function getUserInfo() {
  return $fetch.get("/api/v1/auth/session").catch(err => {
    return {
      email: "rick_lilq@163.com",
      name: "rick"
    };
  });
}
export function logout() {
  return $fetch.del("/api/v1/auth");
}
