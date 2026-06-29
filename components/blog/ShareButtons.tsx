"use client";

import { useState, useEffect } from "react";
import { Link2, Check } from "lucide-react";

interface ShareButtonsProps {
  title: string;
}

export function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const handleCopy = () => {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex flex-row xl:flex-col items-center gap-3 py-6 justify-center">
      {/* Label */}
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-light/40 xl:mb-2 xl:rotate-180 xl:[writing-mode:vertical-lr]">
        Share Article
      </span>
      
      {/* Twitter / X */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="size-10 rounded-full border border-gold/20 flex items-center justify-center text-gold-light/60 hover:text-gold hover:border-gold hover:bg-gold/5 transition-all duration-200"
        title="Share on X"
        aria-label="Share on X"
      >
        <svg className="size-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="size-10 rounded-full border border-gold/20 flex items-center justify-center text-gold-light/60 hover:text-gold hover:border-gold hover:bg-gold/5 transition-all duration-200"
        title="Share on LinkedIn"
        aria-label="Share on LinkedIn"
      >
        <svg className="size-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20-%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="size-10 rounded-full border border-gold/20 flex items-center justify-center text-gold-light/60 hover:text-gold hover:border-gold hover:bg-gold/5 transition-all duration-200"
        title="Share on WhatsApp"
        aria-label="Share on WhatsApp"
      >
        <svg className="size-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.015 14.056.993 11.433.993 6.002.993 1.577 5.363 1.573 10.793c-.001 1.716.46 3.393 1.336 4.908l-.995 3.636 3.733-.973zm13.11-6.195c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>
      </a>

      {/* Copy Link */}
      <button
        onClick={handleCopy}
        className="size-10 rounded-full border border-gold/20 flex items-center justify-center text-gold-light/60 hover:text-gold hover:border-gold hover:bg-gold/5 transition-all duration-200 relative group cursor-pointer"
        title="Copy link"
        aria-label="Copy link"
      >
        {copied ? (
          <Check className="size-4 text-gold animate-in" />
        ) : (
          <Link2 className="size-4" />
        )}
        
        {/* Toast bubble */}
        {copied && (
          <span className="absolute left-12 xl:left-auto xl:bottom-12 bg-gold text-on-accent text-[11px] font-semibold px-2 py-1 rounded shadow-md pointer-events-none whitespace-nowrap animate-in">
            Link Copied!
          </span>
        )}
      </button>
    </div>
  );
}
