import React, { useState } from 'react';
import { FaPlus ,FaMinus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Img1 from "../assets/images/brands/category/2.png"


const BrandPage = () => {
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
              <Link to="#">Home</Link>
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
          <div className="filter-actions">
            <label>Filter :</label>
            <Link to="#" className="btn btn-dark btn-link filter-clean">
              Clean All
            </Link>
          </div>

          {/* Start of Collapsible widget */}
          <div className="widget widget-collapsible">
          <h3
              className="widget-title"
              onClick={toggleCategory}
              style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span>All Categories</span>
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
          <div className="widget widget-collapsible">
          <h3
              className="widget-title"
              onClick={toggleExport}
              style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span>Export</span>
              <span>{isExportOpen ?  <FaMinus /> :<FaPlus />}</span>
            </h3>
            {/* Toggle visibility based on isExportOpen state */}
            {isExportOpen && (
            <ul className="widget-body brandUl filter-items item-check mt-1">
            <li>
              <input type="checkbox" id="export-india" />
              <label htmlFor="export-india"> Export for India</label>
            </li>
            <li>
              <input type="checkbox" id="export-canada" />
              <label htmlFor="export-canada"> Export for Canada</label>
            </li>
            <li>
              <input type="checkbox" id="export-china" />
              <label htmlFor="export-china"> Export for China</label>
            </li>
            <li>
              <input type="checkbox" id="export-usa" />
              <label htmlFor="export-usa"> Export for USA</label>
            </li>
          </ul>
            )}
          </div>
          {/* End of Collapsible Widget */}
        </div>
        {/* End of Sticky Sidebar */}
      </div>
      {/* End of Sidebar Content */}
    </aside>
            {/* End of Shop Sidebar */}
            {/* Start of Main Content */}
            <div className="main-content">
              <nav className="toolbox sticky-toolbox sticky-content fix-top">
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
              </nav>
              <div className="product-wrapper row brand-categories">
                {brandData?.map((data)=>
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
                )}
           
               
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
