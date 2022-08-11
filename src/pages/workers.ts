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

export default workersRouter;