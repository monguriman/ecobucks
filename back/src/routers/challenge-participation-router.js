import { Router } from "express";
import { loginRequired } from "../middlewares/login-required.js";
import { participationController } from "../controllers/challenge-participation-controller.js"
import { Validation } from "../middlewares/validation.js";

const participationCreateValidation = Validation.validate(Validation.participationCreateSchema);
const participationUpdateValidation = Validation.validate(Validation.participationUpdateSchema);

const participationRouter = Router();
participationRouter.use(loginRequired)

participationRouter.post("/challenges/:challengeId/participants", participationCreateValidation, participationController.participationCreate);

participationRouter.get("/challenges/:challengeId/participants", participationController.participationGetAll);

participationRouter.get("/challenges/:challengeId/participants/:_id", participationController.participationGet);

participationRouter.put("/challenges/:challengeId/participants/:_id", participationUpdateValidation, participationController.participationUpdate);

participationRouter.delete("/challenges/:challengeId/participants/:_id", participationController.participationDelete);

export { participationRouter };


