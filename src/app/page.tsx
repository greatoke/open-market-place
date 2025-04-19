import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Shield, Users } from "lucide-react";
import prisma from "@/lib/prisma";

export default async function Home() {
  const products = await prisma.product.findMany();
  console.log(products);
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xl font-bold">OpenMarket</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/products" className="text-sm font-medium hover:underline">
              Products
            </Link>
            <Link href="/categories" className="text-sm font-medium hover:underline">
              Categories
            </Link>
            <Link href="/sellers" className="text-sm font-medium hover:underline">
              Sellers
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/sign-in">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container flex flex-col items-center text-center">
            <div className="animate-float">
              <ShoppingBag className="h-16 w-16 mb-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              The Ultimate Online Marketplace
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-[600px]">
              Discover amazing products from sellers around the world. Buy, sell, and explore with our
              secure and user-friendly platform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="gap-2">
                  Browse Products <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/sellers/register">
                <Button size="lg" variant="outline" className="gap-2">
                  Become a Seller <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose OpenMarket?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-sm animate-slide-up">
                <ShoppingBag className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
                <p className="text-muted-foreground">
                  Browse thousands of products across diverse categories from sellers worldwide.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <Shield className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Secure Shopping</h3>
                <p className="text-muted-foreground">
                  Shop with confidence knowing your transactions and data are protected.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <Users className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Vibrant Community</h3>
                <p className="text-muted-foreground">
                  Join our community of buyers and sellers committed to quality and satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-12">Ready to Get Started?</h2>
            <Link href="/sign-up">
              <Button size="lg" className="gap-2">
                Create Account <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <footer className="border-t py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">OpenMarket</h3>
              <p className="text-sm text-muted-foreground">
                The ultimate online marketplace for buyers and sellers worldwide.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/products" className="text-muted-foreground hover:text-foreground">Products</Link></li>
                <li><Link href="/categories" className="text-muted-foreground hover:text-foreground">Categories</Link></li>
                <li><Link href="/sellers" className="text-muted-foreground hover:text-foreground">Sellers</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Account</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/sign-in" className="text-muted-foreground hover:text-foreground">Sign In</Link></li>
                <li><Link href="/sign-up" className="text-muted-foreground hover:text-foreground">Sign Up</Link></li>
                <li><Link href="/sellers/register" className="text-muted-foreground hover:text-foreground">Become a Seller</Link></li>
                <li><Link href="/dashboard" className="text-muted-foreground hover:text-foreground">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="/cookies" className="text-muted-foreground hover:text-foreground">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} OpenMarket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}