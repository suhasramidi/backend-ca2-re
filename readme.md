
Implementing an endpoint:
-Create an endpoint that accepts a query parameter(eg:user)
-The endpoint should retrieve data for the user from a predefined set of data
-If the user is found, return a success message along with the user data
-If the user is not found, return a failure message

The user parameter cannot be empty
Return an error message:"User parameter cannot be empty" if not provided in the query
The entire data collection can be handled by a single array in memory.
The API should retrieve data from this pre-defined set instead of querying an external database.