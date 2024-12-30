import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-800">We are a leading ecommerce store providing high-quality products to our customers.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-800 hover:text-gray-900">Home</Link></li>
              <li><Link href="/products" className="text-gray-800 hover:text-gray-900">Products</Link></li>
              <li><Link href="/about" className="text-gray-800 hover:text-gray-900">About</Link></li>
              <li><Link href="/contact" className="text-gray-800 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            
            <li>
                <strong className="text-[#ffffff] transition duration-300 hover:text-[#cccccc]">Github:</strong>
                {' '}
                <a href="https://github.com/Ayeshaaaqil" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline transition duration-300 hover:text-[#ffffff]">
                github.com/Ayeshaaaqil
                </a>
              </li>
              <li>
                <strong className="text-[#ffffff] transition duration-300 hover:text-[#cccccc]">LinkedIn:</strong>
                {' '}
                <a href="https://www.linkedin.com/in/ayesha-aaqil-6072052b4" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline transition duration-300 hover:text-[#ffffff]">
                linkedin.com/in/ayesha-aaqil-6072052b4
                </a>
              </li>
              
              <li>
                <strong className="text-[#ffffff] transition duration-300 hover:text-[#cccccc]">LinkedIn:</strong>
                {' '}
                <a href="https://www.email.com/in/ayeshaaaqil03@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline transition duration-300 hover:text-[#ffffff]">
                email.com/in/ayeshaaaqil03@gmail.com
                </a>
              </li>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-800">&copy; 2024 food recipes blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

