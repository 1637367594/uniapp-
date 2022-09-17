import directives from './directives'

const importDirective = Vue => {
  Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key])
  })
}

export default importDirective