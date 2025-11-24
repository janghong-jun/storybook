import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo" aria-hidden>
            🌐
          </span>
          <span className="footer-title">ModernSite</span>
        </div>
        <nav className="footer-links" aria-label="하단 링크">
          <Link href="#privacy">개인정보처리방침</Link>
          <Link href="#terms">이용약관</Link>
          <Link href="#contact">문의</Link>
        </nav>
        <div className="footer-social">
          <Link href="#" aria-label="Twitter" className="footer-social-icon">
            🐦
          </Link>
          <Link href="#3" aria-label="Facebook" className="footer-social-icon">
            📘
          </Link>
          <Link href="#" aria-label="Github" className="footer-social-icon">
            💻
          </Link>
        </div>
        <div className="footer-copy">
          © 2025 ModernSite. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
