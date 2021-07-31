const express = require('express');
const { company } = require('faker');
const faker = require('faker');
const app = express ();

class User{
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();

    }
}

class Company{
    constructor(){
     this.companyName = faker.name.findName();
     this.street = faker.address.streetName();
     this.city = faker.address.cityName();
     this.state = faker.address.state();
     this.zipCode = faker.address.zipCode();
     this.country = faker.address.country();
    }
}


app.get("/api/users/new", (req, res)=>{
    res.json(new User())
});
app.get("/api/companies/new", (req, res)=>{
    res.json(new Company())
});
app.get("/api/user/company", (req, res)=>{
    res.json([new User(), new Company()])
});
const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);



