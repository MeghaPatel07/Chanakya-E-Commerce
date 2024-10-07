import React from 'react'
import Logo from "../assets/images/logo.png"

const PrintStatment = () => {
  return (
    <React.Fragment>
        
   <section className="blog-area pb-2">
  <div className="container">
    <div className="row m-0" id="printablediv">
      <div className="col-sm-12 checkout-login">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="invoice-address">
              <h4>The Direct Deal</h4>
              <p> Barodaweb, Vadodara, Gujarat 390005.</p>
              <p> info@thedirectdeals.com</p>
              <p> +91(1800)888-8888</p>
              <p>
                www.thedirectdeals.com
              </p>
              <p>
                GST/HST Registration No.: 73520 0081 RC0001
              </p>
              <p>
                Business Number : 735200081
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <img src={Logo} className="img-fluid center-block text-center" style={{width: 200}} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <h5 className="order-ttl">BILL TO</h5>
            <p>
              Darpan Apartment, 305, next to Express Hotel, Alkapuri, Vadodara, Gujarat 390005
            </p>
          </div>
          <div className="col-md-6">
            <h5 className="order-ttl xs-sp-add">SHIP TO </h5>
            <p>
              Darpan Apartment, 305, next to Express Hotel, Alkapuri, Vadodara, Gujarat 390005
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <table className="table table-bordered table-tacb">
              <thead>
                <tr>
                  <th>Commercial Invoice #</th>
                  <th>Date</th>
                  <th>Total Date</th>
                  <th>Due Date</th>
                  <th>Terms</th>
                  <th>Enclosed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> 39 </td>
                  <td> 04/01/2022 </td>
                  <td> $897.11 </td>
                  <td> 09/01/2022 </td>
                  <td> 5 Days </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6">
            <h5 className="order-ttl">SHIP DATE </h5>
            <p>06/01/2022 </p>
          </div>
          <div className="col-md-6">
            <h5 className="order-ttl">SHIP VIA </h5>
            <p>Road</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-12">
            <div className="table table-responsive table-tacb">
              <table className="meta-1 table table-bordered order-summary mb-0">
                <thead>
                  <tr>
                    <th>Item No </th>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th className="text-center">Total Price </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">
                      2500 
                    </td>
                    <td>
                      <div className="description-p text-left">
                        <p className="product-category">Deep Original Khakhara(1BOX=32PACK)</p>
                      </div>
                    </td>
                    <td>3</td>
                    <td>
                      $ 69.88
                    </td>
                    <td className="text-right">
                      $ 209.64
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left">
                      2500
                    </td>
                    <td>
                      <div className="description-p text-left">
                        <p className="product-category">Deep Original Khakhara(1BOX=32PACK)</p>
                      </div>
                    </td>
                    <td>3</td>
                    <td>
                      $ 69.88
                    </td>
                    <td className="text-right">
                      $ 209.64
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="text-left">We appreciate your business and looking forward to help you again!</td>
                    <td colSpan={2} className="text-right fw-700">Subtotal : </td>
                    <td className="text-right">
                      $ 419.28
                    </td>
                  </tr>
                  <tr id>
                    <td colSpan={2} className="text-left" />
                    <td colSpan={2} className="text-right fw-700">GST @ 5% : </td>
                    <td className="text-right">
                      $ 20.96
                    </td>
                  </tr>
                  <tr id>
                    <td colSpan={2} className="text-left" />
                    <td colSpan={2} className="text-right fw-700">SHIPPING  : </td>
                    <td className="text-right">
                      $ 20.00
                    </td>
                  </tr>
                  <tr id>
                    <td colSpan={2} className="text-left" />
                    <td colSpan={2} className="text-right fw-700">TOTAL  : </td>
                    <td className="text-right">
                      $ 190.24
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="text-left" />
                    <td colSpan={2} className="text-right fw-700">BALANCE DUE : </td>
                    <td className="text-right fw-700 fs-13">
                      $ 190.24
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr />
        <div className="row mt-4">
          <div className="col-sm-12">
            <h2 className="order-ttl text-left">TAX SUMMARY </h2>
            <div className="table table-responsive">
              <table className="table table-bordered table-tacb order-summary mb-0">
                <thead>
                  <tr>
                    <th className="text-right">Rate</th>
                    <th className="text-right">Tax</th>
                    <th className="text-right">Net</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-right">
                      GST @ 5%
                    </td>
                    <td className="text-right">
                      $ 38.43
                    </td>
                    <td className="text-right">
                      $ 419.28
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr />
        <div className="row mt-4">
          <div className="col-sm-12">
            <div className="mlr-20 offer-panel">
              <p className="text-center" style={{fontSize: 11}}>This is system generated invoice statement, It's not required any Digital signature.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </React.Fragment>
  )
}

export default PrintStatment