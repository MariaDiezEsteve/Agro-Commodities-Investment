import { mount } from '@vue/test-utils'
import CardNews from '@/components/Cards/CardNews.vue'

describe(' Empezar a testear CardNews.vue', () => {
    it('CardNews', () => {
      
      const wrapper = mount(CardNews ,{ 
        props: {
          information: Object
        }
        }
        )
      expect(wrapper.exists()).toBeTruthy()
    })
  })
  

