import User from '../models/user.model';

//get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};


export const loginId = async (email) => {
  const data = await User.findOne({email:email});
  console.log("email",data)
  if(data!=null){
    return "Email is present"
  } else {
    return "Email is absent"    
  }
};

//create new user
export const newUser = async (body) => {
  const data = await User.create(body);
  return data;
};

// //update single user
// export const updateUser = async (_id, body) => {
//   const data = await User.findByIdAndUpdate(
//     {
//       _id
//     },
//     body,
//     {
//       new: true
//     }
//   );
//   return data;
// };

// //delete single user
// export const deleteUser = async (id) => {
//   await User.findByIdAndDelete(id);
//   return '';
// };

// //get single user
// export const getUser = async (id) => {
//   const data = await User.findById(id);
//   return data;
// };
