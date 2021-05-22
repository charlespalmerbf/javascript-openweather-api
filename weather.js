class Weather {

    constructor(city, country) {

        //API Key Used to Retrieve Data
        this.api_key = '034e266f5003b8dac68ad265e82685e7';

        //City Included in Fetch Request
        this.city = city;

        //Country Included in Fetch Request
        this.country = country;

    };
 
    //Creating the getWeather Function
    async getWeather() {

        //Send Fetch Request to API
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.api_key}&units=metric`);

        //Await Response From Fetch Request and Save it to Data
        const data = await response.json();
 
        //Return the .JSON Object 
        return data;

    };
 
    //Creating The changeLocation Function
    changeLocation(city, country) {

        this.city = city;

        this.country = country;

    };

};