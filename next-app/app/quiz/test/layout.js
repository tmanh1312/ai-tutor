export default function Layout({ children }) {
    return (
        <div className="divide-y">
            <div className="justify-center items-center">
            </div>
            <div className="container mx-auto p-5">{children}</div>
        </div>
    );
}