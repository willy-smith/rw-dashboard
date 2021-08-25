import {
  students,
  student,
  createStudent,
  updateStudent,
  deleteStudent,
} from './students'

describe('students', () => {
  scenario('returns all students', async (scenario) => {
    const result = await students()

    expect(result.length).toEqual(Object.keys(scenario.student).length)
  })

  scenario('returns a single student', async (scenario) => {
    const result = await student({ id: scenario.student.one.id })

    expect(result).toEqual(scenario.student.one)
  })

  scenario('creates a student', async () => {
    const result = await createStudent({
      input: {
        email: 'String387693',
        firstName: 'String',
        lastName: 'String',
        phone: 'String',
      },
    })

    expect(result.email).toEqual('String387693')
    expect(result.firstName).toEqual('String')
    expect(result.lastName).toEqual('String')
    expect(result.phone).toEqual('String')
  })

  scenario('updates a student', async (scenario) => {
    const original = await student({ id: scenario.student.one.id })
    const result = await updateStudent({
      id: original.id,
      input: { email: 'String26877522' },
    })

    expect(result.email).toEqual('String26877522')
  })

  scenario('deletes a student', async (scenario) => {
    const original = await deleteStudent({ id: scenario.student.one.id })
    const result = await student({ id: original.id })

    expect(result).toEqual(null)
  })
})
