import axios from "axios";

const login = async (user: { usernameOrEmail: string; password: string }) => {
  const { data } = await axios({
    method: "post",
    url: "auth/login",
    data: {
      ...user,
    },
  });

  if (!data.error && data.jwt) {
    localStorage.setItem("token", data.jwt);
    window.location.href = "/";
    return;
  }

  return data.error;
};

export { login };
