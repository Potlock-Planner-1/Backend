# Backend
## Base URL: https://potluckplanner1.herokuapp.com
            
  ### Auth Routs:  /api/auth/register && /api/auth/login 
 
Table  |  Method   |   Endpoint          |   Description
-------|-----------|---------------------|---------------------------------
users  |  POST     |  /api/auth/register |   registers a new user
users  |  POST     |  /api/auth/login    |   logs in if already registered

## Register
HTTP Method: [POST] (registers new users)
#### URL: /api/auth/register

#### Headers
Name	        | Type	     | Required	     | Description
----------------|------------|---------------|-----------------
Content-Type	| String	 | Yes	         | Must be application/JSON
Authorization	| String	 | Yes	         | JSON Web Token

#### Request Body
Name      |   Type       |   Required      |    Description
----------|--------------|-----------------|------------------------------
Username  |   String     |   Yes           |    Must be unique
password  |   String     |   Yes           |    Must be unique

#### Example
```
    {
        "username": "one",
        "password": "one"
    }


```
#### Responses
- status code [201] (Successfully registered a new user )
- status code [400] (missing username or password or username password requirement not met)
- status code [500] (server or database error)

## Login
HTTP Method: [POST],
#### URL: /api/auth/login

#### Headers
Name	        | Type	     | Required	     | Description
----------------|------------|---------------|-----------------
Content-Type	| String	 | Yes	         | Must be application/JSON
Authorization	| String	 | Yes	         | JSON Web Token

#### Request Body
Name      |   Type       |    Description
----------|--------------|------------------------------
Username  |   String     | Must match username in database
password  |   String     | Must match password associated with the username

#### Example
```
    {
        "username": "one",
        "password": "one"
    }


```
#### Responses
- status code [200] (welcome you are logged in )
- status code [400] (missing username or password )
- status code [401] (incorrect username or password )
- status code [500] (server or database error)


### user, potluck, guest, item
Table   | Method   | Endpoint                 | Description
------- |----------|-------------------------|-------------------------------------------------------------
users   | GET      | /api/users               | gives all teh users
potluck | POST     | /api/user/:id/potlucks   | creates potluck under the given user id
potluck | GET      | /api/user/:id/potlucks   | gives all potlucks associated with the given user id
potluck | GET      | /api/potlucks            | gives all potlucks associated with all user
potluck | GET      | /api/potlucks/:id        | gives a potluck associated with the given potluck id
potluck | PUT      | /api/potlucks/:id        | allow edit potluck associated with the given potluck id
potluck | DELETE   | /api/potlucks/:id        | deletes potluck with the given potluck id
guest   | GET      | /api/guests              | gives all the guests associated with all users
guest   | GET      | /api/guests/:id          | gives guest associated with given guest id
guest   | GET      | /api/potlucks/:id/guests | gives all the guests associated with the given potluck id
guest   | POST     | /api/potlucks/:id/guests | adds guest under the given potluck id
guest   | PUT      | /api/guest/:id           | allow edit guest info associated with given guest id
guest   | DELETE   | /api/guest/:id           | deletes guest associated with given user id
item    | GET      | /api/items               | gives all the items associated with all users
item    | GET      | /api/items/:id           | gives item associated with given item id
item    | GET      | /api/potlucks/:id/items  | gives all the items associated with the given potluck id
item    | POST     | /api/potlucks/:id/items  | adds item under the given potluck id
item    | PUT      | /api/item/:id            | allow edit item info associated with given item id
item    | DELETE   | /api/item/:id            | deletes item associated with given user id

## user
HTTP Method: [GET] (allow us to get list of users)
#### URL: /api/users

#### Headers
Name	        | Type	     | Required	     | Description
----------------|------------|---------------|-----------------
Content-Type	| String	 | Yes	         | Must be application/JSON
Authorization	| String	 | Yes	         | JSON Web Token

### example
    ```
        {
            "id": 1,
            "username": "lambda",
            "password": "$2a$08$wQy9IMpfg9nEmJkX1nyV6uJysN7w.SItF.MWLmeQDVk77LbpgVBFi",
            "role_id": null
        }

    ```

#### Responses
    - status code [200] (successful to get  list of users )
    - status code [500] (server or database error)

