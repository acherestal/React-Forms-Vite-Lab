import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onAddItem }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onAddItem} />

      <Filter
        search={search}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
