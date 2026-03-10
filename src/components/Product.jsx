const Product = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-5 flex flex-col justify-between h-56">
        <div>
          <h2 className="text-lg font-bold text-gray-800">
            {product.name}
          </h2>

          <p className="text-sm text-gray-500 mb-2">
            {product.brand}
          </p>

          <p className="text-sm text-gray-600 line-clamp-3">
            {product.description}
          </p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">
            ${product.price}
          </span>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product