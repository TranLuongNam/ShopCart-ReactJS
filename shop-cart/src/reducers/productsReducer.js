const initialState = [
  {
    id: 1,
    name: "Iphone10",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShrS1uKAScVtlRn4dG1Ni6geQ83g_y3rcbvQ&usqp=CAU",
    description: "Do Apple sản xuất",
    price: 500,
    inventory: 10,
    raiting: 3,
  },
  {
    id: 2,
    name: "Iphone11",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShrS1uKAScVtlRn4dG1Ni6geQ83g_y3rcbvQ&usqp=CAU",
    description: "Do Apple sản xuất",
    price: 500,
    inventory: 10,
    raiting: 5,
  },
  {
    id: 3,
    name: "Iphone12",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShrS1uKAScVtlRn4dG1Ni6geQ83g_y3rcbvQ&usqp=CAU",
    description: "Do Apple sản xuất",
    price: 500,
    inventory: 10,
    raiting: 3,
  },
];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default productReducer;
