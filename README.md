# Delivery food API

[See API documentations](https://deliveryfoodnodeapi.docs.apiary.io)


### Installation

How to [Install NodeJs](https://nodejs.org/en/download/package-manager/)

```sh
$ git clone REPOSITORY
$ cd project
$ npm init
$ npm install express body-parser mongoose jsonwebtoken bcryptjs --save
$ node server.js
```

# Postman Result

### SignUp
![N|Solid](http://image.ibb.co/hZe0xH/signup.png)
### Login
![N|Solid](http://image.ibb.co/mf9HcH/login.png)
### Create Data
![N|Solid](https://image.ibb.co/fnXO1c/create.png)
### Show All Data
![N|Solid](https://image.ibb.co/fuB0gc/show_all.png)
### Show Data by Id
![N|Solid](https://image.ibb.co/bwzLgc/show_by_id.png)
### Update Data
![N|Solid](https://image.ibb.co/jjpmMc/update.png)
### Delete Data
![N|Solid](https://image.ibb.co/cC0yZx/delete.png)


### Response of questions

1. Perancangan aplikasi antar makanan dan pelanggan hanya dilayani dengan mobile apps

Untuk perancangan aplikasi antar makanan dimana hanya melayani pemesanan melalui mobile apps saya memilih untuk menggunakan restful api-based web service, karena menurut saya restful-api sangat flexible dalam artian dengan restful api kita bisa menggunakan format response sesuai kebutuhan(XML, JSON, dll)

sedangkan untuk stacknya saya menggunakan:

  * Programming language: NodeJs
  
  * framework: Express
  
  * database: MongoDB


2. Bagaimana menangani keamaanan dalam pengiriman data (backend dan mobile apps) pada sistem

Untuk masalah keamanan dalam pengiriman data saya memilih untuk menggunakan JWT(JSON web tokens). Dengan menggunakan JWT maka setiap mobile apps akan melakukan request ke backend akan selalu mengirimkan token pada request tersebut, dari token ini akan dapat memvalidasikan suatu request.

4. Untuk documentasi yang sederhana mungkin sudah cukup, namun untuk "Testing API V2" jika belum selesai alangkah baiknya untuk tidak ditampilkan, dan jikapun sudah selesai harus lebih di perjelas keterangannya