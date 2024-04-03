#!/usr/bin/env node

//CREATING BASIC EXPRESS APP
const express = require("express");
const app = express();

// CONFIGURING FOR ENV
const dotenv = require("dotenv");
dotenv.config();

// SUPPORT FOR JSON & PUBLIC FOLDER
app.use(express.static(__dirname + "/public"));
app.use(express.json());

// SETTING VIEW ENGINE AS EJS
app.set("view engine", "ejs");
// REQUIRING PACKAGE TO CRAWL DIRECTORIES
var read = require("read-directory");

var contents = read.sync(process.cwd() + "/models");

// console.log(contents)

// GETTING MODEL FILE CONTENTS AS ARRAY
const tables = Object.keys(contents);
const attrs = {};

// REQUIRING MODEL USING KEYS
tables.map(
  (table) =>
    (attrs[`${table}+Model`] = require(process.cwd() + `/models/${table}`))
);
// CREATING ARRAY FOR DB MODELS
const models = Object.values(attrs);

// console.log(models)
console.log(models[0].schema)

const arr = [];
// EXTRACTING ATTRIBUTES FROM MODELS
// models.forEach((model) => {
//   console.log(model.schema);
// });

const fieldsArr = [];
// EXTRACTING DB COLUMNS VALUES
// arr.forEach((item) => {
//   fieldsArr.push(Object.values(item));
// });

// console.log(fieldsArr)
//
// app.listen(3001, (req, res) => {
//   console.log(" visualization server up at http://localhost:3001");
// });

// SETTING ROUTE TO home.ejs
// app.get("/", (req, res) =>
//   res.render(__dirname + "/views/home", { data: fieldsArr })
// );

// const arrowLine = require("arrow-line");
// const arrow = arrowLine("#st", "#end", { color: "blue" });