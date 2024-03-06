import { MongoClient, ObjectId } from "mongodb";
const client = new MongoClient("mongodb://127.0.0.1:27017");

const main = async () => {
    await client.connect();
    const rph = client.db("rph");
    const hk = rph.collection("hk");

    // Find
    const find = await hk.find().toArray(); // All
    // const find = await hk.find({name: "Afif"}).toArray(); // Filter
    // return find;

    // const tes = await hk.findOneAndDelete({name: "Rara Cantiqq"});
    // NOTE : Kita tampilkan dulu baru dihapus
    // console.log(find, tes);


    // Insert
    // const field = await hk.insertOne({name: "Udin", "age": "20", "gender": "Man"}); // One 
    // const field = await hk.insertMany([
    //     {name: "Udin", "age": "20", "gender": "Man"},
    //     {name: "Rara", age: "20"}
    // ]); // Many
    // return field;

    // Update 
    // return await hk.updateOne({name: "Rara"}, { $set: {name: "Rara Cantiqq", age: "19"} });
    // return await hk.updateOne({ _id: new ObjectId('65d837a0e869fae25d561efd') }, {
    //     $set: { name: "Maz Udin" }
    // });

    // Delete
    // return await hk.deleteOne({ _id: new ObjectId('65d837a0e869fae25d561efd') });

    // Create Index
    // const index = await hk.createIndex({id: 123, name: 345});
    // console.log(index);

}

main()
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    }).finally(() => client.close());   
