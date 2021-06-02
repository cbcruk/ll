import React from 'react'

function Seller({ sellerUrl, sellerNickName, sendTodayTxt, sendTodayTimeTxt }) {
  return (
    <div className="flex flex-col justify-between min-w-40 pl-4 border-l ml-4">
      <a href={sellerUrl}>{sellerNickName}</a>
      <div className="flex gap-2 text-xs">
        <span className="text-blue-400">{sendTodayTxt}</span>
        {sendTodayTimeTxt}
      </div>
    </div>
  )
}

export default Seller
