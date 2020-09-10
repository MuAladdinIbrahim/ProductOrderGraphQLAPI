import mongoose from "mongoose";

let database: mongoose.Connection;
const dbName = "eCommerceAPI"
export const connect = () => {
  const uri = `mongodb://localhost:27017/${dbName}`;
  if (database) {
    return;
  }
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }).then(()=>{
    console.log("Connected to database");
  }).catch(()=>{
    console.log("Error connecting to database");
  })

};
export const disconnect = () => {
  if (!database) {
    return;
  }
  mongoose.disconnect();
};
