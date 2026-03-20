// Task 3 Bonus: Staff Performance Review
// At the end of the month, the owner wants to reward the hardest-working cashiers.
// To decide fairly, they want to see how many orders each staff member has processed,
// with the busiest staff member appearing at the top of the list.
//
// The dataset is identical in MongoDB — the same business insight can be retrieved.
//
// Hint: Write an aggregation query on the orders collection to count the number of orders
// per staff member. Each order embeds the staff member's first and last name directly.
// The result should show each staff member's full name and their total order count,
// ordered by the count in descending order.

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// Interpreted the task : the owner wants to see how many orders each staff member has processed, and the busiest staff member appearing at the top of the list.
// what data you need : staff name, count ObjectId (?)
// which table(s) are involved : orders
// What MongoDB concepts you plan to use : 0.อึ้งส์ก่อน
// 1. จัดกลุ่ม เอา $group มาเก็บข้อมูลแบบ 1 document = 1 order
// 2. ใช้ project เลือกและจัดรูปแบบ field ที่จะแสดง คือ 0/1
//3. ใช้ $sort เพื่อเรียง -1 แสดงค่ามาก > น้อย

use("chrome-burger-db");

db.orders.aggregate([
  // Stage 1: ใช้ $group รวม documents จัดกลุ่มที่มีชื่อเหมือนกันเข้าเป็นกลุ่มเดียว
  {
    $group: {
      _id: "$staff.staff_id",
      first_name: { $first: "$staff.first_name" },
      last_name: { $first: "$staff.last_name" },
      TotalOrder: { $sum: 1 }, //บวก 1 ทุกครั้งที่เจอ document = นับจำนวน order //ทำไมไม่ใช้ count? เพราะมันจะนับรวมทุกอันไม่ได้นับเฉพาะของใครของมัน
    },
  },
  // Stage 2: รวมชื่อ + เลือก field ที่จะแสดง
  {
    $project: {
      _id: 0,
      first_name: 1,
      last_name: 1,
      //fullName: { $concat: ["$first_name", " ", "$last_name"] }, //รวมชื่อเป็น full name ก็ได้
      TotalOrder: 1,
    },
  },
  // Stage 3: เรียงมากไปน้อย
  {
    $sort: { TotalOrder: -1 },
  },
]);
