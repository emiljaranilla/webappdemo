// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

const formapp = new Vue({
  el: '#aapp',
  data: {
    errors: [],
    Email: null,
    Name: null,
    CName: null
  },
  methods:{
    checkForm: function (e) {
      if (this.Email && this.Name) {
        return true;
      }

      this.errors = [];

      if (!this.Email) {
        this.errors.push('Email required.');
      }
      if (!this.Name) {
        this.errors.push('N required.');
      }

      e.preventDefault();
    }
  }
});

// JavaScript Document

Vue.component ('my-component',{

    template: `<div>

    this is a component

    </div>`

});

const app = new Vue({
    el: '#app',

    data () {

        return {
            message: "Sign-up and get 70% Discount"
                }

        },

components: {

'my-component':{

       template: `<div>

        Enter your details to download the discount voucher

        </div>` 
    }

}



});
        
