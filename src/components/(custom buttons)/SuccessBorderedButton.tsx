export default function SuccessBorderedButton({
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
      className={`px-7 py-3 pt-[13px] bg-green-500 hover:bg-green-600 text-white rounded-full border border-black ${extraclasses}`}
      onClick={onclick}
    >
      {children}
    </button>
  );
}
