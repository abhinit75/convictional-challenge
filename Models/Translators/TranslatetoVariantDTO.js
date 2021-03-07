const VariantDTO = require('../DTO/VariantDTO');

module.exports = TranslateToVariantDTO = function TranslateToVariantDTO(
VariantDAO
) {
  const returnVariantDTO = new VariantDTO();
  returnVariantDTO.id = VariantDAO.id;
  returnVariantDTO.title = VariantDAO.title;
  returnVariantDTO.sku = VariantDAO.sku;
  if (VariantDAO.inventory_quantity > 0) {
      returnVariantDTO.available = true;
  } else {
      returnVariantDTO.available = false;
  }
  returnVariantDTO.inventory_quantity = VariantDAO.inventory;
  returnVariantDTO.weight.value = VariantDAO.weight;
  returnVariantDTO.weight.unit = VariantDAO.weight_unit;

  return returnVariantDTO;
};
