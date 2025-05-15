function printUserInfo(user) {
  const { name, age, hobby } = user;
  console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
}

printUserInfo({
  name: "Alice",
  age: 25,
  hobby: "dancing",
}); // Name: Alice, Age: 25, Hobby: dancing
// console.log(mango.isBlacklisted("poly@mail.com")); // true
// pizzaPalace.order("Smoked"); // повертає рядок "Order accepted, preparing «Smoked» pizza"
