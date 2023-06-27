const bufferToString = (input) => {
  // Remove the initial '\x01\x00\x00\x00\x00\x00\x00 ' part
  const cleanedInput = input.replace(/^\x01\x00\x00\x00\x00\x00\x00 /, "");

  // Convert hexadecimal escape sequences to characters
  const convertedString = cleanedInput.replace(
    /\\x([0-9A-Fa-f]{2})/g,
    (_, hex) => String.fromCharCode(parseInt(hex, 16))
  );

  return convertedString;
};

export default bufferToString;
