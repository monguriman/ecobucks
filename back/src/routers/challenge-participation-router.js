import { Router } from "express";
import { login_required } from "../middlewares/login-required.js";
import { challengeParticipationService } from "../services/challenge-participation-service.js";
import { validateEmptyBody } from "../utils/validators.js"

const challengeParticipationRouter = Router();

challengeParticipationRouter.post("/:challenge_id/participants", login_required, async function (req, res, next) {
  try {
    validateEmptyBody(req)
    const challengeId = req.params.challenge_id
    const user_id = req.currentUserId;
    const { image } = req.body;
    
    const challenge = await challengeParticipationService.createChallengeParticipation({ user_id, challenge_id : challengeId, image });
    res.json(challenge);
  } catch (err) {
    next(err);
  }
});

challengeParticipationRouter.get("/:challenge_id/participants", login_required, async function (req, res, next) {
  try {
    const challenge_id = req.params.challenge_id
    const challengeParticipation = await challengeParticipationService.findChallenges({ challenge_id });
    res.json(challengeParticipation);
  } catch (err) {
    next(err);
  }
});

challengeParticipationRouter.get("/:challenge_id/participants/:_id", login_required, async function (req, res, next) {
  try {
    const { challenge_id, _id } = req.params;
  
    const challengeParticipation = await challengeParticipationService.findChallenge({ challenge_id, _id });
    res.json(challengeParticipation);
  } catch (err) {
    next(err);
  }
});

challengeParticipationRouter.put("/:challenge_id/participants/:_id", login_required, async function (req, res, next) {
  try {
    const { challenge_id, _id } = req.params;
    const currentUserId = req.currentUserId;
    const { image } = req.body;  

    const challengeParticipation = await challengeParticipationService.updateChallenge({ 
      challenge_id, _id, currentUserId, image
    });
    
    res.json(challengeParticipation);
  } catch (error) {
    next(error);
  }
});

challengeParticipationRouter.delete("/:challenge_id/participants/:_id", login_required, async function (req, res, next){
  try {
    const _id = req.params._id;
    const currentUserId = req.currentUserId;

    const challengeParticipation = await challengeParticipationService.deleteChallenge(_id, currentUserId);
     
    res.status(200).json({ message: "challenge 삭제 완료"});

  } catch (error) {
    next(error);
  }
});

export { challengeParticipationRouter };