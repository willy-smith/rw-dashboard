import Student from 'src/components/Student/Student'

export const QUERY = gql`
  query FindStudentById($id: Int!) {
    student: student(id: $id) {
      id
      email
      firstName
      lastName
      phone
      countryCode
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Student not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ student }) => {
  return <Student student={student} />
}
