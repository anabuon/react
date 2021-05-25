# React Task 1
***
# Task:  

* Build simple layout using components with React, which are: header, content (main section) and footer.  
* Create store variable and pass it down to components using props.  

# Requirements 

* use **create-react-app** as a boilerplate for your application (this one is optional, you can create your own Webpack config) 
* in your project please follow suggested folder structure: (here you can also find your own way on how to make a decent folder structure, this is just my proposal)

**index.js** file should just import the \<App /> component and simply call the ReactDOM.render method. Also you need to store a variable here called **store**. This variable should be an object with required fields: **user** (contains **firstName** and **lastName**) and **avatar** (contains **url** and **alt**).  

**index.css**(index.module.scss/index.scss) should just contain all the **basic styles** for your app (like rules for html, body)  
![img](https://user-images.githubusercontent.com/61491916/113913638-3ce6dd80-97e5-11eb-9f0e-b20b40d81592.png)  
Each React component should have its own folder with the jsx and relevant stylesheets   
for example  
![img](https://user-images.githubusercontent.com/61491916/113914117-d31b0380-97e5-11eb-8c61-f0bb2a3585ef.png)  
* Then you need to find a way on how to pass the store value through an App component to use this store value in a child components (Header, Content). Footer Component can be hardcoded for now.   

Here is the diagram which explains basic data flow   

![img](https://user-images.githubusercontent.com/61491916/113914368-268d5180-97e6-11eb-9e17-202e78664e91.png)  

# Optional tasks 
* use SCSS as a preprocessor 
* use CSS modules 
* create an additional index.js file for each component which will just re-export your component. This is always done to make the import shorter (no hints here, try to research it by yourself)  

**You can use yarn or npm. It's your choice**  

# React Task 2
***
# Task:  

Create two additional components and render them in <Main /> component. One component should be written as a class, and should have state and proper lifecycle methods (e.g. \<CardsContainer />). This component should fetch the data, update its own state and then map this state to a presentational child component (e.g. \<Card />).  

**Steps which should be covered:**
1) Create an additional folder in your project’s root directory which will be called **api**.  
This folded should contain 2 files: **mockedResponse.js**, and **mockedApi.js**  
![img](https://user-images.githubusercontent.com/61491916/115148412-1c7e1500-a068-11eb-9b37-21c32d3f6b32.png)  
2) **mockedResponse.js** file should just contain one variable, which will be an array of objects (make 6-8 objects with optional fields). For example:  
![img](https://user-images.githubusercontent.com/61491916/115148442-433c4b80-a068-11eb-936b-dfe2f1dfafda.png)  
3)the **mockedApi.js** file contains function, which will return a resolved promise with **mockedResponse**  data  
![img](https://user-images.githubusercontent.com/61491916/115148457-5c44fc80-a068-11eb-928b-f0d8aa4bcf9d.png)  
4)in your project’s **‘src’** folder create an additional folder called **‘components’** and move all components there (you imports might need to be updated accordingly). 
The result should be something similar  
![img](https://user-images.githubusercontent.com/61491916/115148507-98785d00-a068-11eb-8cbb-b979e93e46f8.png)  
5)In your **components** folder create an additional folder which will be called **Cards**. 
**This folder should contain 2 files for 2 components: <CardsContainer/> and <Card /> and related CSS-files for each of them.**  
**Note**: \<CardsContainer /> is a class component and it should have state and proper lifecycle methods. \<Card /> component is just a pure functional component which just should accept several props and render them in a simple card with image and description (design of the card is up to you) 
6)**\<CardsContainer/>** should fetch the data from our mockedApi and update it’s own state. After it the actual state should be mapped to a \<Card /> component. (don’t forget about key property)  
![img](https://user-images.githubusercontent.com/61491916/115148559-c8276500-a068-11eb-815d-44f242163b0a.png)  
7)**If there is no cards yet render a fallback JSX like** \<div>No cards yet\</div>  

# React Task 3
***
# Task: 

**Summary**  
Based on your 2nd task, make an additional opportunity to create and delete cards (for cards I mean any array of objects with image and description, for example const cards = \[{ id:1, category: ‘male’, imgUrl: ‘’, price: 100 }]).  

**Requirements**  
* Each **\<Card />** component could be deleted from catalogue by clicking on the cross button (❌) which can be placed somewhere on the top of each card. After clicking on the button the array of cards in your **\<CardsContainer />** should be updated.  
* **\<CardsContainer />** component should also additionaly render **\<CardsCreationForm />** as its children. This form should contain all the required inputs for creating the card (find a way on how to use only 1 handler for all the inputs) and a submit button. By clicking on a submit button the array of cards in your **\<CardsContainer />** should be updated with the new card data.  
* All the required handlers for creating/deleting cards should be in the **\<CardsContainer />** component and passed down to a child components as a **props**.  
* Rewrite all classes components to functional components with hooks  

# React Task 4 
***
# Task: 

**Summary:** implement a validation for the \<CardCreationForm /> (the form which is used to create a new \<Card /> component).  

**Main task:** if the user left one of the required inputs empty -> display an error message like ‘this field is required’ under it (design of the error message is up to you). The user should not be able to add a new card until all the required fields are filled.  

**Optional task:**  in addition to display the error message you can also scroll to the invalid input, for this you can:  
* use React.createRef() to capture the DOM Nodes of the inputs.  
* use HTML scroll api https://developer.mozilla.org/ru/docs/Web/API/Element/scrollIntoView  

**Note:**  the scroll API might not work as you expect (it depends on the position of your form), so if the form is placed at the bottom of the page there will be no visual ‘scrolling’ effect. **The main idea of the task is to validate your form.**  

# React Task 5 
***
# Task:  

**Summary**  
Based on your previous tasks, add 3 routes to your application: login page(/login), your profile page(/pofile), and your page with cards(/cards).  

**Requirements:** 
* Your app should redirect the user to a login page (/login). You can do it using the history API from react-router. On this login page create a form with 2 inputs (username and password) with a submit button (use mocked logic for login).  
* If the user successfully logged in, he can be able to view the profile(/profile) page and cards(/cards) page  
* Profile page contains any data you like. (Add 2-3 sentences about yourself)  
* Cards page should contain your \<CardsContainer /> component with all the logic you’ve done before (no additional code required)  

**Important note: if the user in not logged in he should NOT able to view /profile and /cards pages** 

# React Task 6 
***
# Task: 

**Summary**  

Based on your previous tasks integrate Redux for state management (you need both react and react-redux dependencies). 
Store all the application data into Redux state (e.g. cards data, user data, authorization status).  

**Implementation notes**  
1)  Create an additional folder in your app ( store, redux or something else). This folder will contain the store of your whole application(createStore), all the required reducers for your app (if you have more than 1 reducer, don’t forget to **combine** them), contain all the required actions for your app (**type** is the only required field for **action**, other fields are up to you). You can create additional folders and files there if you need  
2)  For using Redux with React you will need the **react-redux** library. Don’t forget to wrap the entire components hierarchy Provider component and pass the store as a prop to it.  
Each component, which needs access to a redux storecan be wrapped with **connect(mapStateToProps, mapDispatchToProps)(YourComponent)** or you can use hooks (useDispatch, useSelector)  
4)  Use **redux-thunk (purpose of redux-thunk, how to apply it to your store)** as middleware in order to ‘teach’ Redux to recognize special kinds of actions that are in fact functions. This middleware will help you to write the following ‘action-function’:  
![img](https://user-images.githubusercontent.com/61491916/119480071-f7ad4980-bd59-11eb-8cb0-db13a3a607b5.png)
