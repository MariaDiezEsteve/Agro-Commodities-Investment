<template>
   <sidebar-menu :menu="menu"></sidebar-menu>
</template>
  
<script setup>
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

const menu = [
                {
                    header: 'Raw Investing',
                    // falta el icono de la marca
                },
                {
                    href: '/',
                    title: 'Home',
                    icon: 'fa fa-user'
                },
                {
                    href: '/details',
                    title: 'Products Details',
                    icon: 'fa fa-chart-area'
                },
                 {
                  href: '/user',
                  title: 'User Customize',
                  icon: 'fa fa-chart-area'
                },
                {
                  href: '/blog',
                  title: 'Blog',
                  icon: 'fa fa-chart-area'
                },
                {
                    href: '/about',
                    title: 'Contact Us',
                    icon: 'fa fa-chart-area'
                },
            ]
</script>
  
  <style lang="sass" scoped>
  
  </style>

  <!-- Si da error, incluir esta linea de codigo en la consola npm i vue-sidebar-menu --save -->
  