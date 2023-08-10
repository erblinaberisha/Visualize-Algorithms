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
                <button className="btn btn-outline-secondary btn-md m-2 mt-3" onClick={showModal}>Description</button>

                {modalOpen && (
                    <div className="modal display-block">
                          <div class="modal-main1 intro">
                            <div class="modal-header">
                                  <h5 class="modal-title">Convex Hull</h5>
                                  <button type="button" class="close" onClick={hideModal}>&times;</button>
                              </div>
                            <div class="modal-body intro">
                              <p>
                                The convex hull of a set of points is defined as the smallest convex polygon, that encloses all of the points in the set. 
                                Convex means that the polygon has no corner that is bent inwards.
                              </p>
                              <p>
                                To find the convex hull of a set of points, we can use an algorithm called the Graham Scan, which is considered to be one 
                                of the first algorithms of computational geometry.
                              </p>
                              <p>Now please click the Refresh button in order to generate the dots and visualize it!</p>
                                <p class='tips'>(after refresh, click on the Visualize Graham Scan button.)</p><br />
                                <p class='tips'>Note: if you want to get different dots you can do so by clicking again in Refresh button.</p>
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
