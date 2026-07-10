"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { siteConfig } from "../siteconfige";
import Image from 'next/image'


const navItems = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/case-studies", label: "Case Studies" },
];

export default function SiteShell({ children, activeNav }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const setMenuState = (open) => {
    setIsMenuOpen(open);
    if (menuRef.current) {
      menuRef.current.classList.toggle("hidden", !open);
      menuRef.current.classList.toggle("flex", open);
      menuRef.current.setAttribute("data-menu-open", String(open));
    }
    document.body.style.overflow = open ? "hidden" : "";
  };

  const closeMenu = () => setMenuState(false);

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("hidden", !isMenuOpen);
      menuRef.current.classList.toggle("flex", isMenuOpen);
      menuRef.current.setAttribute("data-menu-open", String(isMenuOpen));
    }
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background">
      <div
        ref={menuRef}
        className={`fixed inset-0 z-40 flex-col items-center justify-center space-y-8 bg-background/98 backdrop-blur-md md:hidden ${isMenuOpen ? "flex" : "hidden"}`}
        data-menu-open={isMenuOpen}
        onClick={closeMenu}
      >
        <div className="flex w-full max-w-sm flex-col items-center justify-center space-y-8" onClick={(event) => event.stopPropagation()}>
          <button
            aria-label="Close Menu"
            className="absolute right-6 top-6 p-2 text-primary focus:outline-none"
            onClick={closeMenu}
            type="button"
          >
            <Icon className="h-7 w-7" name="close" />
          </button>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-2xl font-semibold text-on-surface-variant transition-colors duration-200 hover:text-secondary"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 rounded bg-secondary px-8 py-4 font-label-sm text-label-sm font-semibold uppercase text-on-secondary transition-colors duration-200 hover:bg-on-secondary-container"
            onClick={closeMenu}
          >
            Request a Quote
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-background">
        <div className="mx-auto flex h-20 w-full max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
            <Link href="/">
  <Image 
    className="h-40 w-auto cursor-pointer"
    src="/images/SastkLogo.png"
    alt="Sastk Logo"
    width={200}
    height={160}
    priority={true}
  />
</Link>
         
          <nav className="hidden items-center gap-gutter md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 ${
                  activeNav === item.label.toLowerCase().replace(/\s+/g, "")
                    ? "border-b-2 border-secondary pb-1 font-bold text-secondary"
                    : "text-on-surface-variant hover:text-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="hidden rounded bg-secondary px-6 py-3 font-label-sm text-label-sm font-semibold uppercase text-on-secondary transition-colors duration-200 hover:bg-on-secondary-container md:inline-flex"
          >
            Request a Quote
          </Link>
          <button
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMenuOpen}
            className="p-2 text-primary focus:outline-none md:hidden"
            data-menu-open={isMenuOpen}
            onClick={(event) => {
              event.stopPropagation();
              setMenuState(!isMenuOpen);
            }}
            type="button"
          >
            <Icon className="h-7 w-7" name={isMenuOpen ? "close" : "menu"} />
          </button>
        </div>
      </header>

      {children}

      <footer className="mt-auto w-full bg-primary-container py-stack-lg text-on-primary-container">
        <div className="mx-auto grid w-full max-w-container-max grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-4 md:px-margin-desktop">
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block font-headline-md text-headline-md font-bold text-white">
              Sastk
            </Link>
            <p className="max-w-md text-sm text-on-primary-container opacity-80">
              Empowering enterprise digital transformation through expert technical consulting.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-label-sm text-label-sm uppercase tracking-wider text-white">Company</h4>
            <Link href="/insights" className="opacity-80 transition-colors duration-200 hover:text-white">
              Insights
            </Link>
            <Link href="/careers" className="opacity-80 transition-colors duration-200 hover:text-white">
              Careers
            </Link>
            <Link href="/contact" className="opacity-80 transition-colors duration-200 hover:text-white">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-label-sm text-label-sm uppercase tracking-wider text-white">Legal</h4>
            <Link href="/privacy-policy" className="opacity-80 transition-colors duration-200 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="opacity-80 transition-colors duration-200 hover:text-white">
              Terms of Service
            </Link>
            <a href="#" className="opacity-80 transition-colors duration-200 hover:text-white">
              Cookie Policy
            </a>
          </div>
          <div className="flex flex-col gap-3">
  <h4 className="font-label-sm text-label-sm uppercase tracking-wider text-white">Global Headquarters</h4>
  
  {/* Address */}
  <p className="flex items-start gap-2 text-sm opacity-80">
    <span className="material-symbols-outlined text-sm mt-0.5">Location</span>
    <span className="material-symbols-outlined text-sm mt-0.5">
      {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
    </span>
  </p>
  
  {/* Email */}
  <p className="flex items-center gap-2 text-sm opacity-80">
    <span className="material-symbols-outlined text-sm">Email</span>
    <a 
      className="transition-colors duration-200 hover:text-white" 
      href={`mailto:${siteConfig.contact.email}`}
    >
      {siteConfig.contact.email}
    </a>
  </p>

  {/* Phone */}
  <p className="flex items-center gap-2 text-sm opacity-80">
    <span className="material-symbols-outlined text-sm">Phone</span>
    <a 
      className="transition-colors duration-200 hover:text-white" 
      href={`tel:${siteConfig.contact.phone}`}
    >
      {siteConfig.contact.phone}
    </a>
  </p>

  {/* Social Media Icons - Using SVG */}
  <div className="flex gap-4 pt-2">
    {/* LinkedIn */}
    <a 
      href={siteConfig.contact.socialMedia.linkedin}
      className="opacity-60 transition-all duration-200 hover:opacity-100 hover:text-white hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    </a>

    {/* Twitter/X */}
    <a 
      href={siteConfig.contact.socialMedia.twitter}
      className="opacity-60 transition-all duration-200 hover:opacity-100 hover:text-white hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
    >
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </a>

    {/* Facebook */}
    <a 
      href={siteConfig.contact.socialMedia.facebook}
      className="opacity-60 transition-all duration-200 hover:opacity-100 hover:text-white hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    </a>

    {/* YouTube */}
    <a 
      href={siteConfig.contact.socialMedia.youtube}
      className="opacity-60 transition-all duration-200 hover:opacity-100 hover:text-white hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="YouTube"
    >
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    </a>

    {/* Instagram */}
    <a 
      href={siteConfig.contact.socialMedia.instagram}
      className="opacity-60 transition-all duration-200 hover:opacity-100 hover:text-white hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    </a>
  </div>
</div>
          <div className="col-span-1 pt-8 text-sm opacity-60 md:col-span-4 md:pt-0">
            <span>© 2026 Sastk IT Solutions. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
