// TODO: lint
/* eslint-disable */
import _ from 'lodash'

const PropertyModelMixin = function(properties, data, options) {
  data = data || {}

  /**
   * Determine if a value is a 'key/value pair' object, rather than an 'array' object or a 'function' object
   * @param {Mixed} value - any value
   * @returns {boolean}
   */
  const isObject = (value) => {
    return _.isObject(value) && !_.isArray(value) && !_.isFunction(value)
  }

  if (!isObject(data)) {
    console.log('PropertyModelMixin: data must be an object')
  }

  /**
   * Get the data value from an options value
   * @param {Mixed} dataValue - the value from the data
   * @param {*} optionsValue - the options value
   * @returns {*}
   */
  const setObjectPropertyFromOptions = function(dataValue, optionsValue) {
    let listModel = false

    // If the options is an object, then check if it is a listModel
    if (isObject(optionsValue) && optionsValue.listModel) {
      optionsValue = optionsValue.listModel
      listModel = true
    }

    // If the data passed is an array then iterate through
    // each item and instantiate a new model based on the
    // passed through model constructor
    if (_.isArray(dataValue)) {
      if (!_.isFunction(optionsValue)) {
        console.log('PropertyModelMixin: option constructor for arrays must be a function')
      }

      // If the listModel is set then create a new instance of
      // the constructor passed through the option value
      if (listModel) {
        return new optionsValue(dataValue)
      }
      const arr = []
      _.each(dataValue, function(val) {
        arr.push(new optionsValue(val))
      })
      return arr
    }
    if (_.isObject(dataValue)) {
      // If the data value is an object and the option value evals to a function, then
      // create a new instance of the constructor passed through the option value
      if (!_.isFunction(optionsValue)) {
        console.log('PropertyModelMixin: option constructor for objects must be a function')
      }

      return new optionsValue(dataValue)
    }
    // If the option value is a function, then use the function to return a value
    if (_.isFunction(optionsValue)) {
      // If the data value is null or undefined, do not inflate the model
      if (_.isNull(dataValue) || _.isUndefined(dataValue)) {
        return dataValue
      }

      return optionsValue.call(this, dataValue)
    }
    // If the data is null or undefined, then return the option value
    if (_.isNull(dataValue) || _.isUndefined(dataValue)) {
      return optionsValue
    }

    return dataValue
  }

  const object = {}

  options = options || {}

  // Iterate through the properties, creating accessors and applying options
  _.each(
    properties,
    _.bind(function(property) {
      const camelCased = property.replace(/[_\-]([a-z])/g, (g) => {
        return g[1].toUpperCase()
      })

      this[camelCased] = function(val) {
        if (arguments.length > 0) {
          object[property] = val
          return this
        }
        return object[property]
      }

      if (_.has(data, property)) {
        object[property] = _.cloneDeep(data[property])
      } else {
        object[property] = null
      }

      if (!_.isUndefined(options[property])) {
        object[property] = setObjectPropertyFromOptions(object[property], options[property])
      }
    }, this)
  )
  /**
   * Convert data into object (returns a copy if the argument passed in is true)
   * @param {boolean} [copy]
   * @returns {Object}
   */
  this.toObject = function(copy) {
    const isModel = (value) => {
      return isObject(value) && typeof value.toObject === 'function'
    }

    const unravel = function(object) {
      const newObject = {}
      const properties = Object.keys(object)
      _.each(properties, function(property) {
        const value = object[property]
        if (isModel(value)) {
          newObject[property] = unravel(value.toObject())
        } else if (_.isArray(value) && value.length && isModel(value[0])) {
          newObject[property] = _.map(value, function(element) {
            return unravel(element.toObject())
          })
        } else {
          newObject[property] = value
        }
      })

      return newObject
    }

    const modelData = unravel(object)
    return copy ? _.cloneDeep(modelData) : modelData
  }
}

export default PropertyModelMixin
