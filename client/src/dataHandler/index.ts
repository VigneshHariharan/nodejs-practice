import { INote, IUser } from "types";

export const url = new URL("http://localhost:3001");
export const feeds = `${url}feeds`;
export const signin = `${url}signin`;
export const signup = `${url}signup`;

export const authKey = "authKey";

export const fetchFeeds = async () => {
  const res = await fetch(feeds);
  return res.json();
};

export const createPost = async (post: INote) => {
  const bearerToken = localStorage.getItem(authKey);

  const jsonPost = JSON.stringify(post);
  console.log('jsonPost : ',jsonPost)
  const res = await fetch(feeds, {
    method: "POST",
    body: jsonPost,
    headers: new Headers({
      Authorization: "Bearer " + bearerToken,
      "Content-Type": "application/json",
    }),

  });

  return res;
};

export const loginAsUser = async (user: IUser) => {
  const res = await fetch(signin, {
    method: "POST",
    body: JSON.stringify(user),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });

  const result: any = await res.json();
  localStorage.setItem(authKey, result?.accessToken);
  return result;
};

export const signUpAsUser = async (user: IUser) => {
  const res = await fetch(signup, {
    method: "POST",
    body: JSON.stringify(user),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });

  // it is a promise so need await
  const result: any = await res.json();
  localStorage.setItem(authKey, result?.accessToken);
  return result;
};
