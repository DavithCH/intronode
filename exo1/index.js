console.log("HELLO WORLD");

const mavariable = process.env["MAVARIABLE"];

console.log(mavariable);

if (process.env.NODE_ENV === "development") {
  console.log("Je suis en development");
}
if (process.env.NODE_ENV === "production") {
  console.log("Je suis en production");
}
