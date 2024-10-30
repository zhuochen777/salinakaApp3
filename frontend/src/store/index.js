import { configureStore, createSlice } from "@reduxjs/toolkit";

const ShopSlice = createSlice({
  name: "shop",
  initialState: {
    productList: [
      {
        id: 1,
        name: "name1",
        summary: "Sexbomb1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 240.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
        srcImgs: [
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
        ],
        quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 2,
        name: "name2",
        summary: "Kibal Black2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 674.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
          srcImgs: [
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
          ],
          quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 3,
        name: "name3",
        summary: "Salt maalat3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 79.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a",
          srcImgs: [
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
          ],
          quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 4,
        name: "name4",
        summary: "Salt maalat4",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 79.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYVPdTsyxJybMCsdKpXhq?alt=media&token=23d7673c-a0bf-4dcb-89f1-8482446b56be",
          srcImgs: [
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
          ],
          quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 5,
        name: "name5",
        summary: "Salt maalat5",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 79.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
          srcImgs: [
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
          ],
          quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 6,
        name: "name6",
        summary: "Salt maalat6",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 79.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
          srcImgs: [
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
          ],
          quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
    ],
    productDetail: {},
    cartList: [],
    shopList: [
      {
        id: 1,
        name: "name1",
        summary: "Sexbomb1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 240.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
        srcImgs: [
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
        ],
        quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 2,
        name: "name2",
        summary: "Kibal Black2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 674.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
          srcImgs: [
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
          ],
          quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 3,
        name: "name3",
        summary: "Salt maalat3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 79.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a",
          srcImgs: [
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
          ],
          quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 4,
        name: "name4",
        summary: "Salt maalat4",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 79.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYVPdTsyxJybMCsdKpXhq?alt=media&token=23d7673c-a0bf-4dcb-89f1-8482446b56be",
          srcImgs: [
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
          ],
          quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 5,
        name: "name5",
        summary: "Salt maalat5",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 79.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
          srcImgs: [
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
          ],
          quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 6,
        name: "name6",
        summary: "Salt maalat6",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 79.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
          srcImgs: [
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
          ],
          quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 7,
        name: "name7",
        summary: "Sexbomb7",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 240.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
        srcImgs: [
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
        ],
        quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 8,
        name: "name8",
        summary: "Kibal Black8",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 674.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
          srcImgs: [
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
          ],
          quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 9,
        name: "name9",
        summary: "Salt maalat9",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 79.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a",
          srcImgs: [
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
          ],
          quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 10,
        name: "name10",
        summary: "Salt maalat10",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 79.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYVPdTsyxJybMCsdKpXhq?alt=media&token=23d7673c-a0bf-4dcb-89f1-8482446b56be",
          srcImgs: [
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
          ],
          quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 11,
        name: "name11",
        summary: "Salt maalat11",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 79.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
          srcImgs: [
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
          ],
          quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 12,
        name: "name12",
        summary: "Salt maalat12",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 79.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
          srcImgs: [
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
            "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
          ],
          quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
    ],
  },
  reducers: {
    setProductList(state, action) {
      const updatedProductList = state.productList.map((item) => {
        if (item.id === action.payload.id) {
          item.isInCart = true;
        }
        return item;
      });
      state.productList = updatedProductList;
    },
    setproductDetail(state, action) {
      state.productDetail = action.payload;
    },
    setCartList(state, action) {
      state.cartList = [...state.cartList, action.payload];
    },

    setRemoveCartItem(state, action) {
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );
      const updatedProductList = state.productList.map((item) => {
        if (item.id == action.payload.id) {
          item.isInCart = false;
        }
        return item;
      });
      state.productList = updatedProductList;

      const updatedShopList = state.shopList.map((item) => {
        if (item.id === action.payload.id) {
          item.isInCart = false;
        }
        return item;
      });
      state.shopList = updatedShopList;

      state.productDetail.isInCart = false;
    },

    AddQuantityToCart(state, action) {
      const itemAdd = state.cartList.find(
        (item) => item.id === action.payload.id
      );
      itemAdd.quantity += 1;
    },
    SubQuantityToCart(state, action) {
      const itemSub = state.cartList.find(
        (item) => item.id === action.payload.id
      );
      itemSub.quantity -= 1;
    },

    setClearCart(state, action) {
      state.cartList.length = 0;
    },

    setShopList(state, action) {
      const updatedShopList = state.shopList.map((item) => {
        if (item.id === action.payload.id) {
          item.isInCart = true;
        }
        return item;
      });
      state.shopList = updatedShopList;
    },
  },
});

export const {
  setClearCart,
  setProductList,
  setproductDetail,
  setCartList,
  setShopList,
  setRemoveCartItem,
  AddQuantityToCart,
  SubQuantityToCart,
} = ShopSlice.actions;

const store = configureStore({
  reducer: {
    shop: ShopSlice.reducer,
  },
});

export default store;
