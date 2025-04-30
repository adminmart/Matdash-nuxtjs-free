<script setup lang="ts">
import { onMounted, ref, shallowRef, watch } from 'vue';
import { useDisplay } from "vuetify";
import sidebarItems from "@/components/layout/full/vertical-sidebar/sidebarItem";
import { Menu2Icon } from "vue-tabler-icons";

const sidebarMenu = shallowRef(sidebarItems);

const { mdAndDown } = useDisplay();
const sDrawer = ref(true);
onMounted(() => {
  sDrawer.value = !mdAndDown.value; // hide on mobile, show on desktop
});
watch(mdAndDown, (val) => {
  sDrawer.value = !val;
});
</script>

<template>
  <!------Sidebar-------->
  <v-navigation-drawer
    left
    elevation="0"
    app
    class="leftSidebar"
    v-model="sDrawer"
  >
    <!---Logo part -->
    <div class="pa-5">
      <LayoutFullLogo />
    </div>
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <div>
      <perfect-scrollbar class="scrollnavbar">
        <v-list class="pa-6 pt-0">
          <!---Menu Loop -->
          <template v-for="(item, i) in sidebarMenu">
            <!---Item Sub Header -->
            <LayoutFullVerticalSidebarNavGroup
              :item="item"
              v-if="item.header"
              :key="item.title"
            />

            <!---If Has Child -->
            <LayoutFullVerticalSidebarNavCollapse
              class="leftPadding"
              :item="item"
              :level="0"
              v-else-if="item.children"
            />

            <!---Single Item-->
            <LayoutFullVerticalSidebarNavItem
              :item="item"
              v-else
              class="leftPadding"
            />
            <!---End Single Item-->
          </template>
        </v-list>
        <div class="pa-4">
          <LayoutFullVerticalSidebarUpgradeBox />
        </div>
      </perfect-scrollbar>
    </div>
  </v-navigation-drawer>
  <!------Header-------->
  <v-app-bar elevation="0" height="70" class="top-header">
    <div class="d-flex align-center justify-space-between w-100">
      <div>
        <v-btn
          class="hidden-lg-and-up ms-md-3  text-muted"
          @click="sDrawer = !sDrawer"
          icon
          variant="flat"
          size="small"
        >
          <Menu2Icon size="20" stroke-width="1.5" />
        </v-btn>
        <!-- Notification -->
        <LayoutFullVerticalHeaderNotificationDD />
      </div>
      <div>
        <!-- Upgrade button -->
        <v-btn
          class="mr-2 bg-primary"
          href="https://adminmart.com/product/matdash-vuetify-nuxt-js-admin-template/?ref=56#product-demo-section"
          target="_blank"
          >Check Pro Template</v-btn
        >
        <!-- User Profile -->
        <LayoutFullVerticalHeaderProfileDD />
      </div>
    </div>
  </v-app-bar>
</template>
