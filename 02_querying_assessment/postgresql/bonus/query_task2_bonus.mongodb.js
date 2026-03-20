// Task 2 Bonus: Kitchen Staff Contact List
// The manager has a last-minute change to the kitchen prep schedule and needs to notify
// all cooks as soon as possible. They need the full names of every staff member
// whose role is 'Cook' so they can be contacted directly.
//
// The dataset is identical in MongoDB — the same business insight can be retrieved.
//
// Hint: Write a query on the staff collection to find the first_name and last_name
// of all documents where the role is 'Cook'.

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// Interpreted the task : They need the full names of every staff member whose role is 'Cook'
// what data you need : first_name, last_name, role
// which table(s) are involved : Staff
// What SQL concepts you plan to use : find role: "Cook" in staff / show result first_name, last_name and cook role

use("chrome-burger-db");

db.staff.find(
  { role: "Cook" },
  { first_name: 1, last_name: 1, _id: 0, role: 1 },
);
