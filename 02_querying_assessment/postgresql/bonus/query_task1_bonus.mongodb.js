// Task 1 Bonus: Sides Menu Board
// The owner wants to update the printed menu board that displays only the side dishes.
// They need a list of every item in the 'Side' category along with its current price,
// so the designer can produce an accurate board without having to check each item manually.
//
// The dataset is identical in MongoDB — the same business insight can be retrieved.
//
// Hint: Write a query on the menu_items collection to find the name and price
// of all documents where the category is 'Side'.

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// Interpreted the task : The owner wants list of every item in the 'Side' category along with its current price
// what data you need : I need data [name, price] from menu_items
// which table(s) are involved : menu_items
// What SQL concepts you plan to use : find category "Side" in menu_items / show result only name and price

use("chrome-burger-db");

db.menu_items.find({ category: "Side" }, { name: 1, _id: 0, price: 1 });
