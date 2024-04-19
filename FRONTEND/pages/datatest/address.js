var userAddress = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    number: "+66-99-999-9999",
    addresses: [
      {
        address_type: "HOME",
        address_line_1: "123 หมู่บ้านสุขสบาย ซอยประชาร่วมใจ 3",
        address_line_2: "ถนนสุขุมวิท 103",
        city: "กรุงเทพมหานคร",
        district: "เขตบางนา",
        sub_district: "แขวงบางนาใต้",
        postal_code: "10540",
        country: "Thailand",
      },
      {
        address_type: "WORK",
        address_line_1: "อาคาร XYZ ชั้น 12",
        address_line_2: "ถนนเพชรบุรีตัดใหม่",
        city: "กรุงเทพมหานคร",
        district: "เขตราชเทวี",
        sub_district: "แขวงมักกะสัน",
        postal_code: "10400",
        country: "Thailand",
      },
      {
        address_type: "VACATION",
        address_line_1: "456 Main Street",
        address_line_2: "",
        city: "San Francisco",
        state: "California",
        postal_code: "94105",
        country: "USA",
      },
    ],
  },
];


function getAddress() {
  return userAddress;
}

export { getAddress };
