export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent-blue to-accent-indigo flex items-center justify-center">
            <span className="font-display font-bold text-xs text-bg">S</span>
          </div>
          <span className="font-display text-sm text-text-muted">
            Shivendra Sharma
          </span>
        </div>
        <p className="text-xs text-text-muted font-mono">
          © {year} · AI Systems Builder · Fintech Engineer
        </p>
        <div className="flex items-center gap-4 text-xs text-text-muted">
          <a
            href="https://github.com/sharmashivendra102-droid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shivendra-sharma-5221273bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sharma.shivendra102@gmail.com"
            className="hover:text-text-primary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
