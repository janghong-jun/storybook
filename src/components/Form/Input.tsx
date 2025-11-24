import React, { InputHTMLAttributes, useId } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** input 타입 (text, password, email, number) */
  type?: 'text' | 'password' | 'email' | 'number'
  /** 클리어 버튼 표시 여부 */
  clearable?: boolean
  /** 커스텀 CSS 클래스 */
  className?: string
  /** 레이블 텍스트 (시각적/스크린리더용) */
  label?: string
  /** 레이블 시각적 노출 여부 (true이면 스크린리더용만) */
  labelHidden?: boolean
  /** 에러 메시지 */
  error?: string
  readOnly?: boolean
  disabled?: boolean
  value: string
  placeholder?: string
}

/** Input UI 컴포넌트 */
export const Input: React.FC<InputProps> = ({
  type = 'text',
  clearable = true,
  className,
  label,
  labelHidden = false,
  error,
  value,
  onChange,
  disabled = false,
  readOnly = false,
  ...rest
}) => {
  const inputId = useId()
  const errorId = `error_${inputId}`

  const handleClear = () => {
    const event = {
      target: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>
    onChange?.(event)

    setTimeout(() => {
      const inputEl = document.getElementById(inputId) as HTMLInputElement
      inputEl?.focus()
    }, 0)
  }

  return (
    <div className={`input-item ${className ?? ''}`}>
      {!labelHidden && label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      <div className="input-field-wrap">
        {' '}
        {/* 오타 수정: flield → field */}
        <input
          id={inputId}
          type={type}
          className={`input-field ${error ? 'input-error' : ''}`}
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          disabled={disabled}
          readOnly={readOnly}
          aria-label={labelHidden ? `${label} 입력` : undefined}
          {...rest}
        />
        {clearable && value && !disabled && !readOnly && (
          <button
            type="button"
            className="input-clear-btn"
            onClick={handleClear}
            aria-label="입력값 지우기"
          >
            ×
          </button>
        )}
      </div>
      {/* {propValue} 이 줄 삭제! */}
      {error && (
        <div id={errorId} className="input-error-message" role="alert">
          {error}
        </div>
      )}
    </div>
  )
}
