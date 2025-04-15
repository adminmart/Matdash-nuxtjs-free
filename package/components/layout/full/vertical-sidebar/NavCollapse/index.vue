<script setup>
import { Icon } from "@iconify/vue";
const props = defineProps({ item: Object, level: Number });
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!---Item Childern -->
  <!-- ---------------------------------------------- -->
  <div class="mb-1">
    <v-list-group no-action>
      <!-- ---------------------------------------------- -->
      <!---Dropdown  -->
      <!-- ---------------------------------------------- -->
      <template v-slot:activator="{ props }">
        <v-list-item
          v-bind="props"
          :value="item.title"
          :ripple="false"

        >
          <!---Icon  -->
          <template v-slot:prepend>
                    <Icon :icon="'solar:' + item.icon" height="18" width="18" :level="level" class="dot" :class="'text-' + item.BgColor" />
                </template>
          <!---Title  -->
          <v-list-item-title class="mr-auto">{{ item.title}}</v-list-item-title>
          <!---If Caption-->
          <v-list-item-subtitle
            v-if="item.subCaption"
            class="text-caption mt-n1 hide-menu"
          >
            {{ item.subCaption }}
          </v-list-item-subtitle>
        </v-list-item>
      </template>
      <!-- ---------------------------------------------- -->
      <!---Sub Item-->
      <!-- ---------------------------------------------- -->
      <div class="sublinks">
        <template
          v-for="(subitem, i) in item.children"
          :key="i"
          v-if="item.children"
        >
          <LayoutFullVerticalSidebarNavCollapse
            :item="subitem"
            v-if="subitem.children"
            :level="level + 1"
          />
          <LayoutFullVerticalSidebarDropdown
            :item="subitem"
            :level="level + 1"
            v-else
          ></LayoutFullVerticalSidebarDropdown>
        </template>
      </div>
    </v-list-group>
  </div>
  <!-- ---------------------------------------------- -->
  <!---End Item Sub Header -->
  <!-- ---------------------------------------------- -->
</template>
