"use client"

export default function Home() {

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Business Planning Made Simple with AI</h1>
          <p className="py-6">Harness the power of Artificial Inteligence to analyze markets, predict trends, and make informed decisions.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product</span>
              </label>
              <select defaultValue={1} className="select select-primary w-full max-w-xs">
                <option value={1} disabled >Select a product</option>
                <option>Clothing & Fashion Accessories</option>
                <option>Home Decor & Furniture</option>
                <option>Beauty & Personal Care</option>
              </select>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Find a Product Niche</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
