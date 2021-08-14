const url = new URL("http://localhost:3001");

export const fetchFeeds = async () => {
  const res = await fetch(`${url}feeds`);
  return res.json();
};
