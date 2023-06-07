import { participationModel } from "../schemas/challenge-participation.js";

class Participation {
  static async create(newChallenge) {
    const createdChallenge = await participationModel.create(newChallenge);
    return createdChallenge;
  }  

  static async findAll( ) {
    const participations = await participationModel.find( );
    return participations;
  } 

  static NoAsyncfindAll({ challenge_id }) {
    const participations = participationModel.find({ challenge_id });
    return participations;
  }
  
  static async findById({ _id }){
    const participation = await participationModel.findById({ _id });
    return participation
  }

  static NoAsyncfindById({ _id }) {
    const participation = participationModel.findById({ _id });
    return participation;
  }
  
<<<<<<< HEAD
  static async findAllByUserId({ userId }){
    const UserChallenges = await ChallengeParticipationModel.find({ userId });;
    return UserChallenges
=======
  static async findAllByUserId({ user_id }){
    const userParticipations = await participationModel.find({ user_id });;
    return userParticipations
>>>>>>> 8c5162323d2d38d1cccc9c74b35f6a3ac34f65db
  }

  // update
  static async update({ _id, image }) {
    const updateParticipation = await participationModel.findOneAndUpdate(
      {_id : _id}
      ,{image}
      ,{new: true});

    return updateParticipation               ;
  }

  static async deleteById( _id ) {
    await participationModel.findByIdAndDelete( _id );
    return ;
  }
  
}

export { Participation };
