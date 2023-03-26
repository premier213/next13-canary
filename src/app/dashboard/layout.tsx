export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav className="bg-orange-400">dashboard layout</nav>

      {children}
    </section>
  );
}
