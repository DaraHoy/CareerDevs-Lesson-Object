var hotel = {
    name: "Biltmore",
    rooms: 500,
    roomsBooked: 150,
    gym: "Yes",
    pool: "Yes",
    businessOffice: "Yes",

    roomsAvailable: function() {
        return this.rooms - this.roomsBooked;
    }
};

console.log(hotel);
