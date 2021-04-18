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
