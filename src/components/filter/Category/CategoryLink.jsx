import clsx from 'clsx'
import React from 'react'
import useRouter from '../../../hooks/useRouter'
import { IconChevronLeft, IconChevronRight } from '../../shared/Icon'

function CategoryLink({
  id,
  extraText,
  count,
  hasIcon,
  isActive,
  className,
  children,
}) {
  const { updateValue } = useRouter()

  return (
    <a
      onClick={(e) => {
        e.preventDefault()

        updateValue({
          dispCtgrNo: id,
        })
      }}
      className={clsx('flex items-center', className, {
        'text-red-500': isActive,
        'font-bold': isActive,
      })}
    >
      {hasIcon && (
        <IconChevronLeft width="16" height="16" className="fill-gray-400" />
      )}
      {extraText && (
        <span className="flex items-center text-gray-400">
          {extraText}
          <IconChevronRight width="16" height="16" className="fill-gray-400" />
        </span>
      )}
      {children}
      {count && (
        <span className="text-gray-400 text-xs font-normal ml-2">
          {count.toLocaleString()}
        </span>
      )}
    </a>
  )
}

export default CategoryLink
