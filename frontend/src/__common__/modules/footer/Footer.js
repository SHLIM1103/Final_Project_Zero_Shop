import React, { useState, useEffect } from "react"
import { animateScroll } from "react-scroll"
import { FooterCopyright } from "__common__/index"

const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu
}) => {
  const [scroll, setScroll] = useState(0)
  const [top, setTop] = useState(0)

  useEffect(() => {
    setTop(100)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    animateScroll.scrollToTop()
  }

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  return (
    <footer
      className={`footer-area ${
        backgroundColorClass ? backgroundColorClass : ""
      } ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${extraFooterClass ? extraFooterClass : ""} ${
        spaceLeftClass ? spaceLeftClass : ""
      } ${spaceRightClass ? spaceRightClass : ""}`}
    >
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="row">
          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            {/* footer copyright */}
            <FooterCopyright />
          </div>
          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-list">
                <ul>
                  <li>
                    Jung Junwoo
                  </li>
                  <li>
                    Chae Hanna
                  </li>
                  <li>
                    Lim Sohyun
                  </li>
                  <li>
                    Lee Doyun
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-95"
                  : "footer-widget mb-30 ml-50"
              }`}
            >
              <div className="footer-list-01">
                <ul>
                  <li>
                    junwoojung@gmail.com
                  </li>
                  <li>
                    hannachae@naver.com
                  </li>
                  <li>
                    gusl5525@gmail.com
                  </li>
                  <li>
                    doyun@gamil.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-4" : "col-lg-2 col-sm-6"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-145"
                  : "footer-widget mb-30 ml-75"
              }`}
            >
              <div className="footer-list-02">
                <ul>
                  <li>
                  <a href="//github.com/jjwjun2">https://github.com/jjwjun2</a>
                  </li>
                  <li>
                  <a href="//github.com/HannaChae">https://github.com/HannaChae</a>
                  </li>
                  <li>
                    <a href="//github.com/SHLIM1103">https://github.com/SHLIM1103</a>
                  </li>
                  <li>
                  <a href="//github.com/leedoyun98">https://github.com/leedoyun98</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <i className="fa fa-angle-double-up"></i>
      </button>
    </footer>
  )
}

export default FooterOne