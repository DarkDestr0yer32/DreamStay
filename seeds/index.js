const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const axios = require('axios');

mongoose.connect('mongodb://localhost:27017/DreamStay', {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database Connected");
});

const sample = function (array) {
    return array[Math.floor(Math.random() * array.length)];
}

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 200; i++) {
        const random1000 = Math.floor(Math.random() * 520);
        const price = Math.floor(Math.random() * 2500) + 10;
        const camp = new Campground({
            author: '6686723e060d31c159d576c9',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima corrupti sunt nobis alias expedita tempora optio ratione, maxime aperiam adipisci excepturi, necessitatibus esse dolores quod suscipit porro, cupiditate quia!',
            price,
            geometry: {
                type: 'Point',
                coordinates: [cities[random1000].longitude, cities[random1000].latitude]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dlvpan240/image/upload/v1720042317/final1_vz7zw8_amqlt8.png',
                    filename: 'final1_vz7zw8_amqlt8'
                },
                {
                    url: 'https://res.cloudinary.com/dlvpan240/image/upload/v1720042323/final2_qkzfiv_eqygsv.png',
                    filename: 'final2_qkzfiv_eqygsv'
                },
                {
                    url: 'https://res.cloudinary.com/dlvpan240/image/upload/v1720042317/final3_znk7nc_fywmcp.png',
                    filename: 'final3_znk7nc_fywmcp'
                }
            ]
        })
        await camp.save();
    }
}

seedDB()
    .then(() => {
        mongoose.connection.close();
    })