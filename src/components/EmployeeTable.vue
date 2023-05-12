<template>
  <table>
    <thead>
      <tr>
        <th>Full Name/Email</th>
        <th>Designation</th>
        <th>Phone</th>
        <th>Status</th>
        <th>Team</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in data" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
};
</script>
