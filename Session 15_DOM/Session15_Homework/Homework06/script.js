const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addItemButton");
const itemsList = document.getElementById("itemsList");

// Hàm thêm item vào danh sách
function addItem() {
  const itemValue = itemInput.value;

  // Tạo ra một thẻ `li` cho item
  const listItem = document.createElement("li");
  listItem.textContent = itemValue;

  // Thêm item vào danh sách
  itemsList.appendChild(listItem);

  // Xóa giá trị trong ô nhập liệu
  itemInput.value = "";
}

// Thêm sự kiện click cho nút "Thêm"
addButton.addEventListener("click", addItem);
