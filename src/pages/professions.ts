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

professionsRouter.post("/create", async (req, res) => {
    const {name} = req.body
    const profession = await prisma.pROFESSIONS.create({
        data: {
            name
        }
    })
    res.status(200).json(profession)
})

professionsRouter.post("/delete", async (req, res) => {
    const {id} = req.body
    await prisma.pROFESSIONS.delete({
        where: {
            id: Number(id)
        }
    })
    res.status(200).json({
        message: "Profession deleted"
    })
})

professionsRouter.post("/update", async (req, res) => {
    const {id, name} = req.body
    const updatedProfession = await prisma.pROFESSIONS.update({
        where: {
            id: Number(id)
        },
        data: {
            name
        }
    })
    res.status(200).json(updatedProfession)
})

export default professionsRouter;
