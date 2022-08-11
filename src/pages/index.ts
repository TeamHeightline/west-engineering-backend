import {Router} from "express";
import professionsRouter from "./professions";
import levelsOfEducationRouter from "./levels-of-education";

const pageRouter = Router()

pageRouter.use("/professions", professionsRouter)
pageRouter.use("levels-of-education", levelsOfEducationRouter)

export default pageRouter;