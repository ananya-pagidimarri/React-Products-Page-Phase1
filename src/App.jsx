
import Products from "./components/Products"


function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">
        🛍️ Tech Products
      </h1>

      <Products />
    </div>
  )
}

export default App