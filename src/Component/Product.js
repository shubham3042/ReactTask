import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addcard}from '../Action/Action';
function Product(props) {
    const Addcart=(food)=>{
        props.addcard(food)
    }
    return (
        <div class="item">
            <div class="col-xs-12 col-sm-12 col-md-12 food-item">
                  <div class="food-item-wrap">
                     <div class="figure-wrap bg-image" style={{  
                                                            backgroundImage: `url(${props.data.food.image}) `,
                                                            backgroundPosition: 'center',
                                                            backgroundSize: 'contain',
                                                            backgroundRepeat: 'no-repeat',
                                                            backgroundSize:'200px'
                                                            //../../src/images/Canned_and_Packaged.png
                                                            }}>
                            <div class="treding">
                                <a href="#" class="treding-icon"><i class="ion-android-share-alt group_icon"></i>12K</a>
                                     <a href="#" class="treding-icon"><i class="ion-eye group_icon"></i>12K</a>
                                     <a href="#" class="treding-icon"><i class="ion-bag group_icon"></i>12K</a>
                                </div>
                                 <div class="review pull-right">
                                        <a href="#" class="treding-icon"><i class="ion-ios-star-outline group_icon"></i>12K</a>
                                        <a href="#" class="treding-icon"><i class="ion-ios-chatbubble-outline group_icon"></i>12K</a>
                                 </div>
                            </div>
                            <div class="content">
                                   <h5>
                                       <a href="product_page.html">{props.data.food.label}</a>
                                    </h5>
                                    <div class="product-name">12 KG </div>
                                            <div class="price-btn-block">
                                                <span class="price_cut">Rs 15,99</span>
                                                <span class="price">Rs 15,99</span>
                                                <p href="#" class="theme-btn-dash pull-right" onClick={()=>Addcart(props.data.food)}>
                                                    <i class="ion-ios-cart-outline"></i> Add to cart</p>
                                            </div>
                                     </div>
                                  </div>
                            </div>
            </div>
    )
}

const mapStateToProps = state => {
return {
   todo: state,
 };
};
const mapDispatchToProps = (dispatch) => {
return bindActionCreators({
 addcard
}, dispatch)

}
export default connect(mapStateToProps,mapDispatchToProps)(Product)
