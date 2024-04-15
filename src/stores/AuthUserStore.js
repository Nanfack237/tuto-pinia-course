import { defineStore } from "pinia";

export const useAuthUserStore = defineStore("AuthUserStore", {
  state: () => {
    return {
        username: "hanskelian",
    };
  },
  actions:{
    visitTwitterProfile(){
        window.open(`https://twitter.com/${this.username}`, "_blank")
    }
  }
});