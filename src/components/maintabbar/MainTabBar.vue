<template>
  <TabBar>
    <TabBarItem path="/home">
      <img slot="item-icon" src="../../assets/img/tabbar/t1.png" alt="">
      <img slot="item-icon-active" src="../../assets/img/tabbar/t2.png" alt="">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="red">
      <img slot="item-icon" src="../../assets/img/tabbar/t1.png" alt="">
      <img slot="item-icon-active" src="../../assets/img/tabbar/t2.png" alt="">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart" activeColor="red">
      <img slot="item-icon" src="../../assets/img/tabbar/t1.png" alt="">
      <img slot="item-icon-active" src="../../assets/img/tabbar/t2.png" alt="">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="red">
      <img slot="item-icon" src="../../assets/img/tabbar/t1.png" alt="">
      <img slot="item-icon-active" src="../../assets/img/tabbar/t2.png" alt="">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from '@/components/tabbar/TabBar.vue'
import TabBarItem from '@/components/tabbar/TabBarItem.vue'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }

}
</script>

<style scoped>
</style>
