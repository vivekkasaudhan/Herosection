export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <h1 className="text-xl font-semibold tracking-wider">
          ITZFIZZ
        </h1>

        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-green-400 transition">Home</a>
          <a href="#" className="hover:text-green-400 transition">About</a>
          <a href="#" className="hover:text-green-400 transition">Services</a>
          <a href="#" className="hover:text-green-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}