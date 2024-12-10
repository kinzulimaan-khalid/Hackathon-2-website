import React from 'react'

const Footer = () => {
  return (

          <footer className="bg-gray-100 py-8 justify-around">
            <div className="container mx-auto text-center flex ">
              {/* Address Section */}
              <div className="mb-8 text-gray-500">
                <address className="not-italic">
                  400 University Drive Suite 200<br />
                  Coral Gables,<br />
                  FL 33134 USA
                </address>
              </div>
      
              {/* Links Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Links */}
                <div>
                  <h4 className="font-bold mb-4">Links</h4>
                  <ul className="space-y-2">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/shop" className="hover:underline">Shop</a></li>
                    <li><a href="/about" className="hover:underline">About</a></li>
                    <li><a href="/contact" className="hover:underline">Contact</a></li>
                  </ul>
                </div>
      
                {/* Help */}
                <div>
                  <h4 className="font-bold mb-4">Help</h4>
                  <ul className="space-y-2">
                    <li><a href="/payment-options" className="hover:underline">Payment Options</a></li>
                    <li><a href="/returns" className="hover:underline">Returns</a></li>
                    <li><a href="/privacy-policies" className="hover:underline">Privacy Policies</a></li>
                  </ul>
                </div>
      
                {/* Newsletter */}
                <div>
                  <h4 className="font-bold mb-4">Newsletter</h4>
                  <form className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <input
                      type="email"
                      placeholder="Enter Your Email Address"
                      className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
                    />
                    <button
                      type="submit"
                      className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
      
            </div>
            {/* Copyright Section */}
            <div className="border-t border-gray-300 pt-4 text-gray-500 ">
                2022 Meubel House. All rights reserved
              </div>
          </footer>
        );
      }
      
      export default Footer