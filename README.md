# Wetter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Install and Run

### Clone the repository to your local drive
``` 
git clone https://github.com/nxtwave/wetter.git 
```

### Install the dependencies
``` 
cd wetter
npm install
```

### Install your Open Weather Map API Key
You will need to install your own registered API key from Open Weather.

```
export OPEN_WEATHER_KEY=<insert your key here>
```

### Start API Web Server
It will serve data api requests on port 3000
``` 
node server.js
```

### Build and Start Application Server
It will serve application resources on port 4200
``` 
npm start
```

### Browse to Application
Run the application on your browser at the address: localhost:4200

## Application Organization

### Data Services

* The weather source data is from the Open Weather API. See https://openweathermap.org/api
* The application uses a proxy service to connect to Open Weather API. It is hosted
on NodeJS and ExpressJS. See endpoints at /server/api
* The proxy service avoids CORS issues of calling services on a separate domain.
* The proxy service can also be adapted for local security policies, caching of 
results, and merging results with other data sources.
* The local webpack server uses a proxy configuration, in proxy.conf.json, to route calls for /api to
port 3000. In production the proxy is not necessary unless the API is running as
a separate application
* The Angular service calls /api/weather to retrieve the data, and the proxy forwards
the request to Open Weather and returns the results as an Observable object to 
the component.
* The Angular service is contained within the Weather module, and it is injected
into the WeatherReport component.

### Modules

* There are three feature modules: Home, About, and Weather. The Weather module is
the only essential module; the others are included as scaffolding for future expansion
of a multi-module application.
* The application using Angular routing to navigate between the feature modules.
* The top level application module contains the navigation menu.
* The top level application module and each feature module contains a routing configuration.

### CSS Framework

* The application uses Bootstrap Version 4.
* Bootstrap is installed using npm install, and it is configured into the 
application through the cli.angular.json file.

### Core Weather Module

* The WeatherReport component injects the WeatherService for data retrieval.
* The template contains a form and a presentation section. User enters a zipcode
into the form input and clicks the search button.
* The search method of the component calls the data service with the zipcode value.
* The service calls the local proxy service passing the zipcode value.
* The proxy service calls the Open Weather API and the results are returned to the
Angular service which returns an Observable object to the component.
* The component subscribes to the Observable, and when the results are returned,
a presentation object is created from the service result, and the Angular template
renders the result.
* If the service does not return a result, the error property is updated, and the 
template renders an error message.
