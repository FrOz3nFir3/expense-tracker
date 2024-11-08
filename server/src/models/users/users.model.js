const Users = require("./users.mongo");
const crypto = require("crypto");

async function findUserByEmail(email) {
  try {
    const user = Users.findOne({ email }, { __v: 0 });
    return user;
  } catch (e) {
    throw e.message;
  }
}

async function createNewUser(user) {
  try {
    const newUser = new Users(user);
    return await newUser.save();
  } catch (e) {
    throw e.message;
  }
}

async function updateUserDetails(body, token) {
  const { id } = token;

  const { requestType } = body;

  if (requestType == "budget/set") {
    try {
      const updatedUser = await Users.findByIdAndUpdate(id, {
        budget: body.budget,
      });
      return updatedUser;
    } catch (e) {
      throw e.message;
    }
  }

  if (requestType == "expenses/add") {
    // input validation should be done here before updating the user omiting for now

    // body.expense.expenseId = crypto.randomBytes(16).toString("hex");

    try {
      const updatedUser = await Users.findByIdAndUpdate(id, {
        $push: { expenses: body.expense },
      });
      return updatedUser;
    } catch (e) {
      throw e.message;
    }
  }

  if (requestType == "expenses/delete") {
    // delete expense

    try {
      const updatedUser = await Users.findByIdAndUpdate(id, {
        $pull: { expenses: { expenseId: body.expenseId } },
      });
      return updatedUser;
    } catch (e) {
      throw e.message;
    }
  }
}

module.exports = {
  findUserByEmail,
  createNewUser,
  updateUserDetails,
};
