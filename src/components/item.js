import "./css/Item.css";

const Item = (item) => {
  const {
    product_details,
    product_pictures,
    product_name,
    product_description,
    product_price,
    owner,
    product_image,
    product_date,
  } = item;
  return (
    <div className="flex-row-spacearound item">
      <div className="item-container">
        <div className="item-box item-box-photos">picture</div>
        <div className="item-box item-box-description"> description</div>
      </div>
    </div>
  );
};
export default Item;
