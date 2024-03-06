import { useState } from "react";
import TextBlockPreview from "../components/TextBlockPreview";
import TotalFrame from "../components/TotalFrame";
import ComponentTypesCard from "../components/ComponentTypesCard";
import "./PaymentProcessBilling.css";

const PaymentProcessBilling = () => {
  const [previewInvoiceIconChecked, setPreviewInvoiceIconChecked] =
    useState(true);
  return (
    <div className="payment-process-billing">
      <TextBlockPreview />
      <main className="subtotaltax-discount-container">
        <TotalFrame />
        <section className="frame-title">
          <div className="text-frame">
            <div className="rectangle-shape">
              <h1 className="payment">Payment</h1>
              <h1 className="create-a-invoice">
                Create a invoice for your patients
              </h1>
            </div>
            <div className="button-confirm-payment">
              <div className="frame-vector">
                <div className="frame-vector-child" />
                <div className="frame-rectangle">
                  <div className="group-summary">
                    <div className="subtotal-tax-discount">
                      <div className="line-break">
                        <div className="frame-total">
                          <div className="notes-terms">
                            <div className="frame-logotype-white" />
                            <input
                              className="preview-invoice"
                              checked={previewInvoiceIconChecked}
                              type="checkbox"
                              onChange={(event) =>
                                setPreviewInvoiceIconChecked(
                                  event.target.checked
                                )
                              }
                            />
                          </div>
                          <h3 className="shipping">Shipping</h3>
                        </div>
                        <h2 className="payment-method">Payment Method</h2>
                      </div>
                      <div className="text-container">
                        <div className="rectangle-frame" />
                      </div>
                    </div>
                    <div className="frame-doctor-name">
                      <div className="frame-product-info" />
                      <div className="rate-qty-amount">2</div>
                    </div>
                    <div className="frame-doctor-name1">
                      <h3 className="billing">Billing</h3>
                    </div>
                    <div className="text-label">
                      <div className="input-field" />
                    </div>
                    <div className="frame-doctor-name2">
                      <div className="frame-doctor-name-child" />
                      <div className="div">3</div>
                    </div>
                    <div className="frame-doctor-name3">
                      <h3 className="confirmation">Confirmation</h3>
                    </div>
                  </div>
                </div>
                <div className="select-element">
                  <div className="button-frame">
                    <div className="column-container">
                      <div className="row-container">
                        <div className="text-input-field">
                          <div className="error-message">
                            <div className="dropdown-menu" />
                            <div className="label-frame" />
                          </div>
                          <h3 className="creditdebit-card">
                            Credit/Debit card
                          </h3>
                        </div>
                        <div className="text-area">
                          <div className="vector-image" />
                          <h3 className="net-banking">Net Banking</h3>
                        </div>
                      </div>
                      <h2 className="add-payment-details">
                        Add Payment Details
                      </h2>
                    </div>
                    <div className="checkbox-container">
                      <div className="line-separator" />
                      <h3 className="paypal">Paypal</h3>
                    </div>
                    <div className="checkbox-container1">
                      <div className="checkbox-container-child" />
                      <h3 className="bitcoin">Bitcoin</h3>
                    </div>
                  </div>
                </div>
                <div className="skin-club-logo-logotype-white">
                  <div className="frame-group">
                    <div className="text-rectangle">
                      <div className="frame-rectangle1">
                        <input
                          className="enter-name-on"
                          placeholder="Enter Name on Card"
                          type="text"
                        />
                        <div className="wrapper-group-save-confirm-pay">
                          <input
                            className="group-save-confirm-payment"
                            type="text"
                          />
                          <img
                            className="preview-invoice-icon"
                            alt=""
                            src="/frame-1.svg"
                          />
                          <img
                            className="preview-invoice-icon1"
                            alt=""
                            src="/frame-1.svg"
                          />
                        </div>
                      </div>
                      <div className="skin-club-logo-logotype-white1">
                        <input
                          className="expiry-mmyy"
                          placeholder="Expiry (MM/YY)"
                          type="text"
                        />
                        <div className="wrapper-frame-rectangle-rectan">
                          <input
                            className="frame-rectangle-rectangle"
                            type="text"
                          />
                          <img
                            className="frame-icon"
                            alt=""
                            src="/frame-1.svg"
                          />
                          <img
                            className="frame-icon1"
                            alt=""
                            src="/frame-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-rectangle1">
                      <div className="card-number-parent">
                        <input
                          className="card-number"
                          placeholder="Card Number"
                          type="text"
                        />
                        <div className="wrapper-frame-14">
                          <input
                            className="wrapper-frame-14-child"
                            type="text"
                          />
                          <img
                            className="frame-icon2"
                            alt=""
                            src="/frame-1.svg"
                          />
                          <img
                            className="frame-icon3"
                            alt=""
                            src="/frame-1.svg"
                          />
                        </div>
                      </div>
                      <ComponentTypesCard />
                    </div>
                  </div>
                </div>
                <div className="confirm-payment-button">
                  <h3 className="by-clicking-on-container">
                    <span>
                      By Clicking on ‘Confirm Payment’ I agree with the T
                    </span>
                    <b className="erms-and-conditions">erms and conditions</b>
                    <span> of the Company.</span>
                  </h3>
                </div>
                <div className="frame-with-save-group">
                  <div className="save-confirm-payment">
                    <button className="rectangle-parent">
                      <div className="frame-child" />
                      <div className="save">Save</div>
                    </button>
                    <button className="rectangle-group">
                      <div className="frame-item" />
                      <div className="confirm-payment">Confirm Payment</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="frame-preview-invoice">
                <div className="frame-preview-invoice-child" />
                <div className="frame-with-vector-frames">
                  <h3 className="preview-invoice1">Preview Invoice</h3>
                  <div className="frame-total1">
                    <div className="vector-container">
                      <div className="vector-container-child" />
                      <img
                        className="vector-icon"
                        alt=""
                        src="/vector-11.svg"
                      />
                    </div>
                    <div className="vector-container1">
                      <div className="vector-container-item" />
                      <img className="vector-icon1" alt="" src="/vector2.svg" />
                    </div>
                  </div>
                </div>
                <div className="rectangle-container">
                  <div className="frame-inner" />
                  <div className="group">
                    <img
                      className="skinclublogo-logotype-white-2-icon"
                      loading="lazy"
                      alt=""
                      src="/skinclublogo-logotype-white-2@2x.png"
                    />
                    <div className="skin-club-logo-logotype-white2">
                      <div className="summery">SUMMERY</div>
                      <img
                        className="skin-club-logo-logotype-white-child"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="dr-vihang-jane-doe-wrapper">
                    <div className="dr-vihang-jane-doe">
                      <div className="dr-vihang">Dr. Vihang</div>
                      <div className="jane-doe">Jane Doe</div>
                    </div>
                  </div>
                  <div className="rate-qty-amount-parent">
                    <div className="rate-qty-amount1">
                      <div className="rate-qty-amount-child" />
                      <div className="frame-div">
                        <div className="rectangle-div" />
                        <div className="item">
                          <div className="item1">item</div>
                        </div>
                        <div className="rate">Rate</div>
                        <div className="qty">Qty</div>
                        <div className="amount">Amount</div>
                      </div>
                      <div className="vitamin-a-night-serum">
                        <div className="vitamin-a-night-serum1">
                          <div className="vitamin-a-night-serum2">
                            <div className="vitamin-a-night">
                              Vitamin A Night Serum
                            </div>
                            <div className="vitamin-a-night1">$90</div>
                          </div>
                          <div className="div1">2</div>
                          <div className="div2">$180</div>
                        </div>
                      </div>
                      <div className="vitamin-a-night-serum3">
                        <div className="frame-parent">
                          <div className="vitamin-a-night-serum-parent">
                            <div className="vitamin-a-night2">
                              Vitamin A Night Serum
                            </div>
                            <div className="div3">$90</div>
                          </div>
                          <div className="div4">2</div>
                          <div className="div5">$180</div>
                        </div>
                      </div>
                      <div className="vitamin-a-night-serum4">
                        <div className="frame-container">
                          <div className="vitamin-a-night-serum-group">
                            <div className="vitamin-a-night3">
                              Vitamin A Night Serum
                            </div>
                            <div className="div6">$90</div>
                          </div>
                          <div className="div7">2</div>
                          <div className="div8">$180</div>
                        </div>
                      </div>
                    </div>
                    <div className="subtotal-frame">
                      <div className="subtotal-tax-summary-parent">
                        <div className="subtotal-tax-summary">
                          <div className="subtotal">Subtotal</div>
                          <div className="tax-5">tax 5%</div>
                          <div className="discount-10">Discount 10%</div>
                        </div>
                        <div className="subtotal-tax-summary1">
                          <div className="div9">$540.00</div>
                          <div className="div10">$00.00</div>
                          <div className="div11">$00.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="line-div" />
                    <div className="grand-total-wrapper">
                      <div className="grand-total">
                        <div className="total">total</div>
                        <div className="total1">$540.00</div>
                      </div>
                    </div>
                    <div className="rectangle-parent1">
                      <div className="frame-child1" />
                      <div className="notes-terms-and-more">
                        <div className="notesterms-wrapper">
                          <div className="notesterms">Notes/Terms</div>
                        </div>
                        <input
                          className="lorem-ipsum-dolor"
                          placeholder="Lorem ipsum dolor sit amet. Sit eaque assumenda qui."
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PaymentProcessBilling;
