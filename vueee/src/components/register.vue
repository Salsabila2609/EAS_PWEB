<template>
  <div class="container mt-4">
    <h2 class="text-2xl mb-4 font-weight-bold">Form Registrasi Lomba</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="nama" class="form-label">Nama:</label>
        <input type="text" id="nama" v-model="formData.nama" required class="form-control" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input type="email" id="email" v-model="formData.email" required class="form-control" />
      </div>
      <div class="mb-3">
        <label for="sekolah" class="form-label">Asal Sekolah:</label>
        <input type="text" id="sekolah" v-model="formData.sekolah" required class="form-control" />
      </div>
      <div class="mb-3">
        <label for="tanggal" class="form-label">Tanggal Pendaftaran:</label>
        <input type="date" id="tanggal" v-model="formData.tanggal" required class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">
        Daftar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nama: '',
        email: '',
        sekolah: '',
        tanggal: '',
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const apiUrl = 'http://localhost:8000/api/regis';

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });

        const responseData = await response.json();

        console.log('Data Pendaftaran Berhasil Dikirim:', responseData);

        // Reset form setelah pengiriman
        this.formData = {
          nama: '',
          email: '',
          sekolah: '',
          tanggal: '',
        };
      } catch (error) {
        console.error('Terjadi kesalahan saat mengirim data:', error);
      }
    },
  },
};
</script>
