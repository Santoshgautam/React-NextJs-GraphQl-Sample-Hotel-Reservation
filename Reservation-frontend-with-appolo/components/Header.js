import Link from 'next/link'



export default function HotelList () {  
    return(
    <div className="container">
        <div className="navbar1">
        <img src="https://image.ibb.co/ihpr00/logo.png" alt="logo" border="0" />
       
        <Link className="navLink" href="/">
          <a className="navText1">     Available Hotels     </a>
        </Link> 

        <Link className="navLink" href="/booking">
          <a className="navText2" >     Book  Hotel   </a>
        </Link>
        <Link className="navLink" href="/reservation">
          <a className="navText3">     Your  Reservations   </a>
        </Link>
        </div>
        <style jsx>{`
                    .navbar1 {
                      border: 1px solid black;
                      padding:10px;
                      font-size: 20px;
                      background-color:#49E4CF;
                      color:yellow;
                      border-radius:15px;
                      margin-left:20px;
                      margin-right: 20;
                    },
                    .navText1{
                      color:yellow;
                      margin-left: 20;

                    }.navText2{
                      color:green;
                      margin-left: 20;

                    }.navText3{
                      color:red;
                      margin-left: 20;

                    }
                    .navLink{
                      margin-left:15px;
                      margin-right: 20;
                    }
                    
                  `}</style>
    </div>)
}


