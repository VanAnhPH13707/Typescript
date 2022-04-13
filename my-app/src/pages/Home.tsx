import React from 'react'
import ReactPaginate from 'react-paginate'
import ProductList from '../components/ProductList'
import { ProductType } from '../types/product'

type Props = {
  data: ProductType[]
}

const Home = (props: Props) => {
  const handlePageClick = (data:Props) => {
    console.log(data.selected);
  }
  return (
    <div>
      <ProductList data={props.data} />
      <ReactPaginate
            previousLabel={'<<'}
            nextLabel={'>>'}
            breakLabel={'...'}
            pageCount={5}
            marginPagesDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageLinkClassName = {'page-link'}
            previousClassName = {'page-item'}
            previousLinkClassName = {'page-link'}
            nextClassName = {'page-item'}
            nextLinkClassName = {'page-link'}
            breakClassName = {'page-item'}
            breakLinkClassName = {'page-link'}
            activeClassName = {'active'}
          />
    </div>
  )
}

export default Home