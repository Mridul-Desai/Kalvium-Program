![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

# Meal Finder Application

## Overview

This CA involves implementing a Meal Finder application that allows users to search for meals by category, view details of a specific meal, and generate a random meal. The application also includes a modal to display meal ingredients and can be tested using the provided test cases.

## Completed Functions
**fetchRandomMeal():** Fetches a random meal from the MealDB API and displays it on the page.

**displayMeal(meal, container):** Displays the meal information in the specified container.

**clearSearchAndHideMeals():** Clears the search input and hides meal-related elements.

### fetchMealsByCategory(category)

- Description: Fetches meals by category from the MealDB API and displays them in the mealsContainer. Updates the mealsContainer with meal items and sets up click events to fetch and display meal details.
- Endpoint: https://www.themealdb.com/api/json/v1/1/filter.php?c=${category} {for eg: https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood}
- Usage: Call this function when the user presses 'Enter' in the search input.


## Functions to be Completed

### fetchMealDetails(mealId)
- Description: Fetches detailed information about a specific meal from the MealDB API and displays it in a modal. Opens the modal to show the meal details.
- Endpoint: https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId} {for eg: https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772}
- Usage: Call this function when a meal item is clicked.


### displayIngredients(meal)
- Description: Displays the list of ingredients for the given meal in the modal.
- Usage: This function should be called within displayMeal or fetchMealDetails to show the ingredients.

### Close Modal Functionality
- Description: The modal displaying meal details should be hidden when the close button (.close) is clicked. This is part of Task 3, where the modal interaction is handled.
- Usage: You need to add an event listener to the close button. When clicked, the modal will be hidden by adding a "hidden" class to the modal.


### clearSearchAndHideMeals()
- Description: Clears the search input field and hides the meals container when a new search is initiated or when a random meal is fetched.
- Usage: This function is called at the start of fetchMealsByCategory and fetchRandomMeal.


#### Usage
- Search for Meals: Enter a meal category in the search input and press 'Enter' to fetch and display meals of that category.
- View Random Meal: A random meal is fetched and displayed when the page loads.
- View Meal Details: Click on a meal item to view detailed information in a modal.


The HTML and CSS code is already given to you. You need to implement the functionalities in app.js.

Expected output GIF![](https://www.loom.com/share/e1f2f347e75c47d482429f86a2f8ecd8?sid=ebf8d9a8-8fee-425a-8454-42fd5dd6e0d7)


### Test Cases
- should open a modal with ingredients when a meal is clicked
- should close the modal when the close button is clicked
- should clear search input, empty meals container, and hide meal list section
All the very best !