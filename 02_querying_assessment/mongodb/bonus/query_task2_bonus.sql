-- Task 2 Bonus: Shift Activity Report
-- Jane Doe has an upcoming performance review and the manager wants to look at her order history
-- ahead of the meeting. They only need to see when each order was placed and what it was worth —
-- no other details are required for this particular review.
--
-- The dataset is identical in PostgreSQL — the same business insight can be retrieved.
--
-- Hint: Write a query to find the order_date and total_price from the Orders table
-- for all orders handled by Jane Doe. You will need to join with the Staff table
-- to filter by the staff member's name.

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- Interpreted the task : the manager wants to see when each order was placed and what it was worth
-- what data you need : Jane Doe's order (just order placed, order worth)
-- which table(s) are involved : orders, staff
-- What SQL concepts you plan to use : 
-- 1. Find only order_date and total_price
-- 2. Join to table that staff_id needs to match.
-- 3. Then filter for Staff where first name = 'Jane'.

SELECT Orders.order_date, Orders.total_price
FROM Orders
JOIN Staff ON Orders.staff_id = Staff.staff_id
WHERE first_name = 'Jane';
