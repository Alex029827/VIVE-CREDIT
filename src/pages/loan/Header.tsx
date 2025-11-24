export default function Header() {
  return (
    <header className="bg-gradient-to-br from-yellow-300 to-purple-200 text-white text-center p-10">
      <div className="text-center flex justify-center mb-2">
        <img
          src="/bank.svg"
          alt="Viva Credit Logo"
          className="w-28 h-30 rounded-xl"
        />
      </div>
      <h1 className="text-3xl font-bold text-blue-900">Viva-Credit</h1>
      <p className="text-lg opacity-90 text-gray-800 font-bold">
        Contract de Credit Personal
      </p>
    </header>
  );
}
