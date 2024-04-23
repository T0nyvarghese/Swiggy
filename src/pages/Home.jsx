import React, { useEffect, useState } from 'react';
import './Home.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSliders } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';


function Home() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (850 > scroll) { // Adjust this value to set the height at which the navbar becomes static
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='container'>
      <h5 style={{ marginTop: '130px' }}><b>What's on your mind?</b></h5>
      <section className="wrapper">

        <div className="item">
          <img className='mt-5 mb-2' src="https://live.staticflickr.com/4867/46113100641_be2ee2249f_z.jpg" alt="" />
          <h6>Pothichoru</h6>
        </div>
        <div className="item">
          <img className='ms-4 mt-5 mb-2' src="https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Shawarma-750x750.jpg" alt="" />
          <h6>Shawarma</h6>
        </div>
        <div className="item">
          <img className='ms-4 mt-5 mb-2' src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg" alt="" />
          <h6>Biryani</h6>
        </div>
        <div className="item">
          <img className='ms-4 mt-5 mb-2' src="https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg" alt="" />
          <h6>Pizza</h6>
        </div>
        <div className="item">
          <img className='ms-4 mt-5 mb-2' src="https://www.elmundoeats.com/wp-content/uploads/2024/02/Crispy-spring-rolls.jpg" alt="" />
          <h6>Rolls</h6>
        </div>
        <div className="item">
          <img className='ms-4 mt-5 mb-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2ExoO9ArN3mJ13eP-4AoLHhmgYrDGXCL4Q&usqp=CAU" alt="" />
          <h6>Parotta</h6>
        </div>

        <div className="item">
          <img className='ms-4 mt-5 mb-2' src="https://www.rhubarbarians.com/wp-content/uploads/2020/01/red-wine-milkshake-featured.jpg" alt="" />
          <h6>Shakes</h6>
        </div>
        <div className="item">
          <img className='ms-4 mt-5 mb-2' src="https://images.squarespace-cdn.com/content/v1/62a6cc080a8c382ddaefb06a/1658408750536-Q2IWUH7BXB1YW3KIP488/Chilli-Garlic-Noodles-Veg.jpeg" alt="" />
          <h6>Chinese</h6>
        </div>
        <div className="item">
          <img className='ms-4 mt-5 mb-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7swcuMrn6Sj0a6fJGIZ1QxoKhzxYye5M2A&usqp=CAU" alt="" />
          <h6>Cakes</h6>
        </div>
      </section>
      <hr style={{ marginTop: '60px' }} />

      <h5 style={{ marginTop: '30px' }}>Top restaurant chains in Kochi</h5>

      <section className='resto'>
        <div className='row' id='kochi'>
          <Card className='card' style={{ maxWidth: '280px', border: 'none' }}>
            <Card.Img className='restoimage' variant="top" src="https://content.jdmagicbox.com/comp/mumbai/d2/022pxx22.xx22.120204113036.t5d2/catalogue/mcdonald-s-kurla-west-mumbai-fast-food-ej2kvqhjaz.jpg" />
            <Card.Body>
              <Card.Title><h6>McDonald's</h6></Card.Title>
              <h6><FontAwesomeIcon icon={faCertificate} style={{ color: "#2aa246" }} className='me-2' />4.5 . 40-45 mins</h6>
              <Card.Text>
                Burgers,Beverages<br />
                MG Road
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='card' style={{ maxWidth: '280px', marginLeft: '20px', border: 'none' }}>
            <Card.Img className='restoimage' variant="top" src="https://img4.nbstatic.in/tr:w-500/64216db122b317000c6fa2bd.jpg" />
            <Card.Body>
              <Card.Title><h6>BBQ Nation</h6></Card.Title>
              <h6><FontAwesomeIcon icon={faCertificate} style={{ color: "#2aa246", }} className='me-2' />4.3 . 40-45 mins</h6>
              <Card.Text>
                North indian,Barbecue, Biriyani <br />
                Kaloor
              </Card.Text>
            </Card.Body>
          </Card>


          <Card className='card' style={{ maxWidth: '280px', marginLeft: '20px', border: 'none' }}>
            <Card.Img className='restoimage' variant="top" src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/6/w/j/p62-1493963700590c13b4e9f66.jpg?tr=tr:n-large" />
            <Card.Body>
              <Card.Title><h6>Baskin Robbins</h6></Card.Title>
              <h6><FontAwesomeIcon icon={faCertificate} style={{ color: "#2aa246", }} className='me-2' />4.7 . 40-45 mins</h6>
              <Card.Text>
              Ice Cream Desserts <br />
              thevara
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='card' style={{ maxWidth: '280px', marginLeft: '20px', border: 'none' }}>
            <Card.Img className='restoimage' variant="top" src="https://pbs.twimg.com/media/GCuqa0KbwAACujx.jpg" />
            <Card.Body>
              <Card.Title><h6>Pizza Hut</h6></Card.Title>
              <h6><FontAwesomeIcon icon={faCertificate} style={{ color: "#2aa246", }} className='me-2' />4.3 . 40-45 mins</h6>
              <Card.Text>
                Pizzas <br />
                Fort Kochi
              </Card.Text>
            </Card.Body>
          </Card>

          
          <Card className='card' style={{ maxWidth: '280px', marginLeft: '20px', border: 'none' }}>
            <Card.Img className='restoimage' variant="top" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xs/CAT86.jpg?ver=41.83" />
            <Card.Body>
              <Card.Title><h6>KFC</h6></Card.Title>
              <h6><FontAwesomeIcon icon={faCertificate} style={{ color: "#2aa246", }} className='me-2' />4.8 . 40-45 mins</h6>
              <Card.Text>
                Burgers,American,Snacks <br />
                Thoppumpady
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

      </section>

      <hr />

      <h5>Restaurants with online food delivery in Kochi</h5>

      <div className='navbars'>

        <nav className={`bg-white pt-5 px-3 ${isFixed && 'fixed-top'}`} style={{ overflowX: 'auto', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '0px', padding: 0 }}>
            <li className='border' style={{ borderRadius: '50px' }}>Filter<FontAwesomeIcon icon={faSliders} className='me-2 ms-2' /></li>
            <li className='border ms-2' style={{ borderRadius: '50px' }}>Sort By<FontAwesomeIcon icon={faAngleDown} className='me-2 ms-2' /></li>
            <li className='border ms-2' style={{ borderRadius: '50px' }}>Fast Delivery</li>
            <li className='border ms-2' style={{ borderRadius: '50px' }}>New on Swiggy</li>
            <li className='border ms-2' style={{ borderRadius: '50px' }}>Rating 4.0+</li>
            <li className='border ms-2' style={{ borderRadius: '50px' }}>Pure Veg</li>
            <li className='border ms-2' style={{ borderRadius: '50px' }}>Offers</li>
            <li className='border ms-2' style={{ borderRadius: '50px' }}>Rs.300-Rs.600</li>
            <li className='border ms-2' style={{ borderRadius: '50px' }}>Less than Rs.300</li>
            {isFixed && (
              <form style={{ listStyle: 'none', display: 'flex', gap: '0px', padding: 0, marginLeft: 'auto' }}>
                <input className='border ms-2' style={{ borderRadius: '10px' }} type="text" placeholder='Search for restaurent ' />
              </form>
            )}
          </ul>

        </nav>
      </div>

      <section className='online'>

        <div className='container'>
          <div className="row mt-3" id='car'>
  
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <Card id='food'>
                <Card.Img className='foodimg' variant="top" src="https://b.zmtcdn.com/data/dish_photos/912/5600c15850e7c3b3f22b2d9363659912.jpg" />
                <Card.Body>
                  <h6>Chicking</h6>
                  <h6><FontAwesomeIcon icon={faCertificate} style={{ color: "#2aa246" }} className='me-2' />4.5 . 40-45 mins</h6>
                  <Card.Text>
                    Snacks,Grill,Fast Food <br />
                    Fort Kochi
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
  
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3" >
              <Card id='food'>
                <Card.Img className='foodimg' variant="top" src="https://cdn.trendhunterstatic.com/thumbs/490/pizza-hut-melts.jpeg?auto=webp" />
                <Card.Body>
                  <h6>Pizza Hut</h6>
                  <h6><FontAwesomeIcon icon={faCertificate} style={{ color: "#2aa246", }} className='me-2' />4.8 . 40-45 mins</h6>
                  <Card.Text>
                    Pizza's <br />
                    Fort Kochi
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
  
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <Card id='food'>
                <Card.Img className='foodimg' variant="top" src="https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/beyondmenu/hero/2.jpg?tr=w-3840,q-50" />
                <Card.Body>
                  <h6>Chinese Wok</h6>
                  <h6><FontAwesomeIcon icon={faCertificate} style={{ color: "#2aa246", }} className='me-2' />4.3 . 40-45 mins</h6>
                  <Card.Text>
                    Chinese,Asian,Tibetan <br />
                    MG Road
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
  
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <Card id='food'>
                <Card.Img className='foodimg' variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ijyrmbaqufizkn50coyh" />
                <Card.Body>
                  <h6>Arabian Dreams</h6>
                  <h6><FontAwesomeIcon icon={faCertificate} style={{ color: "#2aa246", }} className='me-2' />4.9 . 40-45 mins</h6>
                  <Card.Text>
                    Arabian,Kerala <br />
                    kadavanthra
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
  
          </div>
          <br />
  
          <div className="row" id='car'>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <Card id='food'>
                <Card.Img className='foodimg' variant="top" src="https://images.slurrp.com/prodarticles/b3rhx2ap4vf.webp" />
                <Card.Body>
                  <h6>Jeff Biryani</h6>
                  <h6><FontAwesomeIcon icon={faCertificate} style={{ color: "#2aa246", }} className='me-2' />4.8 . 40-45 mins</h6>                
                  <Card.Text>
                    Biryani,Desserts,Jucies <br />
                    Edappilly
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <Card id='food'>
                <Card.Img className='foodimg' variant="top" src="https://www.cakehut.in/image/cache/catalog/2021%20cake%20photos/Red%20Velvet-1835x1643.jpg.webp" />
                <Card.Body>
                  <h6>Cake Hut</h6>
                  <h6><FontAwesomeIcon icon={faCertificate} style={{ color: "#2aa246" }} className='me-2' />4.5 . 40-45 mins</h6>
                  <Card.Text>
                    Bakery <br />
                    Chullickal
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <Card id='food'>
                <Card.Img className='foodimg' variant="top" src="https://tb-static.uber.com/prod/image-proc/processed_images/f57fb461cfafbbb63b57e8a50c81c5d0/c9252e6c6cd289c588c3381bc77b1dfc.jpeg" />
                <Card.Body>
                  <h6>KFC</h6>
                  <h6><FontAwesomeIcon icon={faCertificate} style={{ color: "#2aa246", }} className='me-2' />4.4 . 40-45 mins</h6>
                  <Card.Text>
                  Burgers,American,Snacks <br />
                  Thoppumpady
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <Card id='food'>
                <Card.Img className='foodimg' variant="top" src="https://www.nestleprofessional.in/sites/default/files/2022-05/Chicken-Momos.jpg" />
                <Card.Body>
                  <h6>Wow Momo</h6>
                  <h6><FontAwesomeIcon icon={faCertificate} style={{ color: "#2aa246" }} className='me-2' />4.7 . 40-45 mins</h6>
                  <Card.Text>
                    Tibetan,Asian,Chinese <br />
                    Thoppumpady
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
  
          <div className="row mt-3" id='car'>
  
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <Card id='food'>
                <Card.Img className='foodimg' variant="top" src="https://chefmeathome.com/cdn/shop/articles/Freak_Shake_Blog_Image_1200x.jpg?v=1633880329" />
                <Card.Body>
                  <h6>Drunken Panda</h6>
                  <h6><FontAwesomeIcon icon={faCertificate} style={{ color: "#2aa246", }} className='me-2' />4.2 . 40-45 mins</h6>
                  <Card.Text>
                  Beverages,Fast Food <br />
                   Mattanchery
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
  
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <Card id='food'>
                <Card.Img className='foodimg' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR2kJ0RNOz54DzbKLd-2O3JvxkMzTHWyTjrFPs5ZoqdQ&s" />
                <Card.Body>
                  <h6>Hotel Saravana Bhavan</h6>
                  <h6><FontAwesomeIcon icon={faCertificate} style={{ color: "#2aa246", }} className='me-2' />4.3 . 40-45 mins</h6>
                  <Card.Text>
                   Pure Veg,South Indian <br />
                   Kacheripadi
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
  
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <Card id='food'>
                <Card.Img className='foodimg' variant="top" src="https://b.zmtcdn.com/data/pictures/chains/3/95463/a806cca22bb4d73d7d7a9014cb653f09.jpg?fit=around|960:500&crop=960:500;*,*" />
                <Card.Body>
                  <h6>Baskin Robins</h6>
                  <h6><FontAwesomeIcon icon={faCertificate} style={{ color: "#2aa246" }} className='me-2' />4.5 . 40-45 mins</h6>
                  <Card.Text>
                    Ice Cream <br />
                    Thevara
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
  
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <Card id='food'>
                <Card.Img className='foodimg' variant="top" src="https://www.yummytummyaarthi.com/wp-content/uploads/2022/07/chicken-shawarma-step-by-step-18.jpeg" />
                <Card.Body>
                  <h6>Al Taza</h6>
                  <h6><FontAwesomeIcon icon={faCertificate} style={{ color: "#2aa246", }} className='me-2' />4.8 . 40-45 mins</h6>
                  <Card.Text>
                    Shawarma <br />
                    Fort Kochi
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
  
          </div>
          <br />
        </div>

      </section>
      <hr />
      <h5 style={{ marginLeft: '10px' }}>Best Places to Eat Across Cities</h5>

      <section>
        <div className='places d-flex mt-4 mb-3'>
          <div className='border'>Best Restaurants in...</div>
          <div className='border ms-4'>Best Restaurants in...</div>
          <div className='border ms-4'>Best Restaurants in...</div>
          <div className='border ms-4'>Best Restaurants in...</div>
        </div>
        <div className='places d-flex mb-3'>
          <div className='border'>Best Restaurants in...</div>
          <div className='border ms-4'>Best Restaurants in...</div>
          <div className='border ms-4'>Best Restaurants in...</div>
          <div className='border ms-4'>Best Restaurants in...</div>
        </div>
        <div className='places d-flex'>
          <div className='border'>Best Restaurants in...</div>
          <div className='border ms-4'>Best Restaurants in...</div>
          <div className='border ms-4'>Best Restaurants in...</div>
          <div className='border ms-4 px-5'>Show More<FontAwesomeIcon icon={faAngleDown} className='me-2 ms-2' /></div>
        </div>

        <h5 style={{ marginTop: '100px', marginLeft: '10px' }}>Best Cuisines Near Me</h5>

        <div className='places d-flex mt-4 mb-3'>
          <div className='border'>Best Korean Restau...</div>
          <div className='border ms-4'>Best Korean Restau...</div>
          <div className='border ms-4'>Best Korean Restau...</div>
          <div className='border ms-4'>Best Korean Restau...</div>
        </div>
        <div className='places d-flex mb-3'>
          <div className='border'>Best Korean Restau...</div>
          <div className='border ms-4'>Best Korean Restau...</div>
          <div className='border ms-4'>Best Korean Restau...</div>
          <div className='border ms-4'>Best Restaurants in...</div>
        </div>
        <div className='places d-flex'>
          <div className='border'>Best Korean Restau...</div>
          <div className='border ms-4'>Best Korean Restau...</div>
          <div className='border ms-4'>Best Korean Restau...</div>
          <div className='border ms-4 px-5'>Show More<FontAwesomeIcon icon={faAngleDown} className='me-2 ms-1' /></div>
        </div>

        <h5 style={{ marginTop: '100px', marginLeft: '10px' }}>Explore Every Restaurants Near Me</h5>

        <div className='places d-flex justify-content-center align-items-center mt-4 mb-3' style={{ marginLeft: '-15px' }}>
          <div className='top border'>Explore Restaurants Near Me</div>
          <div className='top border ms-5'>Explore Top Rated Restaurants Near Me</div>
        </div>

      </section>

      <div className='apps'>
        <div className='row justify-content-center align-items-center flex-nowrap ' >
          <div className='col-6' style={{ marginBottom: '-50px', marginTop: '-50px' }}>
            <h4>For better experience,download the swiggy app now</h4>
          </div>
          <div className='col-6 flex-nowrap'>
            <img className='' src="https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png" alt="" width={'200px'} height={'60px'} />
            <img className='rounded ms-5' src="https://www.freepnglogos.com/uploads/app-store-logo-png/available-the-app-store-badge-vector-11.png" alt="" width={'200px'} height={'auto'} />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home;
