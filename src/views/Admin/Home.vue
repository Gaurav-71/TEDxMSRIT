<template>
  <div class="admin-home">
    <div class="chip-holder d-flex justify-start align-center mb-5">
      <v-chip
        @click="selectTable(0)"
        class="ma-2 px-5"
        dark
        :text-color="pill[0]"
        large
        key="0"
      >
        <i class="fa fa-user size" aria-hidden="true"></i>
        <span class="hidden-sm-and-down ml-3">All Details</span>
      </v-chip>
      <v-chip
        @click="selectTable(1)"
        class="ma-2 px-5"
        dark
        :text-color="pill[1]"
        large
        key="1"
      >
        <i class="fa fa-envelope size" aria-hidden="true"></i>
        <span class="hidden-sm-and-down ml-3">Email Only</span>
      </v-chip>
      <v-chip
        @click="selectTable(2)"
        class="ma-2 px-5"
        dark
        :text-color="pill[2]"
        large
        key="2"
      >
        <i class="fa fa-phone size" aria-hidden="true"></i>
        <span class="hidden-sm-and-down ml-3">Phone Number Only</span>
      </v-chip>
      <v-spacer></v-spacer>
      <div class="display-1 yellow--text">
        {{ $store.getters.getPaticipantsCount[0].detail.ParticipantsCounter }}
      </div>
    </div>
    <v-simple-table
      v-if="tableNo == 0"
      dark
      fixed-header
      height="72vh"
      min-width="80vw"
      class="elevation-12"
      key="0"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left yellow--text">Name</th>
            <th class="text-left yellow--text">Email</th>
            <th class="text-left yellow--text">Phone Number</th>
            <th class="text-left yellow--text">Occupation</th>
            <th class="text-left yellow--text">College / Organization</th>
            <th class="text-left yellow--text">USN</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="participant in $store.getters.getParticipants"
            :key="participant.participants.email"
          >
            <td>{{ participant.participants.name }}</td>
            <td>
              <a :href="'mailto:' + participant.participants.email">{{
                participant.participants.email
              }}</a>
            </td>
            <td>
              <a :href="'tel:' + participant.participants.phoneNo">{{
                participant.participants.phoneNo
              }}</a>
            </td>
            <td>{{ participant.participants.occupation }}</td>
            <td>{{ participant.participants.commonField }}</td>
            <td v-if="participant.participants.usn != ''">
              {{ participant.participants.usn }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-simple-table
      v-else-if="tableNo == 1"
      dark
      fixed-header
      min-width="80vw"
      class="elevation-12"
      key="1"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left yellow--text">Emails</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="participant in $store.getters.getParticipants"
            :key="participant.participants.email"
          >
            <td>
              <a :href="'mailto:' + participant.participants.email">{{
                participant.participants.email
              }}</a>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-simple-table
      v-else-if="tableNo == 2"
      dark
      fixed-header
      min-width="80vw"
      class="elevation-12"
      key="2"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left yellow--text">Phone Numbers</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="participant in $store.getters.getParticipants"
            :key="participant.participants.email"
          >
            <td>
              <a :href="'mailto:' + participant.participants.phoneNo">{{
                participant.participants.phoneNo
              }}</a>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unsubscribe: null,
      tableNo: 0,
      pill: ["yellow", "white", "white"],
    };
  },
  methods: {
    selectTable(tno) {
      this.tableNo = tno;

      for (var i = 0; i < 3; i++) {
        if (i == this.tableNo) {
          this.pill.splice(tno, 0, "yellow");
          //this.pill[tno] = "yellow";
        } else {
          this.pill.splice(i, 0, "white");
          //this.pill[tno] = "white";
        }
      }
    },
  },
  mounted() {
    this.$store
      .dispatch("loadParticipants")
      .then((resp) => {
        this.unsubscribe = resp;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/_resources.scss";

.admin-home {
  width: 100%;
  min-height: 100vh;
  background-image: $black;
  padding: 5rem 2rem;
}
</style>