<template>
  <nav class="c-top-nav">
    <el-dropdown
      trigger="click"
      class="c-organizations-dropdown"
      @command="setActive"
    >
      <span class="el-dropdown-link">
        {{ active.name }}
        <el-icon>
          <arrow-down-bold />
        </el-icon>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="organization in organizations"
            :key="organization"
            :command="organization"
          >
            {{ organization.name }}
          </el-dropdown-item>
          <el-dropdown-item command="action-edit" divided>
            {{ $t("general.editOrganizations") }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <el-menu class="c-top-nav__right" mode="horizontal">
      <el-sub-menu index="1">
        <template #title><i class="fas fa-globe"></i></template>
        <h5 class="c-top-nav__group-title">Idioma</h5>
        <el-menu-item
          v-for="(locale, index) in locales"
          :key="locale.value"
          :index="`1-${index}`"
          @click="setLocale(locale)"
        >
          {{ locale.label }}
        </el-menu-item>
        <h5 class="c-top-nav__group-title">Zona Horaria</h5>
        <el-menu-item index="1-3">{{ user.timezone }}</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="2">
        <template #title><i class="far fa-question-circle"></i></template>
        <h5 class="c-top-nav__group-title">Ayuda</h5>
        <el-menu-item index="2-1">Videos</el-menu-item>
        <el-menu-item index="2-1">Guias</el-menu-item>
      </el-sub-menu>

      <el-sub-menu
        index="3"
        popper-class="o-popup-submenu o-account-submenu"
        data-test="nav-profile-icon"
      >
        <template #title><i class="fas fa-user rounded"></i></template>
        <el-menu-item index="3-1" class="o-account-submenu__item-account">
          <h6 class="o-account-submenu__email">{{ user.email }}</h6>
          <div>Mi Cuenta</div>
        </el-menu-item>
        <li class="o-popup-submenu__separator"></li>
        <el-menu-item index="3-2">Suscripciones</el-menu-item>
        <li class="o-popup-submenu__separator"></li>
        <el-menu-item index="3-3" class="o-popup-submenu--item-huge">
          Descuentos por referencia
        </el-menu-item>
        <li class="o-popup-submenu__separator"></li>
        <el-menu-item
          index="3-4"
          @click="logout()"
          data-test="nav-profile-logout"
        >
          Salir
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import Router from "@/router";
import store from "@/store";
import { ArrowDownBold } from "@element-plus/icons-vue";

export default {
  name: "TopNav",
  components: {
    ArrowDownBold,
  },
  computed: {
    ...mapState("organization", {
      organizations: "organizations",
      active: "active",
    }),
    ...mapState("auth", ["user"]),
  },
  mounted() {
    store.dispatch("organization/all");
  },
  data() {
    return {
      locales: [
        {
          label: "EN",
          value: "en",
        },
        {
          label: "ES",
          value: "es",
        },
      ],
    };
  },
  methods: {
    setActive(organization) {
      if (organization == "action-edit") {
        return Router.push({ name: "organizations" });
      }

      store.dispatch("organization/setActive", organization);
      window.location.reload();
    },
    setLocale(locale) {
      if (this.$i18n.locale !== locale.value) {
        this.$i18n.locale = locale.value;
        localStorage.setItem("default_locale", locale.value);
        this.$router.go(this.$router.currentRoute);
      }
    },
    async logout() {
      try {
        await store.dispatch("auth/logout");
      } catch (error) {
        console.log(error);
      }

      Router.push({
        name: "login",
      });
    },
  },
};
</script>
