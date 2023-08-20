import React, { useState } from 'react';
import "../index.css";
function MyComponent() {
    const [modalOpen, setModalOpen] = useState(false);

    const showModal = () => {
        setModalOpen(true);
    };

    const hideModal = () => {
        setModalOpen(false);
    };
        return (
            <div>
                <button className="btn btn-warning m-2 desc" onClick={showModal}>Description</button>

                {modalOpen && (
                    <div className="modal display-block">
                          <div class="modal-main1 intro">
                            <div class="modal-header">
                                  <h5 class="modal-title">Prime Numbers</h5>
                                  <button type="button" class="close" onClick={hideModal}>&times;</button>
                              </div>
                            <div class="modal-body intro">
                              <p>
                                As a data scientist or software engineer, you often encounter scenarios where generating prime numbers is crucial. 
                                Prime numbers play a significant role in various cryptographic algorithms, prime factorization, and hashing algorithms.
                              </p>
                              <p>
                                Prime numbers are natural numbers greater than 1 that are divisible only by 1 and themselves.
                              </p>
                              <p>Now please choose a Task and visualize it!</p>
                                <p class='tips'>(after choosing a Task, click on the Visualize button.)</p><br />
                                <p class='tips'>Note: if you want to reset the numbers you can do so by clicking in the Refresh button.</p>
                            </div>
                            <div class="modal-footer">
                              <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={hideModal}>OK</button>
                            </div>
                          </div>
                  </div>
                    
                )}

                <style jsx>
                    {`
                        .modal {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width:100%;
                            height: 100%;
                            background: rgba(0, 0, 0, 0.6);
                            z-index: 1000;
                            border-radius: 5px;
                          }
                          
                          .modal-main1 {
                            position:fixed;
                            padding: 10px;
                            background: white;
                            color: rgb(32, 31, 31);
                            width: 38%;
                            height: auto;
                            top:50%;
                            left:50%;
                            transform: translate(-50%,-50%);
                            z-index: 1000;
                            border-radius: 5px;
                            font-size: 20px;
                          }
                          
                          .display-block {
                              display: block;
                          }
                          
                          .display-none {
                            display: none;
                          }
                        .modalImage{
                          position: fixed;
                          z-index: 1;
                          padding-top: 100px;
                          left: 0;
                          top: 0;
                          width: 100%;
                          height: 100%;
                          overflow: auto;
                          background-color: rgba(0, 0, 0, 0.6);
                        }
                        .intro{
                          text-align: left;
                          font-size: 17px;
                          line-height: 1.6;
                      }
                      .tips{
                        color: rgb(99, 99, 99);
                        margin-top: -15px;
                        font-size: 16px;
                    }
                    `}
                </style>
            </div>
        );
}

export default MyComponent;
