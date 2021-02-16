# Design and methodology 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To test the project click [here](https://crypto-dashboard-five.vercel.app/).

1. Broke down the steps that I needed to take to expose the endpoint 
    - Install all dependencies for endpoint (express, @babel/core, @babel/node, @babel/preset-env, axios) 
        - @babel/preset-env package is so we don't have to configure many things on babel
    - Initialised an app variable by calling express
    - Setup routes for each desired coin e.g. BTC, ETH, XRP
    - Setup an Axios call inside each app.get route so that we can get a JSON back and display the relevant data to the UI 
    - Setup an app.use to allow access controls
2. Analysed the structure that the trade.cointree.com/api endpoint provides, accessed the data from the object to display it on the virtual React DOM 
3. Initialised a new React.js app project 
4. Bootstrapped with existing code provided in the React.js boilerplates 

## Build details 
- This project took 3 hours to complete 
- The % percentage change feature does not function as desired 
- Ripple button does not return data properly, JSON parsing error of some kind 

## If I could do it again
- I would design the UI myself
- Think it out more in terms of fault tolerance 
- Design with an orientation toward scalability with the code
- Fix the bugs around XRP and % change 





