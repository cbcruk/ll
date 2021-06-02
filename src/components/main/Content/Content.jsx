import { pick } from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import { IconChevronRight } from '../../shared/Icon'
import List from '../../shared/List'

function Content() {
  const { content } = useSelector((state) => {
    return {
      ...pick(state.server, ['content']),
    }
  })

  return (
    <List
      title="당신을 위한 쇼핑 콘텐츠"
      direction="row"
      hasItems={content.items.length > 0}
    >
      {content.items.map((item, index) => {
        return (
          <div
            key={index}
            className="max-w-80 rounded border border-transparent hover:border-red-500 overflow-hidden"
          >
            <a href={item.productDetailUrl}>
              <img
                src={item.imageUrl}
                alt=""
                className="w-full object-cover"
                style={{
                  height: 158,
                }}
              />
            </a>
            <div className="p-4">
              <a href={item.linkUrl} className="hover:underline">
                <div className="text-lg">{item.title}</div>
                <div className="mt-2 line-clamp-2">
                  {item.description}{' '}
                  <span className="inline-flex items-center text-blue-400">
                    더보기
                    <IconChevronRight
                      width="16"
                      height="16"
                      className="fill-blue-400"
                    />
                  </span>
                </div>
              </a>
              <div className="flex flex-wrap gap-1 mt-2">
                {item.relatedKeyword.map((kwd, index) => (
                  <a
                    key={index}
                    href={kwd.url}
                    className="bg-gray-100 text-blue-400 text-xs p-1 hover:underline"
                  >
                    #{kwd.keyword}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-4 text-xs">
                <a
                  href={item.providerLinkUrl}
                  className="flex items-center gap-1"
                >
                  <img
                    src={item.providerLogoUrl}
                    alt=""
                    width="20"
                    height="20"
                  />
                  {item.provider}
                </a>
                <div className="text-gray-400">{item.createdDate}</div>
                <div className="text-gray-400">조회수 {item.pageViewCount}</div>
              </div>
            </div>
          </div>
        )
      })}
    </List>
  )
}

export default Content
