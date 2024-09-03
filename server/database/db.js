import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@product-info-database-shard-00-00.gks3f.mongodb.net:27017,product-info-database-shard-00-01.gks3f.mongodb.net:27017,product-info-database-shard-00-02.gks3f.mongodb.net:27017/?ssl=true&replicaSet=atlas-ae3khy-shard-0&authSource=admin&retryWrites=true&w=majority&appName=product-info-database`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;