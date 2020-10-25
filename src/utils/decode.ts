import he from "he";

const decodeHTMLEntities = (str: string) => {
  return he.decode(str);
};

export default decodeHTMLEntities;
