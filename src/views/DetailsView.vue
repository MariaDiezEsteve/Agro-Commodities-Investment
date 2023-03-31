  <template>
    <SideBar class="col-lg-2  col-md-3  col-sm-3"/>
    <div class="col-lg-10 col-md-9 col-sm-9 px-5" >
      <h1>Agro Commodities Details</h1>
      <p>This page shows the information details about the following commodities:</p>
      <img v-if="data.isError" src="@/assets/images/error.jpeg" alt="error">
      <img v-if="isLoading" src="@/assets/images/spin.gif" alt="loading">
      <div v-if="!data.isError && !isLoading" >
        <BarChart :data = "data"/> 
        <!-- <PieChart :data = "data" /> -->
      </div>

      <div>
        <TableChart :data = "data"/>
      </div>
    </div>
  
    
  </template>
  
  <script setup>
  import info from '@/DataInformation/dataInfo'
  import {ref,onMounted} from "vue";
  import SideBar from '@/components/Commons/SideBar.vue'
  import BarChart from '@/components/Charts/BarChart.vue'
   import TableChart from "@/components/Charts/TableChart.vue"
    let isLoading = ref(true) 
    let data =  ref(onMounted(async () => {
      data.value = await info.getData()
      if( !data.value.isLoading){
        isLoading.value = false
      }

    }))


  </script>
  
  <style lang="scss" scoped>
    @import "@/assets/Sass/--parcial.scss";

    #app{
      width: 100%;
    }

    h1{
      margin: 1.5rem;
      text-align: center;
    }

    p{
      margin-bottom: 1rem;
      text-align: center;
    }

  
  </style>

