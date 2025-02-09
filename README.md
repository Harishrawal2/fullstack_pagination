# fullstack_pagination
This is a full-stack pagination project

custom pagination project with Node + TypeScript + Express + MongoDB + React

# 1 Logic
const startIndex = (page - 1) * limit;

The formula (page - 1) * limit is used to calculate the starting index of items for pagination. 

how it works:

page represents the current page number.
limit is the number of items per page.
(page - 1) * limit gives the index where the items for that page should start.

Example:
If page = 1 and limit = 10:

(1 - 1) * 10 = 0, so we start at index 0 (first item).
If page = 2 and limit = 10:

(2 - 1) * 10 = 10, so we start at index 10 (11th item).
If page = 3 and limit = 10:

(3 - 1) * 10 = 20, so we start at index 20 (21st item).


# 2 Logic
const results: { next?: { page: number; limit: number }; previous?: { page: number; limit: number }; users: any[] } = {
        users: data.slice(startIndex, endIndex)
    };

next?: An optional object that stores the page number and limit for the next page.
previous?: An optional object that stores the page number and limit for the previous page.
users: An array of user data.
Initial Value (users: data.slice(startIndex, endIndex))

The users property is set to a subset of the data array, based on the calculated indices (startIndex and endIndex).
data.slice(startIndex, endIndex) extracts only the users for the current page.
Later, next and previous are conditionally added

If there are more users after the current page, next is set.
If there were users before the current page, previous is set.

# 3 Logic
if (endIndex < data.length) {
        results.next = {
            page: page + 1,
            limit: limit
        };
    }

# If:
data.length = 30 (total users)
page = 1
limit = 10
endIndex = 10 (since 1 * 10 = 10)

# If: 
the user requests page = 3, then:
endIndex = 30
30 is NOT < 30
next will not be included, as there is no next page.
