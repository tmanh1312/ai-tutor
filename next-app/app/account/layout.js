export default function Layout({ children }) {
  return (
    <div className="divide-y">
      <div className="justify-center items-center">
        <h1 className="text-center py-4 header-text">Account</h1>
      </div>
      <div className="container mx-auto p-5">{children}</div>
    </div>
  );
}