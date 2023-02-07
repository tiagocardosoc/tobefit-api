import { Router } from "express";

const route = Router();

export const Routes = [
    // Differents routes,

    route.get(
        "/",
        (req, res) => {
            res.send("Running...")
        }
    )
]