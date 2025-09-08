import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}