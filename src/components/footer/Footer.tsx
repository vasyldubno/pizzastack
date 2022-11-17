export const Footer = () => {
  return (
    <div className="h-full bg-gray-900">
      <div className="pt-12 pl-12">
        <h3 className="text-zinc-500 font-bold text-xs pb-4">КОНТАКТИ</h3>
        <a
          href="tel:0441234567"
          className="text-gray-400 font-bold text-xs pb-2"
        >
          044 123 45 67
        </a>
        <address className="text-gray-400 font-bold text-xs not-italic">
          <a href="mailto:info@pizzastack.app">info@pizzastack.app</a>
        </address>
      </div>
      <div className="border-b border-zinc-500 my-9"></div>
      <div className="pl-12 pb-8">
        <a href="/" className="text-xl font-semibold text-white">
          PizzaStack
        </a>
      </div>
    </div>
  );
};
