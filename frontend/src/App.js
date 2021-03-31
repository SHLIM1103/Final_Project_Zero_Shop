import PropTypes from "prop-types"
import React, { useEffect, Suspense, lazy } from "react"
import ScrollToTop from "helpers/scroll-top"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ToastProvider } from "react-toast-notifications"
import { multilanguage, loadLanguages } from "redux-multilanguage"
import { connect } from "react-redux"
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic"

// home pages
const MainPage = lazy(() => import("_common_/pages/MainPage"))

// shop pages
const ProductListPage = lazy(() => import("_product_/pages/ProductListPage"))
const ProductDetailPage = lazy(() => import("_product_/pages/ProductDetailPage"))
const ProductAddPage = lazy(() => import("_product_/pages/ProductAddPage"))
const ProductEditPage = lazy(() => import("_product_/pages/ProductEditPage"))
const CartPage = lazy(() => import("_product_/pages/CartPage"))

// blog pages
const BlogDetailsStandard = lazy(() => import("_blog_/pages/BlogDetailsStandard"))
const BlogList = lazy(() => import("_blog_/pages/BlogList"))
const BlogUpdate = lazy(() => import("_blog_/pages/BlogUpdate"))
const BlogWrite = lazy(() => import("_blog_/pages/BlogWrite"))

// other pages
const About = lazy(() => import("pages/other/About"))
const Contact = lazy(() => import("pages/other/Contact"))
const MyAccount = lazy(() => import("_payment_/pages/MyAccount"))
const LoginRegister = lazy(() => import("pages/other/LoginRegister"))

const Wishlist = lazy(() => import("pages/other/Wishlist"))
const Compare = lazy(() => import("pages/other/Compare"))
const Checkout = lazy(() => import("_payment_/pages/Checkout"))

const NotFound = lazy(() => import("pages/other/NotFound"))

const App = (props) => {

  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          en: require("translations/english.json"),
          fn: require("translations/french.json"),
          de: require("translations/germany.json")
        }
      })
    )
  })

  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
              <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
                  component={MainPage}
                />
                {/* Homepages */}
                <Route
                  path={process.env.PUBLIC_URL + "/main"}
                  component={MainPage}
                />

                {/* Shop pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/product-detail/:id"}
                  render={(routeProps) => (
                    <ProductDetailPage {...routeProps} key={routeProps.match.params.prdNo} />
                    )}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/product-all"}
                  component={ProductListPage}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/cart"}
                  component={CartPage}
                /> 
                <Route
                  path={process.env.PUBLIC_URL + "/product-detail/:id"}
                  component={ProductDetailPage}
                />
                 <Route
                  path={process.env.PUBLIC_URL + "/product-add"}
                  component={ProductAddPage}
                />
                 <Route
                  path={process.env.PUBLIC_URL + "/product-edit/:id"}
                  component={ProductEditPage}
                />

                {/* Blog pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/blog-update"}
                  component={BlogUpdate}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-details-standard"}
                  component={BlogDetailsStandard}
                />
                  <Route
                  path={process.env.PUBLIC_URL + "/blog-write"}
                  component={BlogWrite}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-list"}
                  component={BlogList}
                />
 
                {/* Other pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/about"}
                  component={About}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/contact"}
                  component={Contact}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/my-account"}
                  component={MyAccount}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/login-register"}
                  component={LoginRegister}
                />

                
                <Route
                  path={process.env.PUBLIC_URL + "/wishlist"}
                  component={Wishlist}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/compare"}
                  component={Compare}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/checkout"}
                  component={Checkout}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/not-found"}
                  component={NotFound}
                />

                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  )
}

App.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(multilanguage(App))
