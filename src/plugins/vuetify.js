// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import vuetify from 'vite-plugin-vuetify'

export default createVuetify({
  icons: {
    iconfont: 'md' || 'fa' || 'md'
  },
  theme: {
    themes: {
      light: {
        primary: '#7C92FE'
      }
    }
  }
})


// export default new vuetify ({
//   icons: {
//     iconfont: 'md' || 'fa' || 'md'
//   },
//   theme: {
//     themes: {
//       light: {
//         primary: '#7C92FE'
//       }
//     }
//   }
// });