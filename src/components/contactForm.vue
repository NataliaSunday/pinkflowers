<template>
  <v-container>
       <p class="paragraph paragraph--white pb-16">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet laborum velit fugit doloremque sed, sapiente blanditiis nulla impedit id ducimus veniam dicta! At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
    <v-form class="contactForm pa-16">
         <v-row cols="12" sm="6" md="3">
          <v-text-field
            label="Name"
            solo
          ></v-text-field>
        </v-row>

        <v-row cols="12" sm="6" md="3">
          <v-text-field
            label="E-mail"
            solo
          ></v-text-field>
        </v-row>

         <v-row cols="12" sm="6" md="3">
          <v-text-field
            label="Subject"
            solo
          ></v-text-field>
        </v-row>

        <v-row cols="12" md="6"
      >
        <v-textarea
          solo
          name="input-7-4"
          label="Solo textarea"
        ></v-textarea>
      </v-row>
      <v-btn>submit</v-btn>
    </v-form>
</v-container>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.contactForm{
    border: solid 1px white;

}

</style>
