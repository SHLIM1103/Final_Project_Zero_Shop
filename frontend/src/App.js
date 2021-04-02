import React, { Suspense, lazy } from "react"
import ScrollToTop from "__common__/modules/helpers/scroll-top"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ToastProvider } from "react-toast-notifications"
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic"
import { MainPage, NotFoundPage } from "__common__/index"
import { CheckoutPage } from "__payment__/index"
import { LoginRegisterPage, AdminPage, UserListPage } from "__user__/index"
import { ProductAddPage, ProductListPage, ProductDetailPage, ProductEditPage, CartPage, WishlistPage } from "__product__/index"
import { BlogWritePage, BlogListPage, BlogDetailPage, BlogUpdatePage } from "__board__/index"

const About = lazy(() => import("pages/other/About"))
const Contact = lazy(() => import("pages/other/Contact"))
const MyAccount = lazy(() => import("pages/other/MyAccount"))

const App = (props) => {

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

                {/* Homepage */}
                <Route
                  path={process.env.PUBLIC_URL + "/main"}
                  component={MainPage}
                />

                {/* Not Found page */}
                <Route
                  path={process.env.PUBLIC_URL + "/not-found"}
                  component={NotFoundPage}
                />
                <Route exact component={NotFoundPage} />
                
                {/* Checkout page */}
                <Route
                  path={process.env.PUBLIC_URL + "/checkout"}
                  component={CheckoutPage}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/my-account"}
                  component={MyAccount}
                />
                
                { /* User pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/login-register"}
                  component={LoginRegisterPage}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/user-admin"}
                  component={AdminPage}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/user-list"}
                  component={UserListPage}
                />

                {/* Shop page */}
                <Route
                  path={process.env.PUBLIC_URL + "/product-all"}
                  component={ProductListPage}
                />

                {/* product pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/product-detail/:id"}
                  render={(routeProps) => (
                    <ProductDetailPage {...routeProps} key={routeProps.match.params.prdNo} />
                    )}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/product-add"}
                  component={ProductAddPage}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/product-detail/:id"}
                  component={ProductDetailPage}
                />
                 <Route
                  path={process.env.PUBLIC_URL + "/product-edit/:id"}
                  component={ProductEditPage}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/cart"}
                  component={CartPage}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/wishlist"}
                  component={WishlistPage}
                />

                 {/* Blog pages */}
                 <Route
                   path={process.env.PUBLIC_URL + "/blog-write"}
                   component={BlogWritePage}
                 />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-list"}
                  component={BlogListPage}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-detail"}
                  component={BlogDetailPage}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-update"}
                  component={BlogUpdatePage}
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
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  )
}

export default App