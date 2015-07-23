#Eventfull

Advanced event staffing application for catering companies.

<img src="http://imageshack.com/a/img540/6136/N8ZnQl.png" width="600" alt="Action Bar">

(Additional screenshots below)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

[![Stories in Ready](https://badge.waffle.io/Eventfull/Eventfull.svg?label=In%20Progress&title=In%20Progress)](http://waffle.io/Eventfull/Eventfull)

## Usage


##### Pull down the repository
> $ git clone https://github.com/Eventfull/Eventfull.git

##### Add server/calendar/configuration.js, show below:

```javascript
module.exports = {
  google_clientID : 'google-client-id-here',
  google_clientSecret: 'google-client-secret-here',
  google_CB: 'google-cb-here',
  google_scope: ['scope-details-here']
};
```

##### Add server/db/configuration.js, show below:

```javascript
module.exports = {
  production: {
    db_name: 'eventfull_production',
    username: 'root',
    password: ''
  },

  development: {
    db_name: 'eventfull_development',
    username: 'root',
    password: ''
  },

  test: {
    db_name: 'eventfull_test',
    username: 'root',
    password: ''
  },
  database: {
    db_name: 'eventfull',
    username: 'root',
    password: ''
  }
};
```

##### Seed the database on the first run
> $ SEED=true NODE_ENV=development node server/server.js

##### All future runs
> $ NODE_ENV=development nodemon server/server.js

## Screenshots

<img src="http://imageshack.com/a/img912/7354/Qt6L8E.png" width="600" alt="Month View">
<img src="http://imageshack.com/a/img661/8890/t4wlGR.png" width="600" alt="Week View">
<img src="http://imageshack.com/a/img540/6136/N8ZnQl.png" width="600" alt="Action Bar">
<img src="http://imageshack.com/a/img661/4889/nibREY.png" width="600" alt="Employee List">
