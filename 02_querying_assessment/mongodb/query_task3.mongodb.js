// Task 3: Stock Replenishment Check
// Before placing the weekly supply order, the manager wants to avoid over-ordering ingredients
// that are already well-stocked. They need a list of every ingredient with a stock level
// of 100 or more so those can be deprioritised in this week's order.
//
// Hint: Write a query to find all ingredients in the ingredients collection that have a stock_level of 100.00 or more.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task3_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// Interpreted the task : the manager need a list of every ingredient with a stock level of 100 or more
// what data you need : name and stock_level
// which table(s) are involved : ingredients
// What MongoDB concepts you plan to use :
// 1. use $gte for find >= 100
// 2. use 0 / 1 to show only name and stock level

use("chrome-burger-db");

db.ingredients.find(
  { stock_level: { $gte: 100 } },
  { name: 1, stock_level: 1, _id: 0 },
);
