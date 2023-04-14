import { Buffer } from "buffer";

const bufferToString = (bufferData) => {
  const buffer = Buffer.from(bufferData.data);
  // eslint-disable-next-line no-control-regex
  const readableString = buffer.toString("utf-8").replace(/[\x00-\x1F]/g, "");
  return readableString;
};

export default bufferToString;
