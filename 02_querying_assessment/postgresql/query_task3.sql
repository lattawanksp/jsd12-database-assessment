-- Task 3: Staff Performance Review
-- At the end of the month, the owner wants to reward the hardest-working cashiers.
-- To decide fairly, they want to see how many orders each staff member has processed,
-- with the busiest staff member appearing at the top of the list.
--
-- Hint: Write a query to find the total number of orders processed by each staff member.
-- The result should show the staff member's full name (concatenated) and their total order count,
-- ordered by the count in descending order.

-- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- Write the equivalent query for MongoDB. See query_task3_bonus.mongodb.js

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- Interpreted the task : the owner wants to see how many orders each staff member has processed, and the busiest staff member appearing at the top of the list.
-- what data you need : staff name, count orders each staff, COUNT AS, DESC
-- which table(s) are involved : orders, staff
-- What SQL concepts you plan to use : 
-- 1. Find first_name, last_name from table staff and COUNT order from staff id as TotalOrder
-- 2. Use LEFT JOIN to find all staff, even if they don't have any orders.
-- 3. staff_id needs to match. Then group by staff_id, and finally order by TotalOrder from highest to lowest.

SELECT Staff.first_name, Staff.last_name, COUNT(Orders.staff_id) AS TotalOrder
FROM Staff
LEFT JOIN Orders ON Staff.staff_id = Orders.staff_id
GROUP BY Staff.staff_id 
ORDER BY TotalOrder DESC;


