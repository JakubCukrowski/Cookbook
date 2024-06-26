## Live version available here: https://przepisowa-pasja.netlify.app/

# Recipes page a.k.a. Cookbook
It's a page dedicated to recipes with photos, inspired a bit by smaker.pl and kwestiasmaku.com in terms of its logic. My project uses Firebase, Firestore, and Storage to create accounts, store user and recipes data, and enable the addition of photos. The project currently uses bootstrap, but I'm chagning it to material UI.

## How it works
1. Login using
Test account - <strong>email:</strong> test@test.com <strong>password:</strong> 123456 or create a new account
2. Pressing user's photo in the top-right corner redirects to the dashboard. Here a user can update a photo, add new recipe, edit added recipes, delete a recipe and view liked recipes
3. User can search for the desired recipe on the homepage by recipe's name, or tag
4. User can check the recipes from the most popular tags counted by likes count of the recipe and tags received from all recipes
5. User can filter recipes by category, preparation time and difficulty by pressing 'see more' below recipes on the homepage
6. User in recipe card is a link which redirects to the user's recipes
7. User can see notifications of liked recipe, and followed person. Hit the notifications button to check the activity

### Current features include:

- Creating an account
- Uploading user photos
- Adding recipes 
- Liking recipes
- Storing recipes in a user's dashboard under 'liked' and 'created'
- Searching for a recipe 
- Advanced search filters 
- Updating recipes 
- Deleting recipes
- Handling <hero /> component buttons for the most popular categories
- Commenting on recipes with nested comments and rating
- Editing and deleting comments
- A possibility to view all recipes added by the user once on the single recipe page by pressing a user name on a recipe card

### Recently added 
- Follow user/s and notifications once one of the followed users adds a recipe
- Notification to the recipe owner when recipe was liked.
- Formik for sign in/up validation
- Material UI

### To be added: 

- A possibility to change email address
- Including special characters check when creating a password
- Create a planner
