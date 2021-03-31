import PropTypes from "prop-types"
import React from "react"
import { multilanguage } from "redux-multilanguage"
import { connect } from "react-redux"
import { setCurrency } from "../../redux/actions/currencyActions"

const HeaderTop = () => {
  return (
    <></>
  )
}

HeaderTop.propTypes = {
  borderStyle: PropTypes.string,
  setCurrency: PropTypes.func,
  currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func
}

const mapStateToProps = state => {
  return {
    currency: state.currencyData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrency: currencyName => {
      dispatch(setCurrency(currencyName))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(multilanguage(HeaderTop))
