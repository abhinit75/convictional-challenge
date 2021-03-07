const ProductDTO = require('../DTO/ProductDTO');

module.exports = TranslateToProductDTO = function TranslateToProductDTO(
ProductDAO
) {
  const returnDTO = new ProductDTO();
  returnDTO.code = ProductDAO.id;
  returnDTO.title = ProductDAO.title;
  returnDTO.vendor = ProductDAO.vendor;
  returnDTO.bodyHtml = ProductDAO.body_html;

  // image
  image = {
    source: '',
    variantId: '',
  }

  // Add Variants & Add images
  for (var i = 0; i < ProductDAO.variants.length; i++) {
    returnDTO.variants.push(TranslateToVariantDTO(ProductDAO.variants[i]));
    for (var j = 0; j < ProductDAO.variants[i].images.length; j++) {
      image.source = ProductDAO.variants[i].images[j].src;
      image.variantId = ProductDAO.variants[i].id;
      returnDTO.images.push(image);
    }
  }

  return returnDTO;
};
