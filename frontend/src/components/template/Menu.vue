<template>
  <aside class="menu" v-show="isMenuVisible">
      <div class="menu-filter">
          <i class="fa fa-search fa-lg"></i>
          <input type="text" placeholder="Digite para filtrar..."
            v-model="treeFilter" class="filter-field">
      </div>
      <Tree :data="treeData" :options="treeOptions" :filter="treeFilter" ref="tree" />
  </aside>
</template>

<script>
import { mapState } from 'vuex';
import Tree from "liquor-tree";
import { baseApiUrl } from "@/global";
import axios from 'axios';

export default {
    name: 'Menu',
    components: { Tree },
    computed: mapState(['isMenuVisible']),
    data: function() {
        return {
            treeFilter: '',
            treeData: this.getTreeData(),
            treeOptions: {
                propertyNames: { 'text': 'name' },
                filter: { emptyText: 'Categoria não encontrada' }
            }
        }
    },
    methods: {
        getTreeData() {
            const url = `${baseApiUrl}/categories/tree`;
            return axios.get(url).then(res => res.data);
        },
        onNodeSelect(node) {
            this.$router.push({
                name: 'articleByCategory',
                params: { id: node.id }
            })

            if (this.$mq === 'xs' || this.$mq === 'sm') {
                this.$store.commit('toggleMenu', false);
            }
        }
    },
    mounted() {
        this.$refs.tree.$on('node:selected', this.onNodeSelect);
    }
}
</script>

<style>
    .menu {
        grid-area: menu;
        background: linear-gradient(to right, #232526, #414345);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .menu a, .menu a:hover {
        color: #eee;
        text-decoration: none;
    }   

    .menu .tree-node.selected > .tree-content,
    .menu .tree-node .tree-content:hover {
        background-color: #fff3;
    }

    .tree-arrow.has-child {
        filter: brightness(2);
    }

    .menu .menu-filter {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;
        padding-bottom: 8px;
        border-bottom: 1px solid #aaa;
    }

    .menu .menu-filter i {
        color: #aaa;
        margin-right: 10px;
    }

    .menu input {
        color: #ccc;
        border: 0;
        outline: 0;
        width: 100%;
        background: transparent;
    }

    .tree-filter-empty {
        color: #ccc;
        margin-left: 20px;
    }

</style>