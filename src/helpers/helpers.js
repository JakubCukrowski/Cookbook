export const startWithUpper = (string) =>
  string.split("")[0].toUpperCase() +
  string.split("").slice(1, string.length).join("").toLowerCase();

export const shortenTheName = (string) => {
  if (string.length > 20) {
    return string.split("").slice(0, 20).join("") + "...";
  }

  return string
};
