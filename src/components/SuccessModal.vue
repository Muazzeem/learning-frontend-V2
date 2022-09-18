<template>
  <div class="modal modal-success fade" id="modal_success" tabindex="-1" role="dialog" aria-labelledby="modal_success"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title h6" id="modal_title_6">It looks ok to me</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="py-3 text-center">
            <i class="fas fa-exclamation-circle fa-4x"></i>
            <h5 class="heading h4 mt-4">Let's get started</h5>
            <p>
              You can easy create stackable modal boxes. For example, your inline content or Ajax response can contain a
              gallery:
            </p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-sm btn-white" data-dismiss="modal">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessModal",
  mounted() {
  },
}
</script>

<style scoped>

</style>