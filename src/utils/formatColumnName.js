function formatColumnName(name) {
  if (typeof name !== "string") {
    return name; // Return the value as-is if it's not a string
  }

  return name
    .replace(/_/g, " ") // Ganti garis bawah (_) dengan spasi
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Ubah huruf pertama setiap kata menjadi kapital
}

export default formatColumnName;
