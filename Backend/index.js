const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json()); //middlware line to handle json()

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const dbpath = path.join(__dirname, "database.db");
let db = null;

const initializeDbAndServer = async () => {
  try {
    db = await open({ filename: dbpath, driver: sqlite3.Database });

    app.listen(5000, () =>
      console.log("Server Running at http://localhost:5000/")
    );
  } catch (e) {
    console.log(`DB Error: ${e}`);
    process.exit(1);
  }
};
initializeDbAndServer();

app.get("/products/", async (request, response) => {
  const getProductsQuery = `
    SELECT
      *
    FROM
      products
    ;`;
  const productsArray = await db.all(getProductsQuery);
  response.send(productsArray);
});

//GET Product

app.get("/products/:productId/", async (request, response) => {
  const { productId } = request.params;
  const getProductQuery = `
    SELECT
      *
    FROM
      products
    WHERE
      products_id = ${productId};`;
  try {
    const product = await db.get(getProductQuery);
    response.send(product);
  } catch (error) {
    response
      .status(500)
      .send({ error: "An error occurred while processing your request." });
  }
});

//Create New User
app.post("/users", async (request, response) => {
  const userDetails = request.body;
  const { name, address, place, pincode, whatsapp, email } = userDetails;
  const addUserQuery = `
    INSERT INTO
      user (name,address,place,pincode,whatsapp,email)
    VALUES
      (
        
        '${name}',
        '${address}',
        '${place}',
        ${pincode}, 
        '${whatsapp}',
        '${email}'
      );`;

  try {
    const dbResponse = await db.run(addUserQuery);
    response.send(dbResponse);
  } catch (error) {
    response
      .status(500)
      .send({ error: "An error occurred while processing your request." });
  }
});

//DELETE USER

app.delete("/users/:userId", async (request, response) => {
  const { userId } = request.params;
  const deleteUserQuery = `
    DELETE FROM
      user
    WHERE
      user_id = ${userId};`;
  await db.run(deleteUserQuery);
  response.send("User Deleted Successfully");
});
