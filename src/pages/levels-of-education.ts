import {Router} from "express";
import prisma from "../../prisma/client";

const levelsOfEducationRouter = Router()

levelsOfEducationRouter.get("/all", async (req, res) => {
    const levelOfEducation = await prisma.lEVELS_OF_EDUCATION.findMany({
        orderBy: {
            id: "asc"
        }
    })
    res.status(200).json(levelOfEducation)
})

levelsOfEducationRouter.post("/create", async (req, res) => {
    const {name} = req.body
    const levelOfEducation = await prisma.lEVELS_OF_EDUCATION.create({
        data: {
            name
        }
    })
    res.status(200).json(levelOfEducation)
})

levelsOfEducationRouter.post("/delete", async (req, res) => {
    const {id} = req.body
    await prisma.lEVELS_OF_EDUCATION.delete({
        where: {
            id: Number(id)
        }
    })
    res.status(200).json({
        message: "Level of education deleted"
    })
})

levelsOfEducationRouter.post("/update", async (req, res) => {
    const {id, name} = req.body
    const updatedLevelOfEducation = await prisma.lEVELS_OF_EDUCATION.update({
        where: {
            id: Number(id)
        },
        data: {
            name
        }
    })
    res.status(200).json(updatedLevelOfEducation)
})

export default levelsOfEducationRouter;
