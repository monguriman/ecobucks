import { userAuthService } from "../services/user-service.js";
import { validateEmptyBody } from "../utils/validators.js";
import { NOT_FOUND, CREATED, OK, NO_CONTENT } from "../utils/constants.js";
import { userModel } from "../db/schemas/user.js";

const userController = {
  postUserRegister: async function (req, res, next) {
    try {
      validateEmptyBody(req)
      const { userName, email, password, districtName } = req.body;
      const newUser = await userAuthService.addUser({
        userName,
        email,
        password,
        districtName,
      });
  
      if (newUser.errorMessage) {
        throw new Error(newUser.errorMessage);
      }
  
      return res.status(CREATED).send(newUser);
    } catch (error) {
      next(error);
    }
  },

  postUserLogin: async function (req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await userAuthService.getUser({ email, password });
  
      if (user.errorMessage) {
        throw new Error(user.errorMessage);
      }
  
    return res.status(OK).send(user);
    } catch (error) {
      next(error);
    }
  },

  GetUser_userlist: async function (req, res, next) {
    try {
      const users = await userAuthService.getUsers();
      res.status(OK).send(users);
    } catch (error) {
      error.status = NOT_FOUND;
      next(error);
    }
  },

  getUserMyPage: async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const currentUserInfo = await userAuthService.getUserMypage({ userId });

      if (currentUserInfo.errorMessage) {
        throw new Error(currentUserInfo.errorMessage);
      }

    return res.status(OK).send(currentUserInfo);
    } catch (error) {
      error.status = NOT_FOUND;
      next(error);
    }
  },
  
  getUserMyPageChallenges: async function (req, res, next) {
    try{
      const userId = req.currentUserId;
      const page = parseInt(req.query.page || 1)

      const {newParticipations, totalPages} = await userAuthService.getUserMyPageChallenges({ userId, page });   
      
      if (newParticipations.errorMessage){
        throw new Error(newParticipations.errorMessage);
      }
    return res.status(OK).send({
      currentPage: page,
      totalPages: totalPages,
      newParticipations,
    });
    } catch (error) {
      error.status = NOT_FOUND;
      next(error);
    }
  },

  getUserErrYellow: async function (req, res, next) {
    try {
      const userId = req.params._id;
      const currentUserInfo = await userAuthService.getUserInfo({ userId });

      if (currentUserInfo.errorMessage) {
        throw new Error(currentUserInfo.errorMessage);
      }

    return res.status(OK).send(currentUserInfo);
    } catch (error) {
      error.status = NOT_FOUND;
      next(error);
    }
  },

  userGetcurrent: async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const currentUserInfo = await userAuthService.getUserInfo({
        userId,
      });

      if (currentUserInfo.errorMessage) {
        throw new Error(currentUserInfo.errorMessage);
      }

      return res.status(OK).send(currentUserInfo);
      } catch (error) {
        error.status = NOT_FOUND;
        next(error);
    }
  },


  userDeleteWithdraw: async function (req, res, next) {
    const userId = req.currentUserId;
    try {
      const user = await userAuthService.getUserInfo({ userId })

      if(!user) {
        const errorMessage = "회원이 존재하지 않습니다."
        const result = { result: errorMessage }
        return res.status(NOT_FOUND).send(result);
      }

      user.isWithdrew = true
      await userModel.findOneAndUpdate({ _id: userId }, { isWithdrew: true });   // await user.save()가 안되서 다음과 같이 구현
      const result = { result : "Successfully withdraw" }
      return res.status(OK).send(result)

    } catch (error) {
      error.status = NOT_FOUND;
      next(error)
    } 
  },

  userPutMypage: async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const { userName, districtName, password } = req.body ?? null;
      const toUpdate = { userName, districtName, password };

      const updatedUser = await userAuthService.updateUser({ userId, toUpdate });

      if (updatedUser.errorMessage) {
        throw new Error(updatedUser.errorMessage);
      }

      return res.status(OK).send(updatedUser);
    } catch (error) {
      next(error);
    }                                                      
  },

  userGetChallenges: async function (req, res, next) {
    try {
      const userId = req.params._id;
      const currentUserInfo = await userAuthService.getUserChallenges({ userId });

      if (currentUserInfo.errorMessage) {
        throw new Error(currentUserInfo.errorMessage);
      }

    return res.status(OK).send(currentUserInfo);
    } catch (error) {
      error.status = NOT_FOUND;
      next(error);
    }
  },

  userGetParticipants: async function (req, res, next) {
    try {
      const userId = req.params._id;
      const currentUserInfo = await userAuthService.getUserParticipants({ userId });

      if (currentUserInfo.errorMessage) {
        throw new Error(currentUserInfo.errorMessage);
      }

    return res.status(OK).send(currentUserInfo);
    } catch (error) {
      error.status = NOT_FOUND;
      next(error);
    }
  },

  userGetComments: async function (req, res, next) {
    try {
        const userId = req.params._id;
        const currentUserInfo = await userAuthService.getUserComments({ userId });

        if (currentUserInfo.errorMessage) {
          throw new Error(currentUserInfo.errorMessage);
      }

      return res.status(OK).send(currentUserInfo);
      } catch (error) {
        error.status = NOT_FOUND;
        next(error);
      }
  }
}

export { userController };
