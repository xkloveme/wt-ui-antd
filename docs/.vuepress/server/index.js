const req = require.context('../api', false, /\.js$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)

const api = {}
requireAll(req).map(item => {
  for (const key in item) {
    api[key] = item[key]
  }
})

export default api
