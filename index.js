const fetch = require("node-fetch");
const http=require("http")
let p = new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((data) => {
            return data.json();
          })
          .then((dataval) => {
            const name=dataval.map((dataval) => dataval.name)
            console.log(name)
            resolve("successfully")
          })
          .catch((err) => {
            reject("Failed!");
          });
      });
      p.then((d) => {
        console.log(`The promise is ` + d);
      }).catch((d) => {
        console.log(`The promise is ` + d);
      });