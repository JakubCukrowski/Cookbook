## Live version available here: https://gleeful-conkies-1f4a7c.netlify.app/

# Recipes page a.k.a. Cookbook
It's a page dedicated to recipes with photos, inspired a bit by smaker.pl and kwestiasmaku.com in terms of its logic. My project uses Firebase, Firestore, and Storage to create accounts, store user and recipes data, and enable the addition of photos.

## How it works
1. Login using credetials below <br></br>
Test account <br></br>
<strong>email:</strong> test@test.com <br></br>
<strong>password:</strong> 123456 <br></br>
or create a new account
2. Pressing user's photo in the top-right corner redirects to the dashboard. Here a user can update a photo, add new recipe, edit added recipes, delete a recipe and view liked recipes
3. User can search for the desired recipe on the homepage by recipe's name, or tag
4. User can check the recipes from the most popular tags counted by likes count of the recipe and tags received from all recipes
5. User can filter recipes by category, preparation time and difficulty by pressing 'see more' below recipes on the homepage
6. User in recipe card is a link which redirects to the user's recipes

### Current features include:

- Creating an account <br></br>
- Uploading user photos <br></br>
- Adding recipes <br></br>
- Liking recipes <br></br>
- Storing recipes in a user's dashboard under 'liked' and 'created' <br></br>
- Searching for a recipe <br></br>
- Advanced search filters <br></br>
- Updating recipes <br></br>
- Deleting recipes <br></br>
- Handling <hero /> component buttons for the most popular categories <br></br>
- Commenting on recipes with nested comments and rating <br></br>
- Editing and deleting comments <br></br>
- A possibility to view all recipes added by the user once on the single recipe page by pressing a user name on a recipe card <br></br>

### Recently added 
- Follow user/s and notifications once one of the followed users adds a recipe
- Notification to the recipe owner when recipe was liked. 

### To be added: 

- A possibility to change email address <br></br>
- Including special characters check when creating a password <br></br>
- Create a planner <br></br>
