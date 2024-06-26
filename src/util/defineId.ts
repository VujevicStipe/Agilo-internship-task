export const defineId = (id: string | undefined) => {
  return id ? id.replace(":", "") : console.log("can't extract id from url");
};
