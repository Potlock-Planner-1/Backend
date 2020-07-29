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
             ]
``` 
### Auth Routs
-----------------------------------------------------
Table||Method||Endpoint|| Description||
