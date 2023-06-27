import { Buffer } from "buffer";

const bufferToString = (inputString) => {
  console.log("in", inputString)
  inputString = inputString.trim();

  // Split the input string into an array of hexadecimal values
  const hexValues = inputString.split('\\x').filter(Boolean);

  // Convert hexadecimal values to decimal
  const decimalValues = hexValues.map((hex) => parseInt(hex, 16));

  // Convert decimal values to ASCII characters
  const readableString = String.fromCharCode(...decimalValues);

  return readableString;
};

export default bufferToString;
