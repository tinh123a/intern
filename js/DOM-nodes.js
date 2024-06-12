const paran = document.createElement('p');
const node = document.createTextNode('gán cho p');
paran.appendChild(node);

const elment = document.getElementById("div1");
elment.appendChild(paran);
////insertBefore() thêm element mới vào trước element chỉ định trong nodes cha
const newElement = document.createElement('p');
const node1 = document.createTextNode('new eletment use insertbefore()');
newElement.appendChild(node1);
elment.insertBefore(newElement,paran);
// xóa element
newElement.remove();
//replaceChild()
const child = document.getElementById('p2');
elment.replaceChild(paran,child);


