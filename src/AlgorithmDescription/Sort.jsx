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
                <button className="btn btn-warning mr-2 mt-2 mb-2 desc" onClick={showModal}>
                    Description
                </button>

                {modalOpen && (
                    <div className="modal display-block">
                          <div class="modal-main1 intro">
                            <div class="modal-header">
                                  <h5 class="modal-title">Iterative Sorting</h5>
                                  <button type="button" class="close" onClick={hideModal}>&times;</button>
                              </div>
                            <div class="modal-body intro">
                              <p>
                                Sorting is a process of arranging an ordered sequence. It is a common operation in many applications.
                                Iteration is when a loop repeatedly executes the set of instructions like "for" loops and "while" loops.
                              </p>
                              <p>
                                This module includes:
                                <pre>
                                  <br></br>
                                    <ul>
                                        <li>Bubble Sort       T O(n^2) - S O(1)</li>
                                        <li>Selection Sort    T O(n^2) - S O(1)</li>
                                        <li>Insertion Sort    T O(n^2) - S O(1)</li>
                                        <li>Quick Sort        T O(n^2) - S O(log(n))</li>
                                    </ul>
                                </pre>
                              </p>
                              <p>Now please choose a sorting algorithm and visualize it! You can click the Duo switch to compare two different sorting algorithms.</p>
                                <p class='tips'>(after choosing an algorithm, click on the Visualize button.)</p><br />
                                <p class='tips'>Note: if you want to get a different array to sort you can do so by clicking the Random button.</p>
                            </div>
                            <div class="modal-footer">
                              <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={hideModal}>OK</button>
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
