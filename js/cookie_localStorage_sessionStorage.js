document.cookie = 'name = tinh; expires = ${new Date (2022-02-01 10:00:00).toUTString()}';
console.log(document.cookie);

//localStorage
localStorage.setItem('đây là key','đây là value');
console.log(localStorage.getItem('đây là key'));
localStorage.removeItem('đây là key')
console.log(localStorage.getItem('đây là key')); //nll
//xóa all
localStorage.clear()

//session tương tự với storage điểm khác là giữa phạm vi các tab local storage thì có thế thấy dữ liệu qua các tab khi đã ngưng thực thi còn sesstion thì không được