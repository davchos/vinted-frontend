import "./css/Item.css";

const Item = ({ item }) => {
  const {
    product_brand,
    product_details,
    product_pictures,
    product_name,
    product_description,
    product_price,
    owner,
    product_image,
    // product_date,
  } = item;
  console.log("item: ");
  return (
    <div className="flex-row-spacearound item">
      <div className="item-container">
        <img
          className="item-image"
          src={product_image[0].secure_url}
          alt="item-image"
        />

        <div className="item-box">
          <span className="item-price">{product_price} €</span>
          <div className="item-description-top">
            <div className="item-label">
              <span className="item-info">
                {product_details[0].MARQUE !== "" && "MARQUE"}
              </span>
              <span className="item-info">
                {product_details[1].TAILLE !== "" && "TAILLE"}
              </span>
              <span className="item-info">
                {product_details[2].ÉTAT !== "" && "ETAT"}
              </span>
              <span className="item-info">
                {product_details[3].COULEUR !== "" && "COULEUR"}
              </span>
              {/* <span className="item-info">
                {product_details[4].EMPLACEMENT !== "" && "EMPLACEMENT"}
              </span> */}
            </div>
            <div className="item-value">
              <span className="item-info">
                {product_details[0].MARQUE !== null &&
                  product_details[0].MARQUE}
              </span>

              <span className="item-info">
                {product_details[1].TAILLE !== null &&
                  product_details[1].TAILLE}
              </span>

              <span className="item-info">
                {product_details[2].ÉTAT !== null && product_details[2].ÉTAT}
              </span>

              <span className="item-info">
                {product_details[3].COULEUR !== null &&
                  product_details[3].COULEUR}
              </span>

              {/* <span className="item-info">
                {product_details[4].EMPLACEMENT &&
                  product_details[4].EMPLACEMENT}
              </span> */}
            </div>
          </div>
          <div className="item-description-middle">
            <span className="item-info">{product_name && product_name} </span>
            {product_details[2].ÉTAT && product_details[2].ÉTAT}
            <span className="item-info">{owner.account.username} </span>
          </div>
          <button className="item-acheter">Acheter</button>
        </div>
      </div>
    </div>
  );
};
export default Item;
