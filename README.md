# Web Development Project 6 - Project 6: Data Dashboard Part 2

Submitted by: Rajan Patel

This web app: This Web app use the SeatGeek API and and shows events happening throughout the US. The events shown, display the type of event (concert, comedy, theater, sporting etc.), the date, time, location, price of the cheapest and most expensive tickets and amount of seats left. The user is also provided the functionality to search for events to a specific city by typing a city into the search bar and searching. The returned results will be events only happening in the provided city.

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The list displays a list of data fetched using an API call**
- [x] **Data uses the useEffect React hook and async/await syntax**
- [x] **The app dashboard includes at least three summary statistics about the data such as**
  - [x] The dashboard shows the cheapest tickets, most expensive tickets and amount of tickets available for the event listed
- [x] **A search bar allows the user to search for an item in the fetched data**
- [ ] **Multiple different filters (2+) allow the user to filter items in the database by specified categories**

The following **optional** features are implemented:

- [ ] Multiple filters can be applied simultaneously
- [ ] Filters use different input types such as a text input, a selection, or a slider
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='./WEB102 Project5.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with LiceCap v1.32 (https://www.cockos.com/licecap/)

## Notes

This project had been more challenging as mounting/updating/removing the component was difficult when trying to apply filters. With the SeatGeek API, 10 results are returned per page for each call. This led to not all data from seatgeek being recieved at once as multiple pages would need to be called for the entire dataset. Instead to filter, the user would input a city and the API would be called as before but this time implementing a city filter in the API call, thus recieving a response to the user's search parameter. I was not able to implement multiple (2+) filters as school/finals had caught up and I ran out of time, but on part two of this project (week 6 project) I plan to expand and implement more features/searches.

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