import {Router} from "express";
import prisma from "../../prisma/client";

const professionsRouter = Router()

professionsRouter.get("/all", async (req, res) => {
    const professions = await prisma.pROFESSIONS.findMany({
        orderBy: {
            id: "asc"
        }
    })
    res.status(200).json(professions)
})

export default professionsRouter;
