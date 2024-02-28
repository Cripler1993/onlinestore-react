const categoryArr = [
  { label: "вся продукция", value: "" },
  { label: "пирожные", value: "cakes" },
  { label: "хлеб", value: "bread" },
  { label: "завтраки", value: "breakfast" },
  { label: "супы", value: "soup" },
  { label: "обеды", value: "dinner" },
  { label: "напитки", value: "beverage" },
];

const filterArr = [
  { label: "по умолчанию", value: { sortBy: "", order: "" } },
  { label: "сначала популярные", value: { sortBy: "rate", order: "desc" } },
  { label: "по размеру скидки", value: { sortBy: "sale", order: "desc" } },
  {
    label: "по цене: от меньшей к большей",
    value: { sortBy: "price", order: "asc" },
  },
  {
    label: "по цене: от большей к меньшей",
    value: { sortBy: "price", order: "desc" },
  },
  { label: "по алфавиту: а-я", value: { sortBy: "name", order: "asc" } },
  { label: "по алфавиту: я-а", value: { sortBy: "name", order: "desc" } },
];

const tagsArr = ["new", "popular", "razz", "vegan", "classic"];

const tagTranslate = {
  new: "новинка",
  popular: "популярный",
  razz: "малиновый",
  vegan: "vegan",
  classic: "классический",
};

export { categoryArr, filterArr, tagsArr, tagTranslate };
