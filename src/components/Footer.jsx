const Footer = () => {
  return (
    <footer className="py-8 mt-0 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-200 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} M Luu (TZ). All rights reserved.</p>
          <p className="mt-2 text-deep-yellow">Creative Director / Director of Photography</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
