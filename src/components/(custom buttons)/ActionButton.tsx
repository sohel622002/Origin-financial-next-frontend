export default function ActionButton({
  children,
  extraclasses,
  onclick,
}: {
  children: React.ReactNode;
  extraclasses?: string;
  onclick?: () => void;
}) {
  return (
    <button
      className={`px-5 bg-[#ff605a] text-white py-4 pt-[18px] rounded-full hover:bg-[#f2605b] leading-none ${extraclasses}`}
      onClick={onclick}
    >
      {children}
    </button>
  );
}
