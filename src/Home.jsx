import React from "react";
import ProductList from "./ProductList";

const Home = () => {
    return (
        <div className="Hero">
            <div class="card text-bg-dark text-black border-0">
                <img src="https://i.pinimg.com/564x/d9/87/33/d987339f410bc9fddc8f2bead4346e37.jpg" class="card-img" alt="Hero" height="550px" />
                <div className="card-img-overlay d-flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">Welcome To Shopify!</h5>
                        <p className="card-text lead fs-2">Where all your needs are met!</p>
                        <p className="card-text lead fs-3">A shop Heaven</p>
                    </div>
                </div>
            </div>
            <ProductList />
        </div>
    );
}
export default Home;