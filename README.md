# fullstack_pagination
This is a full-stack pagination project

custom pagination project with Node + TypeScript + Express + MongoDB + React

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
