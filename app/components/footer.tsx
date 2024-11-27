export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-lg font-semibold text-foreground/90">
            agent-integration
          </p>
          <p className="text-sm text-muted-foreground">
            Building the future of automation
          </p>
          <p className="text-xs text-muted-foreground">
            © {currentYear} agent-integration. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
