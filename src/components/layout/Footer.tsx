import { siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="container-wide flex flex-col items-center justify-between gap-4 px-5 md:flex-row md:px-8 lg:px-12">
        <p className="text-sm text-muted">
          © {year} {siteConfig.name}. Crafted with precision.
        </p>
        <p className="text-sm text-muted">
          AI Engineer · Product Builder · Future ML Engineer
        </p>
      </div>
    </footer>
  );
}
