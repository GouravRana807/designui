import "./App.css";
// import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
function App() {
  return (
    <>
      <div className="App">
      <div className="bg-warning ">
        <div className="container pt-4">
          <div className="d-flex justify-content-between ">
            <div className="d-flex ">
            <div  >
              <img className="iop" src="../img/burger.png" alt="" width={35} height={35} />
            </div>
            <div>
              <p className="text-xl-start textsm font-weight-bold fontw ml-4">BURGER HOUSE</p>
            </div>
            </div>
            <div >
              <div className="d-flex justify-content-center  ">
                <img
                  className="m-2"
                  src="../img/burger.png"
                  alt=""
                  width={25}
                  height={25}
                />
                <p className="m-2 fontw">Express Delivery +123456789</p>
              </div>
              <div>
                <div className=" d-flex ">

         <a  href='/' className='m-2 text-dark fontw'>Home</a>
          <a href='/' className='m-2 text-dark fontw'>MENU</a>
          <a href='/' className='m-2 text-dark fontw'>OUR STORY</a>
          <a href='/' className='m-2 text-dark fontw'>CONTACT US</a>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
          
            <div className="d-flex flex-column   align-items-start">
           <div>
            <p className=" border border-dark p-1 fontw2 textsm1">IT IS GOOD TIME FOR THE GREAT TASTE OF BURGERS</p>
           </div>
           <div>
            <p className="textlg fontw1">BURGER</p>
           </div>
           <div>
            <p className="display-6 fontw1">WEEK</p>
           </div>
            </div>

            <div>
<img src="../img/Burger (2).png" alt=""  width={550}/>
            </div>

          </div>
        </div>
      </div>


      {/* another section */}
      <div className="d-flex justify-content-around align-items-center p-5 med" >
        <div>
          <div>
            <img src="../img/img1.jpg" alt="" width={720}  />
          </div>
        </div>
        <div className="">
          <div className="m-3  " >
          <img className="imgsize" src="../img/img2.jpg" alt="" width={700} />
          </div>
          <div className="m-3 ">
          <img className="imgsize" src="../img/img3.jpg" alt="" width={700} />
          </div>
        </div>
      </div>


      {/* another section */}


      <div className="flex justify-content-around align-content-center flex-column">
        <div >
          <p className=" bg-warning text-dark d-sm-inline-block fontw1 textsm2 p-2 rounded">ALWAYS TASTY BURGER</p>
        </div>
        <div>
          <p className="textlg1 fontw1">CHOOSE & ENJOY</p>
        </div>
        <div className="flex  justify-content-center align-content-center p-6">
        <div >
          <p className="fontw  text-center m-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima et magni expedita in!L Lorem ipsum, dolor sit amet consectetur adipis animi cum amet veritatis quam sunt eos porro blanditiis reiciendis illum dolores magni odit, itaque omnis eligendi?</p>
        </div>
        </div>
      </div>

<div className="d-flex">
  <div className="flex flex-column m-2">
    <div>
      <img src="../img/Burger (2).png" alt="" width={340} />
    </div>
    <div>
      <p className="textsm fontw">lOREM ISPUM DOLO</p>
    </div>
    <div>
      <p className="textsm12">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum at.
      </p> 
    </div>
    <div>
      <button type="button" class="btn btn-danger ">ORDER NOW</button>

    </div>
  </div>
  <div className="m-2 ">
  <div >
      <img  src="../img/Burger (2).png" alt="" width={340} />
    </div>
    <div>
      <p className="textsm fontw">lOREM ISPUM DOLO</p>
    </div>
    <div>
      <p className="textsm12">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum at.
      </p> 
    </div>
    <div>
      <button type="button" class="btn btn-danger ">ORDER NOW</button>

    </div>
  </div>
  <div className="m-2">
  <div>
      <img src="../img/Burger (2).png" alt="" width={340} />
    </div>
    <div>
      <p className="textsm fontw">lOREM ISPUM DOLO</p>
    </div>
    <div>
      <p className="textsm12">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum at.
      </p> 
    </div>
    <div>
    <button type="button" class="btn btn-danger ">ORDER NOW</button>
  

    </div>
  </div>
</div>




{/* another section */}
<div className="d-flex justify-content-evenly  mt-5">
  <div className="d-flex justify-content-between  shadow p-3 mb-5 bg-white rounded mt-5">
    {/* <div className="ik"> */}
    <div className="d-flex flex-column justify-content-start ">
    <div>
      <p className="text-start fontw1 textsm2">DISCOVER</p>
    </div>
    <div>
      <p className="text-start textlg1 fontw1 ">UPCOMING EVENTS</p>
    </div>
    <div>
      <p className=" width lead text-justify text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsum consectetur voluptas labore, doloremque minus corporis non assumenda blanditiis totam eius nemo ducimus consequatur rerum tempora, adipisci deserunt ut. Alias voluptates saepe harum?</p>
    </div>
      <div className="d-flex mt-5">
        <div className="rom bg-warning m-1"></div>
        <div className="bg-secondary rom m-1" ></div>
        <div className="bg-secondary rom m-1" ></div>
      </div>
    </div>
    <div>
      <img src="../img/img1.jpg" alt="" width={600} />
    </div>
  </div>
</div>



{/* another section */}

<div className="mb-5">
  <div className="d-flex justify-content-center align-content-center flex-column mb-4 ">
    <p className="fontw2 fontw1 textsm2">RESERVATION</p>
    <p className="textlg1 fontw1">BOOK YOUR TABLE</p>
  </div>

  <div className="d-flex justify-content-center">
  <div className="d-flex flex-column">
    <input className="m-2 inputw"  type="text" name="Name" placeholder="NAME" />
    <input className="m-2 inputw" type="text" name="DATE" placeholder="DATE" />
    <input  className="m-2" type="text" name="PEOPLE" placeholder="PEOPLE" />
  </div>
<div className="d-flex flex-column">
<input className="m-2 inputw" type="text" name="EMAIL" placeholder="EMAIL"/>
<input className="m-2 inputw" type="text" name="TIME" placeholder="TIME" />
<button type="button" className="btn btn-danger m-2 inputw">FIND A TABLE</button>

</div>
  </div>
</div>





{/* another section */}
<div>
  <div className="d-flex justify-content-around align-content-around bg-secondary bgi text-white"  >
  {/* <div className="d-flex justify-content-around align-content-around bg-secondary bg-image p-5 text-center shadow-1-strong"  style={{backgroundImage: url('')}}> */}
  {/* <div className="d-flex justify-content-center align-content-center "> */}
    <div className="d-flex flex-column m-5">
      <div className=" d-flex align-items-center">
      <div className="mb-2">
        <img src="./img/Burger (2).png" width={70} alt="" />
      </div>
      <div>
        <p className="text-start Display 1 fontw" style={{fontSize:"2.5rem"}}>BURGER HOUSE</p>
      </div>
      </div>
      <div>
        <p className= "text-justify text-start fontw" style={{width: "26rem"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex totam dolorum soluta quidem quas magnam, possimus placeat, sapiente obcaecati cupiditate aliquid architecto consequatur neque quia recusandae. Obcaecati corporis repudiandae recusandae?</p>
      </div>
      <div>
        <p className="text-start fontw2">
          COMPANY NAME 2020 ALL RIGHTS RESERVED
        </p>
      </div>
    </div>



    <div className="d-flex m-5 ">
      <div className="d-flex flex-column justify-content-center align-content-center">
      <div>
        <div className="d-flex ">
          <i class="bi bi-geo-alt"></i>
          <p className="mx-2">MAIN ROAD, BUILDING NAME, COUNTRY</p>
        </div>
        <div className="d-flex">
        <i class="bi bi-chat-left-text-fill"></i>
        <p className="mx-2">INFO@COMPANYNAMR.COM</p>
        </div>
        </div>

        <div className="d-flex mt-5">
        <div className="m-1">
        <i  class="bi bi-instagram"></i>
        </div>
        <div className="m-1">
        <i  class="bi bi-facebook"></i>
        </div>
        <div className="m-1">
        <i  class="bi bi-twitter"></i>
        </div>
        <div className="m-1">
        <i  class="bi bi-whatsapp"></i>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </>
  );
}

export default App;
