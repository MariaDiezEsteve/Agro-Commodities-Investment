import { mount } from '@vue/test-utils';
import CardNews from '@/components/Cards/CardNews.vue';


describe(' Empezar a testear CardNews.vue', () => {
    it('test CardNews', () => {
      const wrapper = mount(CardNews,{
        props:{
          information: Object
        }
      });
      expect(wrapper.html()).toBeTruthy()
    })
  })
  

