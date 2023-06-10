const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const client = require("@mailchimp/mailchimp_marketing");


app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));
app.use(bodyParser.urlencoded({ extended: true }));


client.setConfig({
  apiKey: "52a71edb28f25936e4ff2120b6479d98-us21",
  server: "us21",
});

const run = async () => {
    const response = await client.lists.createList({
      name: "Renny",
      permission_reminder: "permission_reminder",
      email_type_option: true,
      contact: {
        company: "company",
        address1: "address1",
        city: "city",
        country: "country",
      },
      campaign_defaults: {
        from_name: "from_name",
        from_email: "Beulah_Ryan@hotmail.com",
        subject: "subject",
        language: "language",
      },
    });
    console.log(response);
  };
run();

app.listen("3000", () => console.log("the server is running in 3000"));

app.post("/", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    console.log(name, email);
    res.end();
})
