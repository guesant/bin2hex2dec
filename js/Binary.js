const reverseBinaryString = (binaryString) =>
  binaryString
    .split("")
    .map((b) => ({ 0: "1", 1: "0" }[String(b)]))
    .join("");

export const toUnsignedBinary = (number, bits = 0) =>
  Math.abs(number).toString(2).padStart(bits, "0").slice(-Math.abs(bits));

export const toSignedBinary = (number, bits) => {
  const asUnsignedBinary = toUnsignedBinary(Math.abs(number), bits);
  if (number < 0) {
    const reversedBinary = reverseBinaryString(asUnsignedBinary);
    const reversedBinaryPlusOne = parseInt(reversedBinary, 2) + 1;
    return reversedBinaryPlusOne.toString(2).slice(-bits);
  }
  return asUnsignedBinary;
};

export const fromUnsignedBinary = (binaryString, bits = 0) => {
  return parseInt(binaryString.padStart(bits, "0").slice(-bits), 2);
};

export const fromSignedBinary = (binaryString, bits) => {
  const [binaryComplement, ...rest] = binaryString
    .padStart(bits, "0")
    .slice(-Math.abs(bits));
  const negativeComplement = +binaryComplement * 2 ** (bits - 1) * -1;
  return negativeComplement + fromUnsignedBinary(rest.join(""));
};

export const getSignedRange = (bits) => [
  -(2 ** (bits - 1)),
  2 ** (bits - 1) - 1,
];

export const getUnsignedRange = (bits) => [0, 2 ** bits - 1];

export const getRange = (bits, signed = false) =>
  signed ? getSignedRange(bits) : getUnsignedRange(bits);
