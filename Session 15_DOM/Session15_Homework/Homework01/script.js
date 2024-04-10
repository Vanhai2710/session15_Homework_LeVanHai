 
 
 // Danh sách các mục
 let items = ["List item number 1", "List item number 2", "List item number 3"];

 // Tạo một đối tượng ul
 let ul = document.createElement('ul');

 // Duyệt qua mỗi mục trong danh sách và tạo một đối tượng li cho mỗi mục
 items.forEach(function(item) {
     let li = document.createElement('li');
     li.textContent = item;
     ul.appendChild(li); // Thêm mục vào trong đối tượng ul
 });

 // Thêm đối tượng ul vào trong thẻ body
 document.body.appendChild(ul);