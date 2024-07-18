// Bài 2 : sắp xếp tăng dần theo tuổi và thêm thuộc tính mới

var customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
  ];
  
var result = createCustomers(customers);
console.log(result);
  

function createCustomer(customer) {
    return {
      name: customer.name,
      age: customer.age,
      address: customer.address,
      shortName: customer.name.split(' ').slice(0, 2).join(' ')
    };
  };

function createCustomers(customers) {
    var arrange = customers.sort((a, b) => a.age - b.age);
    var newCustomers = [];
    
    for (var customer of arrange) {
        var newCustomer = createCustomer(customer);
        newCustomers.push(newCustomer);
    }
    return newCustomers;
}
