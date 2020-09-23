Welcome to my Cape Cod Beaches App! 

About
This is a single-page application that renders and displays content with Javascript through the frontend and manages local API data via Rails (backend).

Users can create and delete beaches that belong to the 15 towns of Cape Cod, Massachussetts.

(Link to the [backend](https://github.com/hkristin/cape_cod_beaches_backend))

Usage

1.) Fork/ clone this repo to your local machine; cd into the project.
2.) Backend
    i. cd into cape_cod_beaches_backend
    ii. run bundle install to install gem dependencies
    iii. run rails db:migrate to migrate model data to DB
    iv. run rails db:seed to implement default seed data. 
    (run rails c to ensure the data was seeded correctly)
    v. run rails s to start the server

3.) Frontend
    i. run open index.html in your editor (the web page should automatically load a browser)

License
This app is available as open source under the terms of the MIT License.()