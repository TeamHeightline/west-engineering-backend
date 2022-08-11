import {Router} from "express";
import professionsRouter from "./professions";
import levelsOfEducationRouter from "./levels-of-education";
import workersRouter from "./workers";

const pageRouter = Router()

pageRouter.use("/professions", professionsRouter)
pageRouter.use("/levels-of-education", levelsOfEducationRouter)
pageRouter.use("/workers", workersRouter)

export default pageRouter;