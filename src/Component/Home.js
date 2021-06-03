import React,{useState,useEffect} from 'react';
import Header from './Header';
import Image2 from '../../src/images/home_icon_logo.png';
import Categtegory1 from "../../src/images/Canned_and_Packaged.png";
import Categtegory2 from "../../src/images/Beverages.png"
import Categtegory3 from "../../src/images/Condiments.png"
import Categtegory4 from '../../src/images/Festival.png'
import Categtegory5 from '../../src/images/Beverages.png'
import Categtegory6 from '../../src/images/Beverages.png'
import Categtegory7 from '../../src/images/Beverages.png';
import axios from 'axios'; 
import Product from './Product';
const Home=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple',{
            headers:{
                'Content-Type':"application/octet-stream",
                "x-rapidapi-host":"edamam-food-and-grocery-database.p.rapidapi.com",
                "x-rapidapi-key":"ea08be3fc6msh420291768b58982p13f2c5jsn6915183d2a2e"
            }
        }).then((res)=>{
            console.log(res.data);
            setData(res.data.hints);
        })
    },[])
    return(
        <div className="wrapper Grofoo-home">
            <Header />
            <div id="main" class="main">
            <div class="hero">
                <div class="container text-center hero-text font-white s_box">
                    <div class="row">
                        <div class="Home-logo-icon">
                            <img src={Image2} />
                        </div>
                        <h5 class="header_white">Discover
                            <span class="clr_green">food</span> or
                            <span class="clr_orange">grocery</span>
                            <br/>near by you</h5>
                        <div class="banner-form">
                            <form class="form-inline">
                                <div class="form-group">
                                    <div class="home-bg-icon"></div>
                                    <i class="ion-ios-search-strong icon-search"></i>
                                    <input type="text" class="form-control form-control-lg input_box" id="exampleInputAmount" placeholder="Enter food or grocery"/>
                                    <div class="can-toggle demo-rebrand-1">
                                        <input id="d" type="checkbox" />
                                        <label for="d">
                                            <div class="can-toggle__switch" data-checked="Grocery" data-unchecked="Food">
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div id="product categories" class="categories">
                <div class="container">
                    <div class="row">
                        <div class="home-header-text">
                            <h1 class="wow fadeInDown">
                                Categories
                            </h1>
                        </div>
                        <div id="owl_brand" class="categories_box" style={{display:'flex',flexDirection:'row'}}>
                            <div class="item">
                                <div class="col-xs-12 col-sm-12 col-md-12 food-item">
                                    <div class="food-item-wrap">
                                        <a href="search_list_new.html">
                                            <div class="figure-wrap-brand bg-image"  style={{  
                                                            backgroundImage: `url(${Categtegory2}) `,
                                                            backgroundPosition: 'center',
                                                            backgroundSize: 'contain',
                                                            backgroundRepeat: 'no-repeat'
                                                            //../../src/images/Canned_and_Packaged.png
                                                            }}>
                                            </div>
                                            <div class="content">
                                                <a href="search_list_new.html">Beverages</a>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="col-xs-12 col-sm-12 col-md-12 food-item">
                                    <div class="food-item-wrap">
                                        <a href="search_list_new.html">
                                            <div class="figure-wrap-brand bg-image"style={{  
                                                            backgroundImage: `url(${Categtegory1}) `,
                                                            backgroundPosition: 'center',
                                                            backgroundSize: 'contain',
                                                            backgroundRepeat: 'no-repeat'
                                                            //../../src/images/Canned_and_Packaged.png
                                                            }}
                                            >  
                                            </div>
                                            <div class="content">
                                                <a href="search_list_new.html">Canned & Packaged</a>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="col-xs-12 col-sm-12 col-md-12 food-item">
                                    <div class="food-item-wrap">
                                        <a href="search_list_new.html">
                                            <div class="figure-wrap-brand bg-image"style={{  
                                                            backgroundImage: `url(${Categtegory3}) `,
                                                            backgroundPosition: 'center',
                                                            backgroundSize: 'contain',
                                                            backgroundRepeat: 'no-repeat'
                                                            //../../src/images/Canned_and_Packaged.png
                                                            }}>
                                            </div>
                                            <div class="content">
                                                <a href="search_list_new.html">Condiments</a>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="col-xs-12 col-sm-12 col-md-12 food-item">
                                    <div class="food-item-wrap">
                                        <a href="search_list_new.html">
                                            <div class="figure-wrap-brand bg-image"style={{  
                                                            backgroundImage: `url(${Categtegory4}) `,
                                                            backgroundPosition: 'center',
                                                            backgroundSize: 'contain',
                                                            backgroundRepeat: 'no-repeat'
                                                            //../../src/images/Canned_and_Packaged.png
                                                            }}>
                                            </div>
                                            <div class="content">
                                                <a href="search_list_new.html">Festival</a>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="col-xs-12 col-sm-12 col-md-12 food-item">
                                    <div class="food-item-wrap">
                                        <a href="search_list_new.html">
                                            <div class="figure-wrap-brand bg-image"style={{  
                                                            backgroundImage: `url(${Categtegory5}) `,
                                                            backgroundPosition: 'center',
                                                            backgroundSize: 'contain',
                                                            backgroundRepeat: 'no-repeat'
                                                            //../../src/images/Canned_and_Packaged.png
                                                            }}>
                                            </div>
                                            <div class="content">
                                                <a href="search_list_new.html">Freezer & Foods</a>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="col-xs-12 col-sm-12 col-md-12 food-item">
                                    <div class="food-item-wrap">
                                        <a href="search_list_new.html">
                                            <div class="figure-wrap-brand bg-image"style={{  
                                                            backgroundImage: `url(${Categtegory1}) `,
                                                            backgroundPosition: 'center',
                                                            backgroundSize: 'contain',
                                                            backgroundRepeat: 'no-repeat'
                                                            //../../src/images/Canned_and_Packaged.png
                                                            }}>
                                            </div>
                                            <div class="content">
                                                <a href="search_list_new.html">Groceries</a>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="col-xs-12 col-sm-12 col-md-12 food-item">
                                    <div class="food-item-wrap">
                                        <a href="search_list_new.html">
                                            <div class="figure-wrap-brand bg-image"style={{  
                                                            backgroundImage: `url(${Categtegory6}) `,
                                                            backgroundPosition: 'center',
                                                            backgroundSize: 'contain',
                                                            backgroundRepeat: 'no-repeat'
                                                            //../../src/images/Canned_and_Packaged.png
                                                            }}>
                                            </div>
                                            <div class="content">
                                                <a href="search_list_new.html">Health & Beauty</a>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="col-xs-12 col-sm-12 col-md-12 food-item">
                                    <div class="food-item-wrap">
                                        <a href="search_list_new.html">
                                            <div class="figure-wrap-brand bg-image"style={{  
                                                            backgroundImage: `url(${Categtegory7}) `,
                                                            backgroundPosition: 'center',
                                                            backgroundSize: 'contain',
                                                            backgroundRepeat: 'no-repeat'
                                                            //../../src/images/Canned_and_Packaged.png
                                                            }}>
                                            </div>
                                            <div class="content">
                                                <a href="search_list_new.html">Instant Food</a>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="col-xs-12 col-sm-12 col-md-12 food-item">
                                    <div class="food-item-wrap">
                                        <a href="search_list_new.html">
                                            <div class="figure-wrap-brand bg-image"style={{  
                                                            backgroundImage: `url(${Categtegory1}) `,
                                                            backgroundPosition: 'center',
                                                            backgroundSize: 'contain',
                                                            backgroundRepeat: 'no-repeat'
                                                            //../../src/images/Canned_and_Packaged.png
                                                            }}>
                                            </div>
                                            <div class="content">
                                                <a href="search_list_new.html">kitchen</a>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                         </div>
                     </div>
                 </div>
             </div>
             
        </div>
        <div class="home-header-text">
                            <h1 class="wow fadeInDown title-top-space">
                                Trending Foods
                            </h1>
                             <div id="owl_product" style={{display:'flex',flexDirection:'row',flexWrap:"nowrap"}}>
                                    {
                                        data.length>0?
                                            data.map((item,key)=>{
                                                return <Product data={item} key={key}/>
                                            })
                                        :null
                                    }
                            </div>
    </div>
    </div>
    )
}
export default Home;