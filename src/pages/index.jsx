import { useViewport } from '@/contexts/viewPortContext'

export const metadata = {
  title: '내 사이트 이름',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function Main() {
  const { viewport } = useViewport()

  const viewportLabel =
    viewport === 'mobile'
      ? '모바일'
      : viewport === 'tablet'
      ? '태블릿'
      : '데스크탑'

  return (
    <div className="main">
      {/* Hero section */}
      <section className="main-hero" aria-labelledby="main-hero-title">
        <div className="main-hero-content">
          <p className="main-hero-tag">반응형 샘플 메인 화면</p>
          <h1 id="main-hero-title">내 사이트 이름</h1>
          <p className="main-hero-desc">
            화면 크기에 따라 레이아웃이 자연스럽게 변하는 샘플 메인 화면입니다.
            데스크탑, 태블릿, 모바일에서 구조와 여백을 확인해 보세요.
          </p>
          <div className="main-hero-actions">
            <button type="button" className="btn primary large">
              시작하기
            </button>
            <button type="button" className="btn secondary large">
              자세히 보기
            </button>
          </div>
          <p className="main-hero-viewport">
            {viewport && (
              <span>
                현재 <strong>{viewportLabel}</strong> 뷰포트입니다.
              </span>
            )}
          </p>
        </div>

        <div className="main-hero-panel" aria-hidden="true">
          <div className="main-hero-panel-card">
            <span className="main-hero-chip">실시간 미리보기</span>
            <p className="main-hero-panel-text">
              브레이크포인트는 768px, 1024px 기준입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="main-features" aria-label="주요 특징">
        <h2 className="main-section-title">주요 특징</h2>
        <div className="main-features-grid">
          <article className="main-feature-card">
            <h3>단일 소스 구조</h3>
            <p>
              한 가지 마크업으로 모바일·태블릿·데스크탑 레이아웃을 모두
              커버합니다.
            </p>
          </article>
          <article className="main-feature-card">
            <h3>섹션 기반 레이아웃</h3>
            <p>
              히어로, 특징, CTA 섹션으로 나뉘어 있어 실제 서비스 메인 구조로
              확장하기 쉽습니다.
            </p>
          </article>
          <article className="main-feature-card">
            <h3>디자인 토큰 활용</h3>
            <p>
              색상과 간격은 기존 전역 토큰(변수)을 사용해 사이트 전체 톤앤매너를
              유지합니다.
            </p>
          </article>
        </div>
      </section>

      {/* Call to Action section */}
      <section className="main-cta" aria-labelledby="main-cta-title">
        <div className="main-cta-inner">
          <div>
            <h2 id="main-cta-title">프로젝트에 바로 적용해 보세요</h2>
            <p className="main-cta-desc">
              이 메인 화면 구조와 스타일을 복사해서 실제 서비스 초기 화면에 맞게
              텍스트와 이미지만 교체해도 됩니다.
            </p>
          </div>
          <button type="button" className="btn primary large">
            컴포넌트 살펴보기
          </button>
        </div>
      </section>
    </div>
  )
}
