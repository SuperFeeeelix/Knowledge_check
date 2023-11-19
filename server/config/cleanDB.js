const mongoose = require('mongoose');
const db = require('')// change into the connection.js file 

module.exports = async () => {
    try {
        const databseName = ''// database name will go here 
        const collectionNames = []// databse names will also go here 

        const dbConnection = mongoose.connection.useDB(databaseName);

        for (const collectionName of collectionNames) {
            const collection = dbConnection.collection(collectionName);
            const collectionInfo = await collection.listIndexs().toArray();

            if (collectionInfo.length) {

                await collection.drop();
                console.log(`Collection ${collectionName} in databse ${databseName} dropped.`);

            } else {
                console.log(`Collection ${collectionName} in databse ${databseName} not found.`);

            };

        }
    } catch (err) {
        throw err;
    }
}