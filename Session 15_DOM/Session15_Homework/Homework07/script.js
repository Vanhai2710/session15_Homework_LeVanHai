

let tableElement = document.querySelector("table");
let btn = document.querySelector("button");
let startRowNumber = 1; // Biến lưu số thứ tự hàng bắt đầu

btn.onclick = function() {
  // Tạo hàng mới
  let newRow = document.createElement("tr");

  // Thêm ô đầu tiên với nội dung cố định
  let cell1 = document.createElement("td");
  cell1.textContent = "Cell 1 row 1";
  newRow.appendChild(cell1);

  // Tạo và thiết lập nội dung cho cột 2 và 3
  for (let i = 1; i < 3; i++) {
    let cell = document.createElement("td");
    cell.textContent = `Cell ${i + 1} row ${startRowNumber + 1}`; // Tăng số thứ tự hàng
    newRow.appendChild(cell);
  }

  // Tăng số thứ tự hàng sau khi thêm
  startRowNumber++;

  // Thêm hàng mới vào bảng
  tableElement.appendChild(newRow);
};