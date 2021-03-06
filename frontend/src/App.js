import React, { Suspense, useEffect } from "react"
import ScrollToTop from "helpers/scroll-top"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ToastProvider } from "react-toast-notifications"
import { multilanguage, loadLanguages } from "redux-multilanguage"
import { connect } from "react-redux"
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic"
import { MainPage, NotFoundPage } from "__common__/index"
import { MyAccount, Checkout, SuccessPage, MyAccountDetail } from "__payment__/index"
import { LoginRegisterPage, AdminPage, UserListPage } from "__user__/index"
import { ProductAddPage, ProductListPage, CategoryLivingPage, CategoryKitchenPage, CategoryBathroomPage, CategoryStationaryPage, ProductDetailPage, ProductEditPage, CartPage, WishlistPage, ProductSearchResultPage } from "__product__/index"
import { BlogWritePage, BlogListPage, BlogDetailPage, BlogUpdatePage, BlogCommentUpdatePage } from "__board__/index"

const App = props => {
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          en: require("__common__/modules/english.json")
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
                <Route exact path={process.env.PUBLIC_URL + "/"} component={MainPage} />

                {/* Homepages */}
                <Route path={process.env.PUBLIC_URL + "/main"} component={MainPage} />

                {/* Shop pages */}
                <Route path={process.env.PUBLIC_URL + "/product/all"} component={ProductListPage} />
                <Route
                  path={process.env.PUBLIC_URL + "/product/category-living"}
                  component={CategoryLivingPage}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/product/category-kitchen"}
                  component={CategoryKitchenPage}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/product/category-bathroom"}
                  component={CategoryBathroomPage}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/product/category-stationary"}
                  component={CategoryStationaryPage}
                />

                {/* Shop product pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/product-detail/:id"}
                  render={routeProps => (
                    <ProductDetailPage {...routeProps} key={routeProps.match.params.id} />
                  )}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/product-detail/:id"}
                  component={ProductDetailPage}
                />
                <Route path={process.env.PUBLIC_URL + "/product-add"} component={ProductAddPage} />
                <Route
                  path={process.env.PUBLIC_URL + "/product-edit/:id"}
                  render={routeProps => (
                    <ProductEditPage {...routeProps} key={routeProps.match.params.id} />
                  )}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/product-edit/:id"}
                  component={ProductEditPage}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/product/search/:id"}
                  render={routeProps => (
                    <ProductSearchResultPage {...routeProps} key={routeProps.match.params.id} />
                  )}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/product/search/:id"}
                  component={ProductSearchResultPage}
                />

                {/* Blog pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/blog-detail/:id"}
                  render={routeProps => (
                    <BlogDetailPage {...routeProps} key={routeProps.match.params.id} />
                  )}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-detail/:id"}
                  component={BlogDetailPage}
                />
                <Route path={process.env.PUBLIC_URL + "/blog-all"} component={BlogListPage} />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-update/:id"}
                  render={routeProps => (
                    <BlogUpdatePage {...routeProps} key={routeProps.match.params.id} />
                  )}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/blog-update/:id"}
                  component={BlogUpdatePage}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/comment-update/:id"}
                  render={routeProps => (
                    <BlogCommentUpdatePage {...routeProps} key={routeProps.match.params.id} />
                  )}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/comment-update/:id"}
                  component={BlogCommentUpdatePage}
                />
                <Route path={process.env.PUBLIC_URL + "/blog-write"} component={BlogWritePage} />

                {/* Other pages */}
                <Route path={process.env.PUBLIC_URL + "/cart"} component={CartPage} />
                <Route path={process.env.PUBLIC_URL + "/wishlist"} component={WishlistPage} />
                <Route path={process.env.PUBLIC_URL + "/checkout"} component={Checkout} />
                <Route path={process.env.PUBLIC_URL + "/admin"} component={AdminPage} />
                <Route path={process.env.PUBLIC_URL + "/user-list"} component={UserListPage} />
                <Route
                  path={process.env.PUBLIC_URL + "/login-register"}
                  component={LoginRegisterPage}
                />
                <Route path={process.env.PUBLIC_URL + "/my-account"} component={MyAccount} />
                <Route
                  path={process.env.PUBLIC_URL + "/my-account-detail/:id"}
                  component={MyAccountDetail}
                />
                <Route path={process.env.PUBLIC_URL + "/pay-success"} component={SuccessPage} />
                <Route path={process.env.PUBLIC_URL + "/not-found"} component={NotFoundPage} />

                <Route exact component={NotFoundPage} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  )
}

export default connect()(multilanguage(App))
