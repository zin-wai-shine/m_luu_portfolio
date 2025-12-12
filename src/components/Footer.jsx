const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} M Luu (TZ). All rights reserved.</p>
          <p className="mt-2 text-deep-yellow">Creative Director / Director of Photography</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
