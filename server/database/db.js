import mongoose from "mongoose";

const Connection = async (username, password) => {
  // const URL = `mongodb://${username}:${password}@ac-xtns0sa-shard-00-00.n59l4cd.mongodb.net:27017,ac-xtns0sa-shard-00-01.n59l4cd.mongodb.net:27017,ac-xtns0sa-shard-00-02.n59l4cd.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-z31g6l-shard-0&authSource=admin&retryWrites=true&w=majority`;

  const URL = `mongodb+srv://${username}:${password}@ecommerce-web.n59l4cd.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
