"use client"
import { SignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const DemoProducts = [
    {
      id: 1,
      title: "Men's Classic Denim Jacket",
      imageUrl: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbidzJTIwZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D",
      price: 59.99,
      rating: 4.5
    },
    {
      id: 2,
      title: "Elegant Summer Dress",
      imageUrl: "https://plus.unsplash.com/premium_photo-1723914108893-ac3047a4f1df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEVsZWdhbnQlMjBzdW1tZXIlMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 39.99,
      rating: 4.0
    },
    {
      id: 3,
      title: "Sports Running Shoes",
      imageUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNwb3J0eSUyMHJ1bm5pbmclMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 89.99,
      rating: 4.8
    },
    {
      id: 4,
      title: "Smart Watch - Black",
      imageUrl: "https://plus.unsplash.com/premium_photo-1728249572934-f56a637a92a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwc21hZXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
      price: 129.99,
      rating: 4.2
    },
    {
      id: 5,
      title: "Wireless Noise-Cancelling Headphones",
      imageUrl: "https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdpcmVsZXNzJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
      price: 199.99,
      rating: 4.7
    }
  ];

  return (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <img className="w-full rounded-lg shadow-lg" src="https://plus.unsplash.com/premium_photo-1679056835084-7f21e64a3402?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D" alt="Fashion Model" />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">New Arrivals</h3>
              <p className="text-gray-600 mb-4">Explore our latest collection of chic and trendy fashion wear designed for the modern individual.</p>
              <a href="#" className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-4 sm:py-12 md:py-20">
        <div className="flex flex-col items-center text-center">
          <i className="ri-truck-fill text-4xl mb-2"></i>
          <h4 className="text-lg font-semibold mb-2">Free Shipping & Return</h4>
          <p className="text-sm">Enjoy hassle-free shipping and easy returns on all orders.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <i className="ri-money-dollar-box-fill text-4xl mb-2"></i>
          <h4 className="text-lg font-semibold mb-2">Money-Back Guarantee</h4>
          <p className="text-sm">Not satisfied? We offer a full refund, no questions asked.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <i className="ri-24-hours-fill text-4xl mb-2"></i>
          <h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
          <p className="text-sm">Our customer service is available around the clock to assist you.</p>
        </div>
      </div>
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 mb-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Collections</h2>
          <div className="grid grid-cols-1 animate__animated animate__fadeInUp sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1624281043172-16ff234c2a14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Summer Collection" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Summer Vibes</h3>
                <p className="text-gray-600">Feel the warmth with our vibrant summer collection.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1578252130460-622f3f8a9a61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdpbnRlciUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D" alt="Winter Collection" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Winter Wonders</h3>
                <p className="text-gray-600">Embrace the chill with our cozy winter outfits.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img className="w-full h-64 object-cover" src="https://plus.unsplash.com/premium_photo-1699389167296-d6e9fc419789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFydHklMjBmYXNoaW9ufGVufDB8fDB8fHww" alt="Party Collection" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Party Glam</h3>
                <p className="text-gray-600">Shine at every event with our glamorous party wear.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 mb-4">
          <div className="flex justify-between items-center py-4 mb-2">
            <p className="font-semibold uppercase text-gray-800 text-3xl">Best Sellers</p>
            <button className="border border-3 font-semibold text-gray-700  border-gray-700 hover:text-white hover:bg-gray-700 rounded-sm p-4">View All</button>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md-grid-cols-3">
            {DemoProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg" onClick={() => router.push(`/product/${product.id}`)}>
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                  <p className="text-gray-700 font-bold mb-2">${product.price.toFixed(2)}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">
                      {Array.from({ length: Math.floor(product.rating) }, (_, i) =>
                        <span key={i}>★</span>
                      )}
                      {product.rating % 1 !== 0 ? <span>☆</span> : null}
                    </span>
                    <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
