# NodeJs-Backend-Application-Whether-App

How to start 
Downlaod the project files 
> https://github.com/Dinushawh/NodeJs-Backend-Application-Whether-App.git

install node modules 
> npm install

this app made by using these packages
> axios
> cors
> cron
> dotenv
> express
> mongoose
> nodemailer
> nodemon
> openweathermap

add new user to system 
> open the POSTMAN and create a new http request, and insert this link https://node-js-backend-application-whether-app.vercel.app/api/add-new-user

add the data in json file format
> {
    "email":"dinushawh@gmail.com",
    "location":"Matale"
}

update user location
> open the POSTMAN and create a new http request, and insert this link https://node-js-backend-application-whether-app.vercel.app/api/update-user

add the data in json file format
> {
    "email":"dinushawh@gmail.com",
    "location":"Colombo"
}

get data by date 
> open the POSTMAN and create a new http request, and insert this link https://node-js-backend-application-whether-app.vercel.app/api/get-user-data

add the data in json file format
> {
    "email":"dinushawh@gmail.com",
    "date":"2023-09-14"
}

every 3 hours automaticaly system runs the send hourly whether send function and send data to the users email address 



