import React from 'react'
import PropTypes from 'prop-types'

const Result = ({ value = "0" }) => (
    <div className="result">
        {value}
    </div>
)

Result.propTypes = {
    value: PropTypes.string.isRequired
}

export default Result