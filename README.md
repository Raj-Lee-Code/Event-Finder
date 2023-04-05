# Web Development Project 6 - Project 6: Data Dashboard Part 2

Submitted by: Rajan Patel

This web app: This Web app use the SeatGeek API and and shows events happening throughout the US. The events shown, display the type of event (concert, comedy, theater, sporting etc.), the date, time, location, price of the cheapest and most expensive tickets and amount of seats left. The user is also provided the functionality to search for events to a specific city by typing a city into the search bar and searching. The returned results will be events only happening in the provided city. Updating the web app, I added a button to each event listed which shows more detailed information about the event. The detail view page shows the address of the event, the name of the venue as well as a link to purchase tickets to the specific event. It also features an embedded map showing the location of the even with a marker using Mapbox's API and location information from SeatGeek's API.  

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:

- [ ] **The app includes at least two unique chart developed using the fetched data that tell an interesting story**
- [x] **Clicking on an item in the list view displays more details about it**
- [x] **Clicking on an item has a direct, unique link to that item's detail view page**


The following **optional** features are implemented:

- [x] The site's customized dashboard contains more content that explains what is interesting about the data
- [ ] The site allows users to toggle between different data visualizations

The following **additional** features are implemented:

* [x] When in detailed view page of an event, the location of the event in a embedded map is shown on the page using MapBox's API by using information provided from SeatGeek's API. A Map was added to the page instead of a chart as the information recieved from SeatGeek's API did not feature content that could be transfered into a chart form. Instead, I thought a map with a marker and accessing two different API's together would be better for the project.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='./WEB102 Project6.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with LiceCap v1.32 (https://www.cockos.com/licecap/)

## Notes

This project had been interesting as I had to transfer information from the API call in the main homepage to the detail view page when a user clicks the button for more info. Within the detail view page of an event, I also included a embedded map on the page with a marker showing the location of the event using Mapbox's API. I also wanted to only call SeatGeek's API as few times as possible (only called once per webpage load) so when going to the detail view page, there is not another call rather information is tranferred from the orginal call on the home page. This project was helpful in learning routing and how to deal with multiple different pages. 

## License

    Copyright [2023] [Rajan Patel]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.