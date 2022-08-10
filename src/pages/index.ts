import {Router} from "express";
import professionsRouter from "./professions";

const pageRouter = Router()

pageRouter.use("/professions", professionsRouter)

export default pageRouter;