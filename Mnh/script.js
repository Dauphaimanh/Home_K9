const customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
  ];
  
  const result = createCustomers(customers); // Tạo hàm createCustomers này. return về mảng mới.

function createPerson(name, age, address) {
  return {
    name,
    age,
    address,
    getShortName() {
      return this.name.split(" ")[0] + " " + this.name.split(" ")[1][0] + ".";
    }
  };
}

function createCustomers(customers) {
    // Tạo mảng mới để lưu trữ các đối tượng có cấu trúc mới
    const newCustomers = [];
  
    // Duyệt qua mảng customers đầu vào
    for (const customer of customers) {
      // Tạo đối tượng mới với thuộc tính name, age, address
      const newPerson = createPerson(customer.name, customer.age, customer.address);
  
      // Thêm thuộc tính shortName cho đối tượng mới
      newPerson.shortName = newPerson.getShortName();
  
      // Thêm đối tượng mới vào mảng newCustomers
      newCustomers.push(newPerson);
    }
  
    // Sắp xếp mảng newCustomers theo tuổi
    newCustomers.sort((a, b) => a.age - b.age);
  
    // Trả về mảng newCustomers
    return newCustomers;
  }

  
const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

const result = createCustomers(customers);
console.log(result);
