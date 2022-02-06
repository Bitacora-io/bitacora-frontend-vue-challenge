<template>
  <nav class="c-side-nav">
    <div
      class="c-side-nav__logo"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/bitacora-logo-white.svg') + ')',
      }"
    ></div>

    <el-menu
      :unique-opened="true"
      default-active="1"
      class="c-side-nav__menu"
      :router="true"
      :collapse="isCollapsed"
      :collapse-transition="false"
    >
      <el-menu-item index="1" :route="{ name: 'dashboard' }">
        <el-icon>
          <home-filled />
        </el-icon>
        <template #title>{{ $t("general.nav.panel") }}</template>
      </el-menu-item>

      <el-menu-item index="2" route="/logs/create">
        <el-icon>
          <plus />
        </el-icon>
        <template #title>{{ $t("general.nav.createLog") }}</template>
      </el-menu-item>

      <el-menu-item-group class="c-side-nav__group-title">
        <template #title>Visualize</template>
      </el-menu-item-group>

      <el-sub-menu index="3">
        <template #title>
          <el-icon>
            <tickets />
          </el-icon>
          <span>{{ $t("general.nav.logs.menu") }}</span>
        </template>
        <el-menu-item index="3-1">
          <template #title>{{ $t("general.nav.logs.smartView") }}</template>
        </el-menu-item>
        <el-menu-item index="3-2" :route="{ name: 'logs.activity' }">
          <template #title>{{ $t("general.nav.logs.activity") }}</template>
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="4">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>{{ $t("general.nav.stock.menu") }}</span>
        </template>
        <el-menu-item index="4-1">
          <template #title>{{ $t("general.nav.stock.smartView") }}</template>
        </el-menu-item>
        <el-menu-item index="4-2" :route="{ name: 'stock.activity' }">
          <template #title>{{ $t("general.nav.stock.activity") }}</template>
        </el-menu-item>
        <el-menu-item index="4-3" :route="{ name: 'stock.report' }">
          <template #title>{{ $t("general.nav.stock.reports") }}</template>
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="5">
        <template #title>
          <el-icon>
            <user-filled />
          </el-icon>
          <span>{{ $t("general.nav.personnel.menu") }}</span>
        </template>
        <el-menu-item index="5-1">
          <template #title>
            {{ $t("general.nav.personnel.smartView") }}
          </template>
        </el-menu-item>
        <el-menu-item index="5-2" :route="{ name: 'personnel.activity' }">
          <template #title>{{ $t("general.nav.personnel.activity") }}</template>
        </el-menu-item>
        <el-menu-item index="5-3">
          <template #title>
            {{ $t("general.nav.personnel.reports") }}
          </template>
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item-group class="c-side-nav__group-title">
        <template #title>Manage</template>
      </el-menu-item-group>

      <el-menu-item index="6">
        <el-icon>
          <calendar />
        </el-icon>
        <template #title>Scheduled Tasks</template>
      </el-menu-item>

      <el-menu-item index="7">
        <el-icon>
          <paperclip />
        </el-icon>
        <template #title>Attachments</template>
      </el-menu-item>

      <el-menu-item index="8" :route="{ name: 'staff' }">
        <el-icon>
          <user-filled />
        </el-icon>
        <template #title>
          {{ $t("general.nav.manage.staff") }}
        </template>
      </el-menu-item>

      <el-sub-menu index="9">
        <template #title>
          <el-icon>
            <user-filled />
          </el-icon>
          <span>{{ $t("general.nav.catalogs.menu") }}</span>
        </template>
        <el-menu-item index="9-1" :route="{ name: 'projects' }">
          <template #title>{{ $t("general.nav.catalogs.projects") }}</template>
        </el-menu-item>
        <el-menu-item index="9-2">
          <template #title>
            {{ $t("general.nav.catalogs.subcategories") }}
          </template>
        </el-menu-item>
        <el-menu-item index="9-3">
          <template #title>
            {{ $t("general.nav.catalogs.items") }}
          </template>
        </el-menu-item>
        <el-menu-item index="9-4">
          <template #title>
            {{ $t("general.nav.catalogs.providers") }}
          </template>
        </el-menu-item>
        <el-menu-item index="9-5">
          <template #title>
            {{ $t("general.nav.catalogs.tags") }}
          </template>
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item index="10" :route="{ name: 'notifications' }">
        <el-icon>
          <bell />
        </el-icon>
        <template #title>{{ $t("general.nav.notifications") }}</template>
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<script>
import { ref, onMounted } from "vue";
import {
  HomeFilled,
  Plus,
  Tickets,
  Location,
  UserFilled,
  Calendar,
  Paperclip,
  Bell,
} from "@element-plus/icons-vue";

function calculateWidth() {
  if (window.innerWidth < 740) {
    return true;
  } else {
    return false;
  }
}

export default {
  name: "SideNav",
  components: {
    HomeFilled,
    Plus,
    Tickets,
    Location,
    UserFilled,
    Calendar,
    Paperclip,
    Bell,
  },
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  setup() {
    const isCollapsed = ref(false);

    onMounted(() => {
      isCollapsed.value = calculateWidth();
    });

    window.addEventListener("resize", () => {
      isCollapsed.value = calculateWidth();
    });

    return {
      isCollapsed,
    };
  },
};
</script>
