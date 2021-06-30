//const https = require("https");

https
  .get("https://badrequest.asdf", (res) => {
    console.log("statusCode:", res.statusCode);
    console.log("headers:", res.headers);

    res.on("data", (d) => {
      process.stdout.write(d);
    });
  })
  .on("error", (e) => {
    console.error(e);
  });
