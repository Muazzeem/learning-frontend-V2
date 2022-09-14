<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-warning hover-shadow-lg hover-translate-y-n10" data-toggle="modal"
          data-target="#exampleModal">
     এখনই ভর্তি হোন
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel"><img src="../assets/icons/enrollment-64.png" alt="saiful azad"> আপনার তথ্য প্রদান করুন</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="checkForm()" autocomplete="off" class="needs-validation" novalidate>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationCustom01">নাম<abbr class="required" title="required">*</abbr></label>
                <input autofocus v-model="name" class="form-control" :class="{ 'is-valid':  name.length>=3}"
                       id="validationCustom01"
                       required>
              </div>
              <div class="col-md-6 mb-3">
                <label for="validationCustom02">ফোন নাম্বার<abbr class="required" title="required">*</abbr></label>
                <input v-model="phone" type="tel" class="form-control" id="validationCustom02"
                       :class="{ 'is-valid':  phone.length>=10}"
                       required>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-12 mb-3">
                <label for="validationCustom03">ই-মেইল<abbr class="required" title="required">*</abbr></label>
                <input v-model="email" type="text" class="form-control" id="validationCustom03"
                       :class="{ 'is-valid':  validEmail(email)}"
                       required>
              </div>
            </div>
            <div class="mt-1 float-right">
              <vue-recaptcha @verify="onVerify" @expired="onExpired" :sitekey="sitekey">
                <button type="submit" :disabled="isDisabled" class="btn btn-sm btn-primary btn-icon rounded-pill">
                  <span class="btn-inner--text">রেজিস্ট্রেশন করুন</span>
                  <span class="btn-inner--icon"><img src="../assets/icons/ok.png" alt="saiful azad"></span>
                </button>
              </vue-recaptcha>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import {VueRecaptcha} from 'vue-recaptcha';

export default {
  name: "ContactModal",
  components: {VueRecaptcha},
  data() {
    return {
      sitekey: '6LetAmYeAAAAAPVdEy3rzYYohRzIU5Nr6FHvKCNQ',
      name: '',
      phone: '',
      email: '',
    }
  },
  methods: {
    onVerify: function (response) {
      if (this.name.length >= 3 && this.phone.length >= 10 && this.validEmail(this.email)) {
        this.postData(response);
      }
    },
    onExpired: function () {
      console.log('Expired')
    },
    checkForm: function (e) {
      return true
    },
    postData: function (token) {
      axios.post('https://api.learning.fractalslab.com/crm/save-contact', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        token: token
      }).then(function (response) {
        console.log(response)
      })
    },
    validEmail: function (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  computed: {
    isDisabled() {
      return !(this.name && this.email && this.phone)
    }
  }
}
</script>

<style scoped>
img{
  height: 35px;
}
@media (max-width: 500px) {
  .btn {
    width: 100%;
  }
}

.required {
  color: #e42234;
  border: 0;
  border-bottom: none !important;
  cursor: inherit !important;
  text-decoration: none !important;
}
</style>