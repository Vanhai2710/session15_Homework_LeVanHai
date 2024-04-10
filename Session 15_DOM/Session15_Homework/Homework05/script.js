let names = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];

let namesList = document.getElementById("namesList");

// Duyệt qua mảng và tạo ra một thẻ `li` cho mỗi tên
for (let name of names) {
  let listItem = document.createElement("li");
  listItem.textContent = name;
  namesList.appendChild(listItem);
}
