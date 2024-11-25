import './App.css';
import {
  BrowserRouter, Link, Route, Routes,
} from "react-router-dom";
import useDarkMode from "./global/logic/useDarkMode";
import {useState} from "react";
import logoHeader from "./img/logo.svg";
import image_home from "./img/logo-background.jpg";
import portrait from "./img/portrait.jpg";
import {
  aboutPageTextPFour, aboutPageTextPOne, aboutPageTextPThree, aboutPageTextPTow, headerText, instagramJSX, instagramURL, logoProductItem, moonFill, productTitleButtonShare, sunFill
} from "./global/logic/Constant";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {artworkProduct, graphicDesignProduct, printProduct} from "./global/model/ListProductModel";

function App() {
  const year = 2024;

  const [theme, toggleTheme] = useDarkMode();

  const [nav,setNav]=useState(false);


  const setDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }

  const setLightMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }

  const selectedTheme = localStorage.getItem('theme');
  if (selectedTheme === 'dark') {
    setDarkMode();
  } else {
    setLightMode();
  }
  return (
      <BrowserRouter
          className="background-pages">
        <header className={"header_component"}>
          <Link to='/' className={"header_logo_and_text"}>
            <img src={logoHeader} className={"header_navbar_logo"} alt='logo'/>
            {headerText}
          </Link>
          <ul className={nav?["header_navbar_menu_item","active"].join(" "):"header_navbar_menu_item"}>
            <li onClick={()=>setNav(!nav)}><Link to={`/`} className={"header_item header_item_home"}>Home</Link></li>
            <li onClick={()=>setNav(!nav)}><Link to={`/artwork`} className={"header_item"}>Artwork</Link></li>
            <li onClick={()=>setNav(!nav)}><Link to={`/graphic-design`} className={"header_item"}>GraphicDesign</Link></li>
            <li onClick={()=>setNav(!nav)}><Link to={`/print`} className={"header_item"}>Print</Link></li>
            <li onClick={()=>setNav(!nav)}><Link to={`/about`} className={"header_item"}>About</Link></li>
            <div className={"header_navbar_icon_button"}>
              <Link to={instagramURL.toString()} className={"header_icon_button_item"}
                    target={'_blank'}>{instagramJSX}</Link>
              <Link className={"header_icon_button_item"}
                    onClick={()=>{
                      toggleTheme();
                      setNav(!nav);
                    }}>{theme === 'light' ? moonFill : sunFill}</Link>
            </div>
          </ul>
          <div onClick={() => setNav(!nav)} className={"mobile_btn"}>
            {nav ? <AiOutlineClose size={25} style={{marginTop: '6px'}}/> :
                <AiOutlineMenu size={25} style={{marginTop: '6px'}}/>}
          </div>
        </header>
        <Routes>
          <Route path="/" element={<div className={"main_container"}>
            <p className={"home_main_text"}>Hi
              There!</p>
            <div className={"image_background_homePage"}>
              <img className={"home_image_bg"}
                   src={image_home}
                   alt='home logo'/>
            </div>
          </div>}/>
          <Route path="/about" element={<div className={"about_container_main"}>
            <div className={"about_content_text"}>
              <hr className={"about_divider"}/>
              <p className={"about_text_paragraph aboutPageTextPOne"}>{aboutPageTextPOne.toString()}</p>
              <hr className={"about_divider"}/>
              <p className={"about_text_paragraph aboutPageTextPTow"}>{aboutPageTextPTow.toString()}</p>
              <hr className={"about_divider"}/>
              <p className={"about_text_paragraph aboutPageTextPThree"}>{aboutPageTextPThree.toString()}</p>
              <hr className={"about_divider"}/>
              <p className={"about_text_paragraph aboutPageTextPFour"}>{aboutPageTextPFour.toString()}</p>
              <hr className={"about_divider"}/>
            </div>
            <div className={"right_side_container"}>
              <img src={portrait} className={"about_image"} alt="avatar"/>
            </div>
          </div>}/>
          <Route path="/artwork" element={<div className={"artwork_page"}>
            <div className={"main_item_products_artwork_page"}>
              {artworkProduct.map((product) => (
                  <div className={"main_item_product"}>
                    <div className={"product_title"}>
                      <div className={"product_title_logo"}>
                        {logoProductItem}
                      </div>
                      <div className={"product_title_text"}>
                        <p className={"product_title_text_title"}>{product.title}</p>
                        <p className={"product_title_text_subtitle"}>{product.subTitle}</p>
                      </div>
                      <div className={"product_title_button_share"}>
                        {productTitleButtonShare}
                      </div>
                    </div>
                    <div className={"product_image_container"}>
                      <img className={"product_image"} src={product.productImage}
                           alt={product.id}/>
                    </div>
                    <div className={"product_description_container"}>
                      <p className={"product_description"}>
                        {product.description}
                      </p>
                    </div>
                  </div>))}
            </div>
          </div>}/>
          <Route path="/graphic-design" element={<div className={"graphic_design_page"}>
            <div className={"main_item_products_graphic_design_items"}>
              {graphicDesignProduct.map((product) => (
                  <div className={"main_item_product"}>
                    <div className={"product_title"}>
                      <div className={"product_title_logo"}>
                        {logoProductItem}
                      </div>
                      <div className={"product_title_text"}>
                        <p className={"product_title_text_title"}>{product.title}</p>
                        <p className={"product_title_text_subtitle"}>{product.subTitle}</p>
                      </div>
                      <div className={"product_title_button_share"}>
                        {productTitleButtonShare}
                      </div>
                    </div>
                    <div className={"product_image_container"}>
                      <img className={"product_image"} src={product.productImage}
                           alt={product.id}/>
                    </div>
                    <div className={"product_description_container"}>
                      <p className={"product_description"}>
                        {product.description}
                      </p>
                    </div>
                  </div>))}
            </div>
          </div>}/>
          <Route path="/print" element={<div className={"print_page"}>
            <div className={"main_item_products_print_item"}>
              {printProduct.map((product) => (
                  <div className={"main_item_product"}>
                    <div className={"product_title"}>
                      <div className={"product_title_logo"}>
                        {logoProductItem}
                      </div>
                      <div className={"product_title_text"}>
                        <p className={"product_title_text_title"}>{product.title}</p>
                        <p className={"product_title_text_subtitle"}>{product.subTitle}</p>
                      </div>
                      <div className={"product_title_button_share"}>
                        {productTitleButtonShare}
                      </div>
                    </div>
                    <div className={"product_image_container"}>
                      <img className={"product_image"} src={product.productImage}
                           alt={product.id}/>
                    </div>
                    <div className={"product_description_container"}>
                      <p className={"product_description"}>
                        {product.description}
                      </p>
                    </div>
                  </div>
              ))}
            </div>
          </div>}/>
        </Routes>
        <footer className={"footer_div"}>
          <p className={"main_footer_text"}>copyright &copy; <Link className={"footer_link"}
                                                                   to={'https://www.shahram-ghorbani.ir'}>ShahramGhorbani </Link>{year === new Date().getFullYear() ? year : `${year} - ${new Date().getFullYear()}`}
          </p>
        </footer>
      </BrowserRouter>
  );
}

export default App;
