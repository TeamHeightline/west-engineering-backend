import {Router} from "express";
import prisma from "../../prisma/client";

const workersRouter = Router()

workersRouter.get('/all', async (req, res) => {
    const workers = await prisma.wORKER.findMany({
        include: {
            education: true,
            prfession: true,
        },
        orderBy: {
            created_at: 'desc'
        }
    })

    res.status(200).json(workers)
})

workersRouter.post('/update', async (req, res) => {
    const {id, name, level_of_education_id, profession_id} = req.body
    const worker = await prisma.wORKER.update({
        where: {
            id: Number(id)
        },
        data: {
            name,
            level_of_education_id,
            profession_id,
        }
    })
    res.status(200).json(worker)
})

export default workersRouter;