import { mount } from '@vue/test-utils';
import CardTeam from '@/components/Cards/CardTeam.vue';


describe(' Empezar a testear CardTeam.vue', () => {
    it('test CardTeam', () => {
      const wrapper = mount(CardTeam,{
        id:"commodities",
        name:"Nasreddin Oufallah",
        descriptions:"FullStack",


        
      });
      expect(wrapper.html()).toBeTruthy()
    })
  })
  