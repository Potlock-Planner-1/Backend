# Backend
Base URL: https://potluckplanner1.herokuapp.com

### Dummy data


```
  register: [
                {
                    "username": "one",
                    "password": "one"
                }
            ]
            
  Login:    [   
                {
                    "username": "one",
                    "password": "one"
                }
            ]  
  potlucks: [
                {
                    "id": 1,
                    "name": "joe's potluck",
                    "date": "08-01-2020",
                    "time": "9:00",
                    "location": "california",
                    "user_id": 1
                 }
            ] 
  items:    [
                {
                    "id": 45,
                    "item_name": "pasta",
                    "claimed": 1,
                    "potluck_id": 1
                }
            ]  
  guests:   [ 
                 {
                    "id": 2,
                    "name": "marina's potluck",
                    "date": "08-01-2020",
                    "time": "9:00",
                    "location": "california",
                    "user_id": 2
                  }
<<<<<<< HEAD
             ]
``` 
### Auth Routs
-----------------------------------------------------
Table||Method||Endpoint|| Description||
=======
             ]``` 
             
  ### Auth Routs
Table  |  Method   |   Endpoint          |   Description
-------|-----------|---------------------|----------------------------
users  |  POST     |  /api/auth/register |   registers a new user
users  |  Post     |  /api/auth/login    |   logs in if already registered

### Register
Method URL: /api/auth/register


>>>>>>> 794e718c6b7ada2e82ecd400b3f7299dc09a350c
