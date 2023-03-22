import { mount } from '@vue/test-utils'
import CardNews from '@/components/Cards/CardNews.vue'

describe(' Empezar a testear CardNews.vue', () => {
    it('CardNews', () => {
      
      const wrapper = mount(CardNews,{ 
        Title:'Cotton',
        

        }
        )
      expect(wrapper.exists()).toBe(true)
    })
  })
  

