import React, { useState } from 'react';
import { FaPlus ,FaMinus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Img1 from "../assets/images/brands/category/2.png"
import { FaFilePdf } from "react-icons/fa";


const    BrandPage = () => {
     // State for toggling accordion sections
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const brandData = [
    {
        img: Img1,
        title:"Gopal"   
    },
    {
        img: Img1,
        title:"Gopal"   
    },
    {
        img: Img1,
        title:"Gopal"   
    },
    {
        img: Img1,
        title:"Gopal"   
    }
  ]

  // Toggle functions
  const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);
  const toggleExport = () => setIsExportOpen(!isExportOpen);
  return (
    <React.Fragment>
      <nav class="breadcrumb-nav mb-10">
        <div class="container">
          <ul class="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">Category</Link>
            </li>
            <li>Snacks</li>
          </ul>
        </div>
      </nav>
      <div className="page-content mb-10" style={{ textAlign: "start" }}>
        <div className="container">
          {/* Start of Shop Content */}
          <div className="shop-content row gutter-lg">
            {/* Start of Sidebar, Shop Sidebar */}
            <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
      {/* Start of Sidebar Overlay */}
      <div className="sidebar-overlay" />
      <Link className="sidebar-close" to="#">
        <i className="close-icon" />
      </Link>

      {/* Start of Sidebar Content */}
      <div className="sidebar-content scrollable">
        {/* Start of Sticky Sidebar */}
        <div className="sticky-sidebar">
          

          {/* Start of Collapsible widget */}
          <div className="widget widget-collapsible">
          <h3
              className="widget-title"
              onClick={toggleCategory}
              style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span>All Brand's</span>
              <span>{isCategoryOpen ?  <FaMinus /> :<FaPlus /> }</span>
            </h3>
            {/* Toggle visibility based on isCategoryOpen state */}
            {isCategoryOpen && (
              <ul className="widget-body brandUl filter-items search-ul">
                <li><Link to="#">Snakes</Link></li>
                <li><Link to="#">Special</Link></li>
                <li><Link to="#">Namkeen</Link></li>
                <li><Link to="#">Ready To Eat</Link></li>
                <li><Link to="#">Kitchenware</Link></li>
                <li><Link to="#">Spices</Link></li>
                <li><Link to="#">Spice Mixes</Link></li>
                <li><Link to="#">Tea & Coffee</Link></li>
                <li><Link to="#">Pooja</Link></li>
                <li><Link to="#">Oils & Ghee</Link></li>
                <li><Link to="#">Personal Care</Link></li>
              </ul>
            )}
          </div>
          {/* End of Collapsible Widget */}

          {/* Start of Collapsible Widget */}
      
          {/* End of Collapsible Widget */}
        </div>
        {/* End of Sticky Sidebar */}
      </div>
      {/* End of Sidebar Content */}
    </aside>
            {/* End of Shop Sidebar */}
            {/* Start of Main Content */}
            <div className="main-content">
              {/* <nav className="toolbox sticky-toolbox sticky-content fix-top">
                <div className="toolbox-left"></div>
                <div className="toolbox-right">
                  <div className="toolbox-item toolbox-show select-box">
                    <label>Sort By :</label>
                    <select name="orderby" className="form-control">
                      <option value="default" selected="selected">
                        Default sorting
                      </option>
                      <option value="popularity">Sort by A to Z</option>
                      <option value="rating">Sort by Z to A</option>
                    </select>
                  </div>
                </div>
              </nav> */}
              <div className="product-wrapper row brand-categories">
                {/* {brandData?.map((data)=>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="swiper-slide product product-image-gap product-simple">
                    <figure className="product-media">
                      <Link to="#">
                        <img src={data.img} alt='img' />
                      </Link>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name mb-0">
                        <Link to="#">{data.title}</Link>
                      </h4>
                    </div>
                  </div>
                </div>
                )} */}
           <h2>
            Brand Name 
           </h2>
           <div className="row mt-4">
          <div className="col-md-12">
            <table className="table table-bordered table-tacb">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Title</th>
                  <th>Download <FaFilePdf/></th>
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> Bage </td>
                  <td> catelog title </td>
                  <td> <button className='dodnloadBtn'>Download</button> </td>
                 
                </tr>
              </tbody>
            </table>
          </div>
         
        </div>
              </div>
            </div>
            {/* End of Main Content */}
          </div>
          {/* End of Shop Content */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default BrandPage;
