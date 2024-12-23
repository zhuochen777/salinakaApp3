import { configureStore, createSlice } from "@reduxjs/toolkit";

const ShopSlice = createSlice({
  name: "shop",
  initialState: {
    productList: [
      {
        id: 1,
        name: "Burnikk",
        summary: "Sexbomb",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 240.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
        srcImgs: [
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FT913J5mmk503vnIrmlUb?alt=media&token=99a49867-2afb-4fcc-abf4-8da7afde0f3b",
        ],
        quantity: 1,
        // size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 2,
        name: "Kibal Batal",
        summary: "Kibal Black",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 674.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
        srcImgs: [
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
        ],
        quantity: 1,
        // size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 3,
        name: "Very Nice",
        summary: "Salt Maalat",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 79.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a",
        srcImgs: [
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a",
        ],
        quantity: 1,
        // size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 4,
        name: "Buldit",
        summary: "Salt Maalat",
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
        // size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 5,
        name: "Balakubak",
        summary: "Betsin Maalat",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 79.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
        srcImgs: [
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
        ],
        quantity: 1,
        // size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 6,
        name: "Tiktilaok Manok",
        summary: "Sexbomb",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 79.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
        srcImgs: [
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7",
        ],
        quantity: 1,
        // size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
    ],
    productDetail: {},
    cartList: [],
    shopList: [
      {
        id: 1,
        name: "Sugat",
        summary: "Betsin Maalat",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 56.0,
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
        name: "Kulangot",
        summary: "Salt",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 67.0,
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
        name: "Tiktilaok Manok",
        summary: "Sexbomb",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 78.0,
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
        name: "Very Nice",
        summary: "Salt maalat",
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
        name: "Quake Overload",
        summary: "Yezyow",
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
        name: "Kutu",
        summary: "Sexbomb",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 129.0,
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
        name: "Tuluk",
        summary: "Black Kibal",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 142.0,
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
        name: "Takla Green",
        summary: "Sexbomb",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 150.0,
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
        name: "Balakubak",
        summary: "Betsin Maalat",
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
        name: "Pitaklan",
        summary: "Black Kibal",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 174.0,
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
        name: "Burnikk",
        summary: "Sexbomb",
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
        id: 12,
        name: "Sipon Malapot",
        summary: "Salt",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 250.0,
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
        id: 13,
        name: "Buldit",
        summary: "Salt Maalat",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 250.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYVPdTsyxJybMCsdKpXhq?alt=media&token=23d7673c-a0bf-4dcb-89f1-8482446b56be",
        srcImgs: [
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYVPdTsyxJybMCsdKpXhq?alt=media&token=23d7673c-a0bf-4dcb-89f1-8482446b56be",
        ],
        quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 14,
        name: "Merry Christmas",
        summary: "Salt Maalat",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 250.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FzxNR1gLeEDPA5KXUtGmo?alt=media&token=dd5c69fd-6c69-47c2-8a50-2447ed0c9ca2",
        srcImgs: [
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FzxNR1gLeEDPA5KXUtGmo?alt=media&token=dd5c69fd-6c69-47c2-8a50-2447ed0c9ca2",
        ],
        quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 15,
        name: "Tilis Malaput",
        summary: "Salt Maalat",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 340.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FvEjSLuZ2zyCwln0LHv4K?alt=media&token=6b79fe0a-e7fa-4f23-a521-e6bad01032d0",
        srcImgs: [
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FvEjSLuZ2zyCwln0LHv4K?alt=media&token=6b79fe0a-e7fa-4f23-a521-e6bad01032d0",
        ],
        quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 16,
        name: "Merry Christmas",
        summary: "Salt Maalat",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 340.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2Fs3uuRu71Mon65lHohQZ1?alt=media&token=6298fb20-91d4-461a-af78-90a404f89cd7",
        srcImgs: [
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2Fs3uuRu71Mon65lHohQZ1?alt=media&token=6298fb20-91d4-461a-af78-90a404f89cd7",
        ],
        quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 17,
        name: "Tilapia",
        summary: "Salt Maalat",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 340.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FkEq31Ad5RBwmqOebNBqA?alt=media&token=75307fe0-2f8b-4a78-a82a-a4996b5ca94e",
        srcImgs: [
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FkEq31Ad5RBwmqOebNBqA?alt=media&token=75307fe0-2f8b-4a78-a82a-a4996b5ca94e",
        ],
        quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
      {
        id: 18,
        name: "Kibal Batal",
        summary: "Kibal Black",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.",
        price: 674.0,
        isInCart: false,
        srcImg:
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
        srcImgs: [
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
        ],
        quantity: 1,
        size: 28,
        color: ["red", "orange", "brown", "green", "blue"],
      },
    ],
    // filteredProducts: JSON.parse(sessionStorage.getItem("filteredProducts")) || [],
    // filteredProducts: [],
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
        if (item.id === action.payload.id) {
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
      state.productDetail.isInCart = false;

      const updatedProductList = state.productList.map((item) => {
        item.isInCart = false;

        return item;
      });
      state.productList = updatedProductList;

      const updatedShopList = state.shopList.map((item) => {
        item.isInCart = false;

        return item;
      });
      state.shopList = updatedShopList;
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

    // setFilteredProducts(state, action) {
    //   const filteredList = state.shopList.filter((item) =>
    //     item.name.toLowerCase().includes(action.payload)
    //   );

    //   state.filteredProducts = filteredList;
    // },
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
  setFilteredProducts,
} = ShopSlice.actions;

const store = configureStore({
  reducer: {
    shop: ShopSlice.reducer,
  },
});

export default store;
