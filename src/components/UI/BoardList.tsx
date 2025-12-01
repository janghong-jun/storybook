import React from 'react'
import { useRouter } from 'next/router'

export interface BoardItem {
  title: string
  description?: string
  linkUrl: string
}

export interface BoardListProps {
  /** 리스트 아이템 배열 */
  items: BoardItem[]
}

export const BoardList = ({ items = [] }: BoardListProps) => {
  const router = useRouter()

  return (
    <ul className="board-list">
      {items.map((item, index) => (
        <li key={index} className="board-list__item">
          <a
            href={item.linkUrl}
            className="board-list__item-link"
            onClick={(e) => {
              e.preventDefault()
              router.push(item.linkUrl)
            }}
            aria-label={`${item.title} 보기`}
          >
            <strong className="board-list__item-title">{item.title}</strong>
            {item.description && (
              <p className="board-list__item-description">{item.description}</p>
            )}
          </a>
        </li>
      ))}
    </ul>
  )
}
