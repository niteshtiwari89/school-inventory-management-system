// import React from 'react'
import "../css/navbar.css"

function Admin() {
  return (
    <>
            <div className="container-dash">
                <div className="product-event">
                    <button>
                        <a href="">Add Product</a>
                    </button>
                    <button>
                        <a href="">Delete Product</a>
                    </button>
                </div>
                <hr />
                <div className="product-list">
                    <h2>Sport Items</h2>
                    <div className="item-list">
                        <table id="list">
                            <tr>
                                <th>ItemName</th>
                                <th>Quantity</th>
                                <th>Available</th>
                                <th>In Used</th>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>20</td>
                                <td>15</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>20</td>
                                <td>15</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>20</td>
                                <td>15</td>
                                <td>5</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
  );
}

export default Admin
