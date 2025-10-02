// ============================================ Phone Management

// ====================== Selectors
const phoneManagement = document.querySelector('.phoneManagement');
let tableOfPhones = document.querySelector('.phoneManagement table tbody');
let phones = [];
let inputName = document.querySelector('.phoneManagement #inputName');
let inputPrice = document.querySelector('.phoneManagement #inputPrice');
let inputqty = document.querySelector('.phoneManagement #inputQty');
let isEditing = false;
let addBtn = document.querySelector('.phoneManagement #addBtn');
let saveChangesBtn = document.querySelector('.phoneManagement #saveChangesBtn');
let indexToEdit = null;

// ====================== Functions
let renderPhones = () => {
    tableOfPhones.innerHTML = '';
    phones.forEach((el, index) => {
        let row = `
        <tr>
            <td>${index + 1}</td>
            <td>${el.name}</td>
            <td>${el.price} $</td>
            <td>${el.quantity}</td>
            <td class="actions">
                <button class="btn btn-danger" onclick="deletePhone(${index})">Del</button>
                <button class="btn btn-warning" onclick="editPhone(${index})">Edit</button>
            </td>
        </tr>`
        tableOfPhones.innerHTML += row;
    });
};

// ====================== Add New Phone
let addNewPhone = () => {
    let newPhone = {
        name: inputName.value,
        price: +inputPrice.value,
        quantity: +inputqty.value
    };
    phones.push(newPhone);
    renderPhones();
    // بيفضي ال inputs.
    inputName.value = '';
    inputPrice.value = '';
    inputqty.value = '';
};

// ====================== Delete Phone
let deletePhone = (index) => {
    let sure = confirm('Are you sure you want to delete this phone?');
    if (sure) {
        phones.splice(index, 1);
    }
    renderPhones();
    // sweetalerts دي مكتبة
    swal.fire({
        icon: 'success',
        title: 'تم حذف الهاتف بنجاح 🥳',
        showConfirmButton: false,
        timer: 1500,
    })
}

// ====================== Edit Phone
let editPhone = (index) => {
    // عشان اباصي ال index.
    indexToEdit = index;
    // ================================
    // بيحولنا لوضع التعديل
    isEditing = true;
    addBtn.classList.add('d-none');
    saveChangesBtn.classList.remove('d-none');
    // ================================
    // بيرجع البيانات لل inputs.
    inputName.value = phones[index].name;
    inputPrice.value = phones[index].price;
    inputqty.value = phones[index].quantity;
    renderPhones();
};

// ====================== Save Changes
let saveChanges = () => {
    let newPhone = {
        name: inputName.value,
        price: +inputPrice.value,
        quantity: +inputqty.value
    };
    phones[indexToEdit] = newPhone;
    renderPhones();
    inputName.value = '';
    inputPrice.value = '';
    inputqty.value = '';
    // بيرجع الوضع القديم لاضافة هاتف
    isEditing = false;
    addBtn.classList.remove('d-none');
    saveChangesBtn.classList.add('d-none');
};