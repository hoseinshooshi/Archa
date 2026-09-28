import React from 'react';
import {
  Phone,
  Mail,
  MessageSquare,
  FolderGit2,
  ArrowUp,
  FileText,
} from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-background border-t border-border pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground">
          <div>
            طراحی و پیاده‌سازی شده توسط <strong className="text-primary hover:text-foreground"><a href="https://hoseinshooshiportfolio.vercel.app" target='_blank'>حسین شوشی</a></strong>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-background hover:bg-background/40 text-foreground transition-colors font-semibold"
          >
            <span>بازگشت به بالای صفحه</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};