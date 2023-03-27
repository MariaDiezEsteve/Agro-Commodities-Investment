import { mount } from '@vue/test-utils'
import CardNews from '@/components/Cards/CardNews.vue'

describe(' Empezar a testear CardNews.vue', () => {
    it('CardNews', () => {
      
      const wrapper = mount(CardNews,{ 
        title:'Cotton',
        description:'When it comes to finding the best broker for CFD cotton trading, there are a few things to consider.Firstly, look at the fees and commissions that brokers charge. Different brokers will offer different fees and it is important to compare different brokers in order to find one that suits your budget... ',
        src:'@/assets/images/imagenes-blog/algodon.jpg',
        }
        )
      expect(wrapper.exists()).toBeTruthy()
    })
  })
  