## Potluck
1. HTTP method: [POST] (Creates a potluck with name(potluck name), date, time, and location.
    #### URL: /api/user/:id/potlucks

    #### Headers(not implemented)
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|---------------------------
    Content-Type   | String	     | Yes	            | Must be application/JSON
    Authorization  | String	     | Yes	            | JSON Web Token

    #### Body
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|-----------------------------
    id             | Integer     | No               | Auto assigned
    name	       | String      | Yes              | Must be unique
    date	       | String	     | Yes	            |
    time	       | String	     | Yes              |	
    location	   | String	     | Yes	            |
    user_id        | Integer     | No               | Auto assigned

    #### example
    ```
    {
        "id": 4,
        "name": "jane's potluck",
        "date": "08-01-2020",
        "time": "9:00",
        "location": "california",
        "user_id": 4
    }
    ```

    #### responses
    - status code [201] (successfully created potluck associated with the user id)
    - status code [400] (could not find user associated with teh given id)
    - status code [500] (failed to create potluck due to server or database error)

2. HTTP method: [GET] (gives all the potlucks associated with teh user id)
    ##### URL: /api/user/:id/potlucks

    #### Headers (not implemented)
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|---------------------------
    Content-Type   | String	     | Yes	            | Must be application/JSON
    Authorization  | String	     | Yes	            | JSON Web Token

    #### Body
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|-----------------------------
    id             | Integer     |                  | Auto assigned
    name	       | String      |                  | Must be unique
    date	       | String	     |    	            |
    time	       | String	     |                  |	
    location	   | String	     |    	            |
    user_id        | Integer     |                  | Auto assigned

    #### example
    ```
    {
        "id": 4,
        "name": "jane's potluck",
        "date": "08-01-2020",
        "time": "9:00",
        "location": "california",
        "user_id": 4
    }
    ```

    #### responses
    - status code [200] (gives potlucks associated with given user id)
    - status code [404] (could not find potluck associated with teh given user id/ user id does not exist)
    - status code [500] ( server or database error)

3. HTTP method: [GET] (gives list of all potlucks associated with all users)
    ##### URL: /api/potlucks

    #### Headers (not implemented)
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|---------------------------
    Content-Type   | String	     | Yes	            | Must be application/JSON
    Authorization  | String	     | Yes	            | JSON Web Token

    #### Body
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|-----------------------------
    id             | Integer     |                  | Auto assigned
    name	       | String      |                  | Must be unique
    date	       | String	     |    	            |
    time	       | String	     |                  |	
    location	   | String	     |    	            |
    user_id        | Integer     |                  | Auto assigned

    #### example
    ```
    {
        "id": 4,
        "name": "jane's potluck",
        "date": "08-01-2020",
        "time": "9:00",
        "location": "california",
        "user_id": 4
    }
    ```

    #### responses
    - status code [200] (gives potlucks associated with given user id)
    - status code [500] ( server or database error)

4. HTTP method: [GET] (gives potluck associated with specific potluck id)
    ##### URL: /api/potlucks/:id

    #### Headers (not implemented)
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|---------------------------
    Content-Type   | String	     | Yes	            | Must be application/JSON
    Authorization  | String	     | Yes	            | JSON Web Token

    #### Body
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|-----------------------------
    id             | Integer     |                  | Auto assigned
    name	       | String      |                  | Must be unique
    date	       | String	     |    	            |
    time	       | String	     |                  |	
    location	   | String	     |    	            |
    user_id        | Integer     |                  | Auto assigned

    #### example
    ```
    {
        "id": 4,
        "name": "jane's potluck",
        "date": "08-01-2020",
        "time": "9:00",
        "location": "california",
        "user_id": 4
    }
    ```
    #### responses
    - status code [200] (gives potlucks associated with given potluck id)
    - status code [404] (could not find potluck associated with given potluck id/ potluck id does not exist)
    - status code [500] ( server or database error)

5. HTTP method: [PUT] (gives potluck associated with specific potluck id)
    ##### URL: /api/potlucks/:id

    #### Headers (not implemented)
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|---------------------------
    Content-Type   | String	     | Yes	            | Must be application/JSON
    Authorization  | String	     | Yes	            | JSON Web Token

    #### Body
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|-----------------------------
    name	       | String      |   No             | Must be unique
    date	       | String	     |   No             |
    time	       | String	     |   No             |	
    location	   | String	     |   No             |

    #### example
    ```
    {
        "id": 4,
        "name": "jane's potluck",
        "date": "08-01-2020",
        "time": "9:00",
        "location": "california",
        "user_id": 4
    }
    ```
    #### responses
    - status code [200] (potlucks updated associated with given potluck id)
    - status code [404] (could not find potluck associated with given potluck id/ potluck id does not exist)
    - status code [500] ( server or database error)

6. HTTP method: [DELETE] (Deletes potluck associated with specific potluck id)
    ##### URL: /api/potlucks/:id

    #### Headers (not implemented)
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|---------------------------
    Content-Type   | String	     | Yes	            | Must be application/JSON
    Authorization  | String	     | Yes	            | JSON Web Token

    #### responses
    - status code [200] (deletes potlucks associated with given potluck id)
    - status code [404] (could not find potluck associated with given potluck id/ potluck id does not exist)
    - status code [500] ( server or database error)

## Guest
1. HTTP method: [GET] (gives list of all guests associated with all users)
    ##### URL: /api/guests

    #### Headers (not implemented)
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|---------------------------
    Content-Type   | String	     | Yes	            | Must be application/JSON
    Authorization  | String	     | Yes	            | JSON Web Token

    #### Body
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|-----------------------------
    id             | Integer     |                  | Auto assigned
    guest_name	   | String      |                  | Must be unique
    potluck_id     | Integer     |                  | Auto assigned

    #### example
    ```
    {
        "id": 18,
        "guest_name": "maria",
        "potluck_id": 5
    }
    ```

    #### responses
    - status code [200] (gives guests associated with all users)
    - status code [500] ( server or database error)

2. HTTP method: [GET] (gives guests associated with specific guest id)
    ##### URL: /api/guests/:id

    #### Headers (not implemented)
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|---------------------------
    Content-Type   | String	     | Yes	            | Must be application/JSON
    Authorization  | String	     | Yes	            | JSON Web Token

    #### Body
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|-----------------------------
    id             | Integer     |                  | Auto assigned
    guest_name	   | String      |                  | Must be unique
    potluck_id     | Integer     |                  | Auto assigned

    #### example
    ```
    {
        "id": 18,
        "guest_name": "maria",
        "potluck_id": 5
    }
    ```
    #### responses
    - status code [200] (gives guests associated with specific guest id)
    - status code [404] (could not find guest associated with given guest id/ guest id does not exist)
    - status code [500] ( server or database error)

3.  HTTP method: [GET] (gives all the guests associated with heh potluck id)
    ##### URL: /api/potlucks/:id/guests

    #### Headers (not implemented)
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|---------------------------
    Content-Type   | String	     | Yes	            | Must be application/JSON
    Authorization  | String	     | Yes	            | JSON Web Token

    #### Body
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|-----------------------------
    id             | Integer     |                  | Auto assigned
    guest_name	   | String      |                  | Must be unique
    potluck_id     | Integer     |                  | Auto assigned

    #### example
    ```
    {
        "id": 18,
        "guest_name": "maria",
        "potluck_id": 5
    }
    ```

    #### responses
    - status code [200] (gives guest associated with given potluck id)
    - status code [404] (could not find guest associated with teh given potluck id/ potluck id does not exist)
    - status code [500] ( server or database error)

4. HTTP method: [POST] (add a guest with guest_name to the potluck with given id)
    #### URL: /api/potlucks/:id/guests

    #### Headers(not implemented)
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|---------------------------
    Content-Type   | String	     | Yes	            | Must be application/JSON
    Authorization  | String	     | Yes	            | JSON Web Token

    #### Body
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|-----------------------------
    id             | Integer     | No               | Auto assigned
    guest_name     | String      | Yes              | Must be unique
    potluck_id     | Integer     | No               | Auto assigned

    #### example
    ```
    {
        "id": 18,
        "guest_name": "maria",
        "potluck_id": 5
    }
    ```
    #### responses
    - status code [201] (successfully added guest associated with the potluck id)
    - status code [404] (could not find potluck associated with teh given id)
    - status code [500] (failed to add guest due to server or database error)

5. HTTP method: [PUT] (to edit guest name associated with specific guest id)
    ##### URL: /api/guest/:id

    #### Headers (not implemented)
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|---------------------------
    Content-Type   | String	     | Yes	            | Must be application/JSON
    Authorization  | String	     | Yes	            | JSON Web Token

    #### Body
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|-----------------------------
    id             | Integer     | No               | Auto assigned
    guest_name     | String      | Yes              | Must be unique
    potluck_id     | Integer     | No               | Auto assigned

    #### example
    ```
    {
        "id": 18,
        "guest_name": "maria",
        "potluck_id": 5
    }
    ```
    #### responses
    - status code [200] (guest name updated associated with given guest id)
    - status code [404] (could not find guest associated with given guest id/ guest with provided id does not exist)
    - status code [500] ( server or database error)

6.  HTTP method: [DELETE] (Deletes guest associated with specific guest id)
    ##### URL: /api/guest/:id

    #### Headers (not implemented)
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|---------------------------
    Content-Type   | String	     | Yes	            | Must be application/JSON
    Authorization  | String	     | Yes	            | JSON Web Token

    #### responses
    - status code [200] (deletes guest associated with given guest id)
    - status code [404] (could not find guest associated with given guest id/ guest id does not exist)
    - status code [500] ( server or database error)

## Item
1. HTTP method: [GET] (gives list of all items associated with all potlucks)
    ##### URL: /api/items

    #### Headers (not implemented)
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|---------------------------
    Content-Type   | String	     | Yes	            | Must be application/JSON
    Authorization  | String	     | Yes	            | JSON Web Token

    #### Body
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|-----------------------------
    id             | Integer     |                  | Auto assigned
    item_name	   | String      |                  | Must be unique
    claimed        | 1/0         |                  | true/false
    potluck_id     | Integer     |                  | Auto assigned

    #### example
    ```
    {
        "id": 45,
        "item_name": "chicken pizza",
        "claimed": 1,
        "potluck_id": 1
    }
    ```

    #### responses
    - status code [200] (gives guests associated with all users)
    - status code [500] ( server or database error)

2. HTTP method: [GET] (gives items associated with specific item id)
    ##### URL: /api/items/:id

    #### Headers (not implemented)
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|---------------------------
    Content-Type   | String	     | Yes	            | Must be application/JSON
    Authorization  | String	     | Yes	            | JSON Web Token

    #### Body
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|-----------------------------
    id             | Integer     |                  | Auto assigned
    item_name	   | String      |                  | Must be unique
    claimed        | 1/0         |                  | true/false
    potluck_id     | Integer     |                  | Auto assigned

    #### example
    ```
    {
        "id": 45,
        "item_name": "chicken pizza",
        "claimed": 1,
        "potluck_id": 1
    }
    ```
    #### responses
    - status code [200] (gives item associated with specific item id)
    - status code [404] (could not find item associated with given item id/ item id does not exist)
    - status code [500] ( server or database error)

3.  HTTP method: [GET] (gives all the items associated with teh potluck id)
    ##### URL: /api/potlucks/:id/items

    #### Headers (not implemented)
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|---------------------------
    Content-Type   | String	     | Yes	            | Must be application/JSON
    Authorization  | String	     | Yes	            | JSON Web Token

    #### Body
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|-----------------------------
    id             | Integer     |                  | Auto assigned
    item_name	   | String      |                  | Must be unique
    claimed        | 1/0         |                  | true/false
    potluck_id     | Integer     |                  | Auto assigned

    #### example
    ```
        "id": 45,
        "item_name": "chicken pizza",
        "claimed": 1,
        "potluck_id": 1
    }
    ```

    #### responses
    - status code [200] (gives item associated with given potluck id)
    - status code [404] (could not find items associated with the given potluck id/ potluck id does not exist)
    - status code [500] ( server or database error)

4. HTTP method: [POST] (add a items with item_name to the potluck with given potluck id)
    #### URL: /api/potlucks/:id/items

    #### Headers(not implemented)
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|---------------------------
    Content-Type   | String	     | Yes	            | Must be application/JSON
    Authorization  | String	     | Yes	            | JSON Web Token

    #### Body
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|-----------------------------
    id             | Integer     | No               | Auto assigned
    item_name	   | String      | Yes              | Must be unique
    claimed        | 1/0         | Yes              | true/false
    potluck_id     | Integer     | No               | Auto assigned

    #### example
    ```
        "id": 45,
        "item_name": "chicken pizza",
        "claimed": 1,
        "potluck_id": 1
    }
    ```
    #### responses
    - status code [201] (successfully added item associated with the potluck id)
    - status code [404] (could not find potluck associated with the given potluck id)
    - status code [500] (failed to add guest due to server or database error)

5. HTTP method: [PUT] (to edit item_name, claimed status associated with specific item id)
    ##### URL: /api/item/:id

    #### Headers (not implemented)
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|---------------------------
    Content-Type   | String	     | Yes	            | Must be application/JSON
    Authorization  | String	     | Yes	            | JSON Web Token

    #### Body
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|-----------------------------
    id             | Integer     | No               | Auto assigned
    item_name	   | String      | Yes              | Must be unique
    claimed        | 1/0         | Yes              | true/false
    potluck_id     | Integer     | No               | Auto assigned

    #### example
    ```
        "id": 45,
        "item_name": "chicken pizza",
        "claimed": 1,
        "potluck_id": 1
    }
    ```

#### responses
- status code [200] (item name updated associated with given item id)
    - status code [404] (could not find item associated with given item id/ item with provided id does not exist)
    - status code [500] ( server or database error)

6.  HTTP method: [DELETE] (Deletes item associated with specific item id)
    ##### URL: /api/items/:id

    #### Headers (not implemented)
    Name	       | Type	     | Required	        | Description
    ---------------|-------------|------------------|---------------------------
    Content-Type   | String	     | Yes	            | Must be application/JSON
    Authorization  | String	     | Yes	            | JSON Web Token

    #### responses
    - status code [200] (deletes item associated with given item id)
    - status code [404] (could not find item associated with given item id/ item id does not exist)
    - status code [500] ( server or database error)