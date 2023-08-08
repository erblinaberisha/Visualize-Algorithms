import React, { useState } from 'react';
import instruct_gif from "../src/convexHullComponents/convex_instruct.gif";

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
                <button className="btn btn-primary btn-lg m-2" onClick={showModal}>Description</button>

                {modalOpen && (
                    <div className="modal display-block">
                    <section className="modal-main">
                      <h3>Pathfinding</h3>
                      <p>
                                    Pathfinding is generally the process of finding a route between two points. It is closely related to the shortest path problem in graph theory,
                                    which examines how to identify the "best" paths valued by different criteria (Ex. distance, cost, time consumption).
                                </p>
                                <p>Pathfinding is also similar to Searching in some circumstances. For instance, we can use [breadth-first search] to find the shortest path in a grid world.</p>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={hideModal}>Close</button>
                    </section>
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
                          
                          .modal-main {
                            position:fixed;
                            padding: 10px;
                            background: white;
                            width: 80%;
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
                    `}
                </style>
            </div>
        );
}

export default MyComponent;
