const numbersTable = "0123456789ABCDEF";

export const formatHex = (hex) =>
  (typeof hex === "number" ? hex.toString(16) : hex)
    .toUpperCase()
    .replace(/0x/i, "")
    .split("")
    .filter((i, idx) => (idx === 0 && i === "-") || numbersTable.includes(i))
    .join("")
    .trim() || "0";

export const formatBin = (bin) =>
  (typeof bin === "number" ? bin.toString(2) : bin)
    .toUpperCase()
    .replace(/^0b/i, "")
    .split("")
    .filter((i) => numbersTable.slice(0, 2).includes(i))
    .join("")
    .trim() || "0";
