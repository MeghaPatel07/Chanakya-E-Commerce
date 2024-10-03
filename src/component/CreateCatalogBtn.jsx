import React from 'react'
import { Link } from 'react-router-dom'

const CreateCatalogBtn = () => {
  return (
    <React.Fragment>
    
        <div className='createCatelogDiv'>
        <Link to="/createCatalog">   Create Catalog  </Link>
        </div>
       
    </React.Fragment>
  )
}

export default CreateCatalogBtn