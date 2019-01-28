const remoteURL = "http://localhost:5002"

export default {
    getAllStudents() {
        return fetch(`${remoteURL}/students`).then(e => e.json())
      }
}