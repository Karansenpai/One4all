import Link from "next/link"

export function Navbar() {
  return (
    <nav className="bg-[#1a1a2e] text-white flex justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center" />
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                className="border-transparent text-white hover:bg-[#16213e] hover:border-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="#"
              >
                Home
              </Link>
              <Link
                className="border-transparent text-white hover:bg-[#16213e] hover:border-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="#"
              >
                About
              </Link>
              <Link
                className="border-transparent text-white hover:bg-[#16213e] hover:border-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="#"
              >
                Academics
              </Link>
              <Link
                className="border-transparent text-white hover:bg-[#16213e] hover:border-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="#"
              >
                News
              </Link>
              <Link
                className="border-transparent text-white hover:bg-[#16213e] hover:border-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="#"
              >
                Events
              </Link>
              <Link
                className="border-transparent text-white hover:bg-[#16213e] hover:border-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="#"
              >
                Students
              </Link>
              <Link
                className="border-transparent text-white hover:bg-[#16213e] hover:border-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="#"
              >
                Parents
              </Link>
              <Link
                className="border-transparent text-white hover:bg-[#16213e] hover:border-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="#"
              >
                Admissions
              </Link>
              <Link
                className="border-transparent text-white hover:bg-[#16213e] hover:border-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                href="#"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
