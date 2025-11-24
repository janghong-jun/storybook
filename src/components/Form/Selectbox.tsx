import React, { useState, useRef, useEffect } from 'react'

export interface SelectOption {
  label: string
  value: string | number
}

export interface SelectBoxProps {
  /**
   * ```jsx
   * options = [
   *   {
   *     label: '첫 번째 항목',
   *     value: 1
   *   },
   *   {
   *     label: '두 번째 항목',
   *     value: '2'
   *   }
   * ]
   * ```
   */
  options: SelectOption[]
  value?: string | number
  /** placeholder 값 */
  placeholder?: string
  /** 변경시 호출할 함수 */
  onChange?: (value: string | number) => void
  /** 비활성화 여부 */
  disabled?: boolean
  /** 커스텀 CSS 클래스 */
  className?: string
  /** custom 셀렉트박스 사용여부 */
  custom?: boolean
}

/** SelectBox UI 컴포넌트 */
export const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  value,
  placeholder,
  onChange,
  disabled = false,
  className = '',
  custom = true,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(value)
  const [highlightIndex, setHighlightIndex] = useState(-1)

  const buttonRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSelected(value)
  }, [value])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleSelect = (val: string | number) => {
    setSelected(val)
    onChange?.(val)
    setIsOpen(false)
    buttonRef.current?.focus()
  }

  const openMenu = () => {
    if (disabled) return
    setIsOpen(true)
    const idx = options.findIndex((o) => o.value === selected)
    setHighlightIndex(idx >= 0 ? idx : 0)
  }

  const closeMenu = () => setIsOpen(false)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (!isOpen) openMenu()
        else if (highlightIndex >= 0)
          handleSelect(options[highlightIndex].value)
        break

      case 'ArrowDown':
        e.preventDefault()
        if (!isOpen) openMenu()
        else setHighlightIndex((prev) => Math.min(prev + 1, options.length - 1))
        break

      case 'ArrowUp':
        e.preventDefault()
        if (isOpen) setHighlightIndex((prev) => Math.max(prev - 1, 0))
        break

      case 'Escape':
        closeMenu()
        break
    }
  }

  const handleOptionKey = (
    e: React.KeyboardEvent<HTMLLIElement>,
    opt: SelectOption
  ) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault()
        handleSelect(opt.value)
        break
      case 'Escape':
        closeMenu()
        break
    }
  }

  // ==============================
  // 기본 native select
  // ==============================
  if (!custom) {
    return (
      <select
        className={`selectbox-native ${className} ${
          !selected ? 'placeholder' : ''
        }`}
        value={selected ?? ''}
        onChange={(e) => handleSelect(e.target.value)}
        disabled={disabled}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    )
  }

  // ==============================
  // 커스텀 select
  // ==============================
  return (
    <div
      ref={containerRef}
      className={`selectbox-wrapper${className ? ` ${className}` : ''}`}
    >
      <button
        type="button"
        ref={buttonRef}
        className={`selectbox-button ${selected ? '' : 'placeholder'} ${
          isOpen ? 'open' : ''
        }`}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onKeyDown={handleKeyDown}
        onClick={() => (isOpen ? closeMenu() : openMenu())}
      >
        {selected
          ? options.find((o) => o.value === selected)?.label
          : placeholder}
      </button>

      {isOpen && (
        <ul ref={listRef} role="listbox" className="selectbox-options">
          {options.map((opt, i) => (
            <li
              key={opt.value}
              tabIndex={0}
              role="option"
              aria-selected={selected === opt.value}
              className={`
                selectbox-option
                ${selected === opt.value ? 'selected' : ''}
                ${highlightIndex === i ? 'highlight' : ''}
              `}
              onKeyDown={(e) => handleOptionKey(e, opt)}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
