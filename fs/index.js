const fs = require("fs");

// To read only

// fs.readFile("example.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error : ", err);
//     // return err;
//   }
//   console.log("File : ", data);
// });

// To write only

fs.unlink("C:\\Users\\Akhilesh\\OneDrive\\Desktop\\EditTime.tsx", (err) => {
  if (err) {
    console.error("Error", err);
  }
  console.log("File has been return");
});
