const obj = [
  {
    fname: "Vijay",
    lname: "kumar",
    age: 25,
  },
  {
    fname: "AJay",
    lname: "kumar",
    age: 28,
  },
];

function converter(raw) {
  // raw[fullname] = raw[fname]
  // delete raw[fname]
  const a = raw[0].fname + raw[1].fname;
  console.log(a);
}

const data = converter(obj);

// Output

[
  {
    fullname: "vijay kumar",
    yob: 1998,
  },
  {
    fullname: "Ajay kumar",
    yob: 1998,
  },
];
