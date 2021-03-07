const InventoryDTO = require('../DTO/InventoryDTO');

module.exports = TranslateToInventoryDTO = function TranslateToInventoryDTO(
VariantDAO
) {
  const returnInventoryDTO = new InventoryDTO();
  returnInventoryDTO.productId = VariantDAO.product_id;
  returnInventoryDTO.variantId = VariantDAO.id;
  returnInventoryDTO.stock = 0;

  return returnInventoryDTO;
};
