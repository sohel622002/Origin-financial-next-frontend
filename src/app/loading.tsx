export default function LoadingSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-[rgb(23,15,74)]">This is taking longer than usually</h3>
        <p className="text-xl font-semibold text-green-500">Please Wait ...</p>
      </div>
    </section>
  );
}
