<template>
  <div class="register">
    <div class="image-header">
      <v-img
        src="../assets/Organisers/header.png"
        class="black--text align-end header-length"
        eager
      ></v-img>
      <div class="display-3 image-title white--text pl-10 pb-10">Register</div>
    </div>
    <div>
      <v-alert
        :value="alert"
        prominent
        type="error"
        border="top"
        transition="scale-transition"
        class="mb-16"
        width="100vw"
      >
        We have reached our maximum capacity for the event. If you didn’t get a
        chance to get your ticket, please contact us or consider joining us at
        one of our future events!
      </v-alert>
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInUp"
      appear
    >
      <v-card v-if="!alert" class="pa-8 my-16 mx-5" dark raised outlined
        ><v-form
          v-if="!isLoading"
          ref="form"
          v-model="valid"
          lazy-validation
          dark
          :disabled="alert"
        >
          <v-text-field
            v-model="name"
            :counter="20"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="phoneNo"
            :rules="phoneNoRules"
            label="Phone Number"
            required
          ></v-text-field>
          <div class="mt-3 mb-1">Occupation</div>
          <div class="v-divider"></div>
          <v-radio-group v-model="radioGroup">
            <v-radio key="1" label="Student" value="1"></v-radio>
            <v-radio key="2" label="Working Professional" value="2"></v-radio>
            <v-radio key="3" label="Other" value="3"></v-radio>
          </v-radio-group>
          <v-text-field
            v-if="radioGroup == 1"
            v-model="college"
            :rules="collegeRules"
            label="College Name"
            required
          ></v-text-field>
          <v-text-field
            v-if="radioGroup == 1"
            v-model="usn"
            :rules="usnRules"
            label="USN"
            required
          ></v-text-field>
          <v-text-field
            v-if="radioGroup == 2 || radioGroup == 3"
            v-model="organization"
            :rules="organizationRules"
            label="Name of Organization"
            required
          ></v-text-field>
        </v-form>
        <v-card-actions v-if="!isLoading" class="mt-5">
          <v-spacer></v-spacer>
          <v-btn color="error" class="mr-4" @click="reset"> Reset</v-btn>
          <v-btn :disabled="!valid" color="success" @click="validate">
            Submit
          </v-btn></v-card-actions
        >
        <div
          class="loading d-flex align-center justify-center flex-column pa-10"
          v-else
        >
          <v-progress-circular
            :size="70"
            :width="7"
            color="yellow"
            indeterminate
          ></v-progress-circular>
          <div class="display-1 mt-8">Saving Details & Registering ...</div>
        </div>
      </v-card>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      alert: false,
      isLoading: false,
      radioGroup: null,
      name: "",
      ticketLimit: 227,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      phoneNo: "",
      phoneNoRules: [(v) => !!v || "Phone number is required"],
      college: "",
      collegeRules: [(v) => !!v || "College name is required"],
      usn: "",
      usnRules: [(v) => !!v || "USN is required"],
      organization: "",
      organizationRules: [(v) => !!v || "Organization name is required"],
      unsubscribe: null,
    };
  },
  methods: {
    validate() {
      if (
        this.$store.getters.getPaticipantsCount[0].detail.ParticipantsCounter <=
        this.ticketLimit
      ) {
        if (this.$refs.form.validate()) {
          this.isLoading = true;
          let payload = {
            name: this.name,
            email: this.email,
            phoneNo: this.phoneNo,
            occupation:
              this.radioGroup == 1
                ? "Student"
                : this.radioGroup == 2
                ? "Professional"
                : "Other",
            usn: this.usn,
            commonField: this.college != "" ? this.college : this.organization,
            timestamp: Date(Date.now()),
          };
          this.$store
            .dispatch("saveParticipantDetails", payload)
            .then(() => {
              this.isLoading = false;
              this.$router.push("/succesful-registration");
            })
            .catch((resp) => {
              console.log(resp);
            });
        }
      } else {
        this.alert = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
  created() {
    if (
      this.$store.getters.getPaticipantsCount[0].detail.ParticipantsCounter >
      this.ticketLimit
    ) {
      this.alert = true;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_resources.scss";
.register {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: $black;
  .v-card {
    width: 80vw;
    @include responsive($phone) {
      width: 85vw;
    }
  }
}
</style>