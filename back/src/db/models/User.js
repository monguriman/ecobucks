import { userModel } from "../schemas/user.js";

class User {
  static async create({ newUser }) {
    const createdNewUser = await userModel.create(newUser);
    return createdNewUser;
  }

  static async findByEmail({ email }) {
    const user = await userModel.findOne({ email });
    return user;
  }

  static async findById({ userId }) {
    const user = await userModel.findOne({ _id: userId });
    return user;
  }

  // Comment용 (Comment 스키마에 userId 대신 writerId로 정의함)
  static async findByWriterId({ writerId }) {
    const user = await userModel.findOne({ _id: writerId });
    return user;
  }

  static async findAll() {
    const users = await userModel.find({ });
    return users;
  }

  // 탈퇴한 회원 찾는 함수
  static async findWithdraw({ email }) {
    const user = await userModel.findOne({ isWithdrew: true, email: email })
    return user
  }

  static async update({ userId, fieldToUpdate, newValue }) {
    const filter = { _id: userId };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };
    const updatedUser = await userModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedUser;
  }
  
}

export { User };
