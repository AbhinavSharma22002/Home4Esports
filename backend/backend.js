const {MongoClient} = require('mongodb');

async function main(){
    const uri = "mongodb+srv://abc:abc@cluster0.pj6qno6.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);


    try{
        
        await client.connect();

        // await listDatabases(client);

        await createListing(client,[{ name: 'John', address: 'Highway 71'},
        { name: 'Peter', address: 'Lowstreet 4'},
        { name: 'Amy', address: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'},
        { name: 'Michael', address: 'Valley 345'}])

    }catch(e){
        console.log(e);
    }finally{
        await client.close();
    }
}
main().catch(console.error);

//Applying CRUD Operations

async function createListing(client,newListing){
    const result = await client.db("abc").collection("admin").insertMany(newListing);

    console.log(`New listing created with ${result.insertedId}`);
}
// read operation

function findListingByNameAddress(client,{
    Name=1,
    Address=1
} = {}){
    const read = client.db("abc").collection("admin").find();
}

//update operation
async function updateListingByName(client,nameOfListing,updatedListing){
    const update = await client.db("abc").collection("admin").updateMany({property_type:{$exists:false}},{$set:{property_type:"Unknown"}});
}

//delete operation

async function deleteListing(client,date){
const del = await    client.db("abc").collection("admin").deleteMany({"last_scraped" : {$lt:date}});
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Crud operation for 2nd collection

async function collection2(client,newListing){
    const result = await client.db("abc").collection("superadmin").insertMany(newListing);

    console.log(`New listing created with ${result.insertedId}`);
}
// read operation

 function findListingByNameAndAddress(client,{
    Name=1,
    Address=1
} = {}){
    const read = client.db("abc").collection("superadmin").find();
}

//update operation
async function updateListByName(client,nameOfListing,updatedListing){
    const update = await client.db("abc").collection("superadmin").updateMany({property_type:{$exists:false}},{$set:{property_type:"Unknown"}});
}

//delete operation

async function deleteList(client,date){
const del = await    client.db("abc").collection("superadmin").deleteMany({"last_scraped" : {$lt:date}});
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CRUD Operation on 3rd collection

async function collection3(client,newListing){
    const result = await client.db("abc").collection("local").insertMany(newListing);

    console.log(`New listing created with ${result.insertedId}`);
}
// read operation

function findListingByNameAndAddresses(client,{
    Name=1,
    Address=1
} = {}){
    const read = client.db("abc").collection("local").find();
}

//update operation
async function updateListingByNames(client,nameOfListing,updatedListing){
    const update = await client.db("abc").collection("local").updateMany({property_type:{$exists:false}},{$set:{property_type:"Unknown"}});
}

//delete operation

async function deleteListings(client,date){
const del = await    client.db("abc").collection("local").deleteMany({"last_scraped" : {$lt:date}});
}