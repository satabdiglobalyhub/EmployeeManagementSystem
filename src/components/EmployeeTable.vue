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
      <tr v-for="employee in data">
        <div class="flex gap-3 mt-5">
          <img src="../assets/defaultEmployeePicture.svg" />
          <div class="flex flex-col">
            <td>{{ employee.name }}</td>
            <td>{{ employee.email }}</td>
          </div>
        </div>
        <td>{{ employee.designation }}</td>
        <td>{{ employee.phone }}</td>
        <td>{{ employee.status }}</td>
        <td>{{ employee.team }}</td>
        <td>
          <select class="border rounded shadow text-indigo-600">
            <option class="">View Details</option>
            <option>Set as Alumni</option>
          </select>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
};
</script>
