# Recipe Book Backend

## About
This is a rest app that will listen on port 3001 for a react app.

The react client can be found [here](https://github.com/Malotkya/recipe-book-client).

There are two access points the first being "/Recipe/:id?" and the second being "/Week/:date?".

For now there will be minimal information validation as this is going to be run and accessed only on
a local server.

### /Recipe/:id?

#### Get Request
    - If an id is provided it will get information based on recipe id
    - If no id is provided it will pull all recipes

#### Post Request
    - If an id is provided it will update the recipe using information encoded in
    the body of the request.
    - If no id is provided it will create a new recipe using the information encoded
    in the body of the request.

#### Delete Request
    - Deletes the recipe with the provided id


### /Week/:date?

#### Get Request
    - If a date is given it will pull all recipes in the week (Sunday - Saturday)
    of the given date. Ex: if date is "8/5/2020", then it will return all recipes by
    day from Sunday (8/2/2020) to Saturday (8/8/2020).
    - If no date is given then it will assume that the date is today and pull this weeks
    recipes by day.

#### Post Request
    - Uses the date to select the week to update in the calendar and sets the week to
    represent the json data encoded in the request body.

### /Import?target=url

#### Get request
    - will use an api to get the web url at target and add it to the database.
