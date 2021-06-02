import React from 'react'
import {
  Compare,
  Deliver,
  Benefit,
  Brand,
  Category,
  Attribute,
  ImgAttribute,
  Partners,
  Price,
  PrdState,
  ReSearch,
  Selected,
  Kwd,
} from './components/filter'
import {
  CommonPrdList,
  Content,
  FocusPrdList,
  Header,
  Pagination,
  PlusPrdList,
  PopKeyword,
  PowerPrdList,
  PriceCompare,
  RcmdPrdList,
  SendToday,
  ShockingDeal,
  CatalogPrdList,
} from './components/main'
import useData from './hooks/useData'

function App() {
  const { server } = useData()

  if (!server) {
    return null
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <header>
        <Kwd />
      </header>
      <div className="flex pt-4 border-t">
        <aside className="text-sm pr-4 border-r mr-4">
          <Compare />
          <Selected />
          <Deliver />
          <Benefit />
          <Brand />
          <Category />
          <Attribute />
          <ImgAttribute />
          <Partners />
          <PrdState />
          <Price />
          <ReSearch />
        </aside>
        <main className="flex-grow flex flex-col gap-10 text-sm">
          <Header />
          <CatalogPrdList />
          <RcmdPrdList />
          <FocusPrdList />
          <PriceCompare />
          <PowerPrdList />
          <SendToday />
          <ShockingDeal />
          <Content />
          <PlusPrdList />
          <CommonPrdList />
          <Pagination />
          <PopKeyword />
        </main>
      </div>
    </div>
  )
}

export default App
