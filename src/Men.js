import React from 'react';
import Product from "./Product.js";
import "./Home.css"

function Men() {
    return (
        <div className="home">
            {/* https://cdn.sportsshoes.com/product/A/ADI12794/ADI12794_1000_1.jpg*/}
            {/*https://i.pinimg.com/originals/f5/b5/3d/f5b53d83ed83675af239d482eb5400a8.jpg */}
            <img className="home__image" src="https://i.pinimg.com/originals/a1/5c/bc/a15cbc46ef421272a227accd9dca6a20.jpg" alt="amazon banner" />
             <div className="heading__1">
             <h1>Men`s Products</h1>
             </div>
            <div className="home__row">
                <Product className="pimage" id="1" title="Nike Air Zoom Pregasus 37" price={30} rating={5} image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/049ee600-6862-459b-ba89-883a5c59b0f2/air-zoom-pegasus-37-running-shoe-mwrTCc.jpg" />
                <Product className="pimage" id="2" title="Nike Air Zoom Pregasus 37 FlyEase" price={30} rating={5} image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/63243236-6776-457c-8906-552df5b402d0/air-zoom-pegasus-37-flyease-running-shoe-bX39Rb.jpg" />
                <Product className="pimage" id="3" title="Nike Zoom Rival Fly 2" price={30} rating={5} image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/05b1d363-fea7-45c8-adfa-3816581b6bac/zoom-rival-fly-2-running-shoe-dRKj7p.jpg" />
                <Product className="pimage" id="4" title="Nike Air Zoom Vomero 14" price={30} rating={5} image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/zusqkpsiwog9nzxawefz/air-zoom-vomero-14-running-shoe-WtvZ3q.jpg" />
            </div>
            <div className="home__row">
                <Product className="pimage" id="5" title="Nike Air Zoom Pregasus 37" price={30} rating={5} image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9c7849e1-d4a3-488c-8479-39583a23a832/air-zoom-pegasus-37-running-shoe-vlzXhM.jpg" />
                <Product className="pimage" id="6" title="Nike Zoom Gravity 2" price={30} rating={5} image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5124822d-ce75-4021-a66f-f13d2f4150ff/zoom-gravity-2-running-shoe-0Gw32G.jpg" />
                <Product className="pimage" id="7" title="Nike Star Runner 2 Lite" price={30} rating={5} image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/065fb047-bc4b-4d37-84be-990923d0ddd0/star-runner-2-light-older-running-shoe-4BG9Jj.jpg" />
                <Product className="pimage" id="8" title="Nike Tiempo Legend 8 Academy MG" price={30} rating={5} image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/737364bb-29ef-4cc9-bc7a-9a990c424c35/tiempo-legend-8-academy-mg-multi-ground-football-boot-pvFMg4.jpg" />
            </div>
            <div className="footer__img">
            <img  src="https://cdn.statically.io/img/timelinecovers.pro/facebook-cover/download/just-do-it-nike-facebook-cover.jpg" alt="footer-img" />
            </div>
            

        </div>

    )
    
}

export default Men
