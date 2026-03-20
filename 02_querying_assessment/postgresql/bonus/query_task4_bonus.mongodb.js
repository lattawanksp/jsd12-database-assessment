// Task 4 Bonus: Supplier Dependency Check
// The manager has just heard that 'Freshest Farm Produce' may be delayed on their next delivery.
// Before deciding whether to source from an alternative supplier, they need to know exactly
// which ingredients depend on that supplier, so they can assess the impact on the menu.
//
// The dataset is identical in MongoDB — the same business insight can be retrieved.
//
// Hint: In the ingredients collection, supplier references are stored as ObjectIds rather than names.
// Use an aggregation pipeline with $lookup to join the ingredients collection with the suppliers
// collection, then filter where the supplier name is 'Freshest Farm Produce' and return
// only the ingredient names.

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// Interpreted the task : The manager need to know which ingredients depend on 'Freshest Farm Produce' supplier.
// what data you need : ingredients name, supplier_id name, supplier_id,
// which table(s) are involved : ingredients, suppliers
// What MongoDB concepts you plan to use :
// ข้อนี้ยังไม่รู้ค่ะ ใช้ AI ช่วยหาคำตอบ และคำอธิบายแต่ละ stage

use("chrome-burger-db");

db.ingredients.aggregate([
  // Stage 1: join กับตาราง suppliers
  {
    $lookup: {
      //LEFT JOIN โดย default
      from: "suppliers",
      localField: "supplier_id", //อันนี้เหมือน ON ใช้ key อะไรเชื่อมกัน
      foreignField: "_id", //เอา supplier_id ของ ingredients ไปหาให้ตรงกับ _id ของ suppliers
      as: "supplierInfo",
    },
  },
  // Stage 2: แกะ array ออก ($lookup ให้ผลเป็น array มาเสมอ → $unwind แกะออก → แล้ว $match ถึงจะกรองได้)
  {
    $unwind: "$supplierInfo",
  },
  // Stage 3: กรองเฉพาะ Freshest Farm Produce
  {
    $match: {
      //match ทำหน้าที่เหมือน WHERE
      "supplierInfo.name": "Freshest Farm Produce",
    },
  },
  // Stage 4: แสดงแค่ชื่อ ingredient
  {
    $project: {
      _id: 0,
      name: 1,
      "supplierInfo.name": 1, //ใส่""ด้วยเพราะ JS จะได้รู้ว่าเป็น key เดียวกัน
    },
  },
]);
