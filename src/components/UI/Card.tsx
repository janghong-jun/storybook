import Link from 'next/link'
import Image from 'next/image'

export interface CardProps {
  /** 카드 제목 */
  title: string
  /** 카드 설명 */
  description: string
  /** 이미지 URL */
  imageUrl?: string
  /** 이미지 alt 텍스트 */
  altText?: string
  /** 클릭 시 이동 URL */
  linkUrl: string
}

/** Card UI 컴포넌트 */
export const Card = ({
  title,
  description,
  imageUrl,
  altText,
  linkUrl,
}: CardProps) => {
  return (
    <Link href={linkUrl} className="card" aria-label={title}>
      {imageUrl && (
        <div className="card__image-wrapper">
          <Image
            src={imageUrl}
            alt={altText || title}
            fill
            className="card__image"
            loading="eager"
            unoptimized
          />
        </div>
      )}
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
    </Link>
  )
}
