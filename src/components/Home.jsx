import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLorems } from '../redux/user/userSlice';

export function Home() {

    const dispatch = useDispatch();
    // const [first, setfirst] = useState(second)
    // const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    const userData = useSelector((state) => state.userData);

    console.log('userData ::', userData);

    // const fetchData = async () => {
    //     setLoading(true);
    //     try {
    //         const { data: response, status } = await axios.get(`https://fakestoreapi.com/products`);
    //         if (status === 200) {
    //             console.log("data", response, status);
    //             setData(response);
    //         }
    //     } catch (error) {
    //         console.error(error.message);
    //     }
    //     setLoading(false);
    // }


    // const getData = async () => {
    //     const { data, status } = await axios.get(`https://fakestoreapi.com/products?limit=10`);
    //     console.log("data", data, status)
    //     setData(data);
    // };

    useEffect(() => {
        // getData();
        // fetchData();
        dispatch(getLorems());
    }, []);

    const userName = localStorage.getItem("USER_NAME");

    const logoutHandler = () => {
        localStorage.removeItem('TOKEN');
        localStorage.removeItem('USER_NAME');
        window.location.reload();
    }

    return (
        <>
            <section>
                <header>
                    <nav className="nav1">
                        <div className="left">
                            <span>Welcome to my E-shop</span>
                            {
                                userName ?
                                    (<>
                                        <Link to="/login" > {userName} </Link> OR
                                        <Link onClick={logoutHandler}> Logout </Link>
                                    </>)
                                    :
                                    (<>
                                        <Link to="/register" > Register </Link> OR
                                        <Link to="/login" > Login </Link>
                                    </>)
                            }
                        </div>
                        <div className="right">
                            <i className="fa fa-facebook" />
                            <i className="fa fa-instagram" />
                            <i className="fa fa-whatsapp" />
                            <i className="fa fa-twitter" />
                            <i className="fa fa-pinterest" />
                        </div>
                    </nav>
                    {/*nav1 end*/}
                    {/*-nav2 start*/}
                    <nav className="nav2">
                        <div className="nav2-left">
                            <i className="fa fa-phone" /> +91 9996822527
                            <i className="fa fa-envelope" /> beniwaldinesh992@gmail.com
                        </div>
                        <div className="nav2-center">
                            <h1>Classic <span>World</span></h1>
                            <p>Everything For Kids World</p>
                        </div>
                        <div className="nav2-right">
                            <Link to="/contact">
                                <i className="fa fa-map" /> Contact us
                            </Link>
                            <Link to="/about">
                                <i className="fa fa-map" style={{ "margin-left": "20px" }} /> About us
                            </Link>
                        </div>
                    </nav>
                    {/*nav2 end*/}
                    {/*nav3 start*/}
                    <nav className="nav3">
                        <ul>
                            <li>
                                <Link to="/" ><i className="fa fa-home" /> Home </Link>
                            </li>
                            <li>
                                <Link to="/Boys" > <i className="fa fa-user" /> Boys </Link>
                            </li>
                            <li>
                                <Link to="/Accessories" > <i className="fa fa-users" /> Accessories </Link>
                            </li>
                            <li>
                                <Link to="/Toys" >
                                    <i className="fa fa-anchor" />
                                    Toys
                                    <i className="fa fa-caret-down" />
                                </Link>
                                <ul>
                                    <li>
                                        <Link to="/" > <i className="fa fa-clipboard" /> Wooden </Link>
                                    </li>
                                    <li>
                                        <Link to="/" > <i className="fa fa-circle-o" /> Plastic </Link>
                                    </li>
                                    <li>
                                        <Link to="/" > <i className="fa fa-gavel" /> Iron </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/" > <i className="fa fa-calendar-check-o" /> Special offers </Link>
                            </li>
                            <li>
                                <Link to="/" > <i className="fa fa-search" /> Find </Link>
                            </li>
                        </ul>
                    </nav>
                    {/*nav3 end*/}
                    {/*featured start*/}
                    <section className="featured">
                        <div className="featured-text">
                            <button>coming soon</button>
                            <h2>Our new designs</h2>
                        </div>
                    </section>
                    {/*featured end*/}
                </header>
            </section>
            {/*latest start*/}
            <section className="latest">
                <div className="product-intro">
                    <h1>New <span>Arrival</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odio amet eos?</p>
                </div>
                <div className="card-container">
                    {userData && userData?.isSuccess ?
                        userData?.loading ? <><h3>Loading...</h3></> :
                            userData?.data?.length > 0 && userData?.data?.map((item, index) => {
                                let ratingValue = parseInt(Math.trunc(item?.rating?.rate));

                                return (
                                    <div className="card" key={item.id}>
                                        <div>
                                            <img className='image-items'
                                                src={item.image}
                                                alt={item.title} />
                                        </div>
                                        <h1 className='ellipses'>{item.title}</h1>
                                        <span>
                                            {[...new Array(ratingValue)].map((arr, index) => {
                                                return <i className="fa fa-star" key={index} />
                                            })}
                                        </span>
                                        <p>${item.price}</p>
                                        <button>Add to Cart</button>
                                    </div>)
                            }) : <><h3> {userData?.message}</h3> </>
                    }
                </div>
            </section>
        </>
    )
}