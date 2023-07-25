import { Router } from "express";
import EErrors from "../constants/EErrors.js";
import {
  productErrorDeletion,
  countError,
  productErrorGeneration,
} from "../constants/productErrors.js";
import { generateProduct } from "../mocks/products.mock.js";

const router = Router();

const products = [];

router.get("/mockingproducts", (req, res) => {
  res.send({ status: "success", payload: products });
});

router.post("/mockingproducts", (req, res) => {
    let count = 100
  
    if (!count || isNaN(count) || count < 1) {
      return res.status(400).send({
        status: "error",
        error: countError(),
        code: EErrors.INCOMPLETE_VALUES,
      });
    }
  
    try {
      for (let i = 0; i < count; i++) {
        const user = generateProduct(); 
        user.push(user);
      }
      res.send({ status: "success", message: `${count} usuarios agregados` });
    } catch (error) {
      res.status(500).send({
        status: "error",
        error: productErrorGeneration(),
        code: EErrors.PRODUCT_GENERATION_ERROR,
      });
    }
  });

router.delete("/mockingproducts", (req, res) => {
  try {
    products.length = 0;
    res.send({ status: "success", message: "Productos eliminados correctamente." });
  } catch (error) {
    res.status(500).send({
      status: "error",
      error: productErrorDeletion(),
      code: EErrors.PRODUCT_DELETION_ERROR,
    });
  }
});

export default router;
